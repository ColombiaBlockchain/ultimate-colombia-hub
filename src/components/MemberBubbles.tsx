import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

interface Member {
  id: string;
  initials: string;
}

export const MemberBubbles = () => {
  const { t } = useLanguage();
  const [memberCount, setMemberCount] = useState(64);
  const [members, setMembers] = useState<Member[]>([
    { id: '1', initials: 'DL' },
    { id: '2', initials: 'NR' },
    { id: '3', initials: 'JM' },
    { id: '4', initials: 'AC' },
    { id: '5', initials: 'LG' },
    { id: '6', initials: 'MF' },
    { id: '7', initials: 'RC' },
  ]);

  useEffect(() => {
    // Load initial count from database
    const loadRegistrations = async () => {
      const { count } = await supabase
        .from('tournament_registrations')
        .select('*', { count: 'exact', head: true });
      
      if (count !== null) {
        setMemberCount(64 + count);
      }
    };

    // Load recent registrations for bubbles
    const loadRecentRegistrations = async () => {
      const { data } = await supabase
        .from('tournament_registrations')
        .select('name, created_at')
        .order('created_at', { ascending: false })
        .limit(7);

      if (data) {
        const newMembers = data.map((registration, index) => {
          const initials = registration.name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .slice(0, 2)
            .join('');
          
          return {
            id: `db-${index}`,
            initials
          };
        });
        setMembers(newMembers);
      }
    };

    loadRegistrations();
    loadRecentRegistrations();

    // Set up real-time subscription
    const channel = supabase
      .channel('tournament-registrations')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'tournament_registrations' },
        (payload) => {
          const newRegistration = payload.new as any;
          addNewMember(newRegistration.name);
          setMemberCount(prev => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const addNewMember = (name: string) => {
    const initials = name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
    
    const newMember = {
      id: Date.now().toString(),
      initials
    };

    setMembers(prev => [newMember, ...prev.slice(0, 7)]);
    setMemberCount(prev => prev + 1);
  };

  // Expose addNewMember to parent component
  (window as any).addNewMember = addNewMember;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        {members.map((member, index) => (
          <div
            key={member.id}
            className={`w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-green flex items-center justify-center text-black font-bold text-sm transition-all duration-300 ${
              index === 0 ? 'animate-scale-in' : ''
            }`}
            style={{ 
              zIndex: members.length - index,
              marginLeft: index > 0 ? '-8px' : '0'
            }}
          >
            {member.initials}
          </div>
        ))}
        <div className="w-10 h-10 rounded-full bg-muted border-2 border-dashed border-muted-foreground flex items-center justify-center text-muted-foreground text-xs">
          +
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm md:text-base">
        <span className="font-medium text-foreground">{t('hero.members')}</span> 
        <span className="font-bold text-neon-green ml-1">{memberCount}+</span>
      </p>
    </div>
  );
};