import { Instagram, Twitch, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Custom TikTok and Kick icons as SVGs
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const KickIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 2h20v20H2V2zm5 3v14l7-7-7-7zm10 7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
  </svg>
);

interface EnhancedInfluencerCardProps {
  name: string;
  handle: string;
  avatar: string;
  platforms: {
    instagram?: string;
    tiktok?: string;
    twitch?: string;
    linkedin?: string;
    kick?: string;
    website?: string;
  };
  type?: 'creator' | 'sponsor' | 'organization';
  showDisclaimer?: boolean;
}

export const EnhancedInfluencerCard = ({ 
  name, 
  handle, 
  avatar, 
  platforms, 
  type = 'creator',
  showDisclaimer = false
}: EnhancedInfluencerCardProps) => {
  const isOrganization = type === 'organization';
  const isSponsor = type === 'sponsor';

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover-scale hover:border-neon-cyan transition-all duration-300 group">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img 
            src={avatar} 
            alt={name}
            className={`w-20 h-20 ${isOrganization ? 'rounded-xl' : 'rounded-full'} object-cover border-2 border-neon-green/50 group-hover:border-neon-cyan transition-colors duration-300`}
          />
          <div className={`absolute -bottom-2 -right-2 w-6 h-6 ${
            isSponsor ? 'bg-yellow-500' : 
            isOrganization ? 'bg-blue-500' : 'bg-neon-green'
          } rounded-full border-2 border-card`}></div>
        </div>
        
        <div className="text-center">
          <h3 className="font-orbitron font-bold text-foreground">{name}</h3>
          <p className="text-sm text-neon-cyan">{handle}</p>
        </div>
        
        <div className="flex items-center space-x-3 flex-wrap justify-center">
          {platforms.instagram && (
            <a 
              href={platforms.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-neon-magenta/20 hover:text-neon-magenta transition-colors duration-200"
            >
              <Instagram size={16} />
            </a>
          )}
          {platforms.tiktok && (
            <a 
              href={platforms.tiktok} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-black hover:text-white transition-colors duration-200"
            >
              <TikTokIcon />
            </a>
          )}
          {platforms.twitch && (
            <a 
              href={platforms.twitch} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-purple-500/20 hover:text-purple-400 transition-colors duration-200"
            >
              <Twitch size={16} />
            </a>
          )}
          {platforms.linkedin && (
            <a 
              href={platforms.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={16} />
            </a>
          )}
          {platforms.kick && (
            <a 
              href={platforms.kick} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-green-500/20 hover:text-green-400 transition-colors duration-200"
            >
              <KickIcon />
            </a>
          )}
          {platforms.website && (
            <a 
              href={platforms.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors duration-200"
            >
              <Globe size={16} />
            </a>
          )}
        </div>

        {/* Disclaimer button for federation */}
        {showDisclaimer && (
          <div className="mt-4 text-center border-t border-border pt-4">
            <p className="text-xs text-muted-foreground mb-2">
              La federación apoya pero no patrocina el torneo
            </p>
            <Button
              onClick={() => window.open('/disclaimer-federacion', '_blank')}
              variant="outline"
              size="sm"
              className="text-xs hover:border-neon-cyan hover:text-neon-cyan"
            >
              Ver disclaimer oficial
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};