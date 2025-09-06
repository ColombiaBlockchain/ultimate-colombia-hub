import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Twitch, Youtube, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface TournamentConfig {
  id: string;
  status_label: string;
  stream_url: string | null;
  is_live: boolean;
  stream_platform: string | null;
}

export const TournamentStatus = () => {
  const [config, setConfig] = useState<TournamentConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTournamentConfig();
    
    // Subscribe to real-time updates
    const channel = supabase
      .channel('tournament-config-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tournament_config'
        },
        () => {
          fetchTournamentConfig();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTournamentConfig = async () => {
    try {
      const { data, error } = await supabase
        .from('tournament_config')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Error fetching tournament config:', error);
        return;
      }

      setConfig(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPlatformIcon = (platform: string | null) => {
    switch (platform) {
      case 'twitch':
        return <Twitch size={16} />;
      case 'youtube':
        return <Youtube size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  const handleStreamClick = () => {
    if (config?.stream_url) {
      window.open(config.stream_url, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center space-y-4 p-6 bg-card border border-border rounded-2xl">
        <div className="h-6 w-32 bg-muted animate-pulse rounded"></div>
        <div className="h-10 w-40 bg-muted animate-pulse rounded"></div>
        <div className="h-6 w-24 bg-muted animate-pulse rounded"></div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="flex flex-col items-center space-y-4 p-6 bg-card border border-border rounded-2xl">
        <Badge variant="secondary">Estado del torneo no disponible</Badge>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-card border border-border rounded-2xl hover:border-neon-cyan transition-all duration-300">
      {/* Status Badge */}
      <Badge 
        variant={config.is_live ? "default" : "secondary"}
        className={`text-sm font-medium ${
          config.is_live 
            ? 'bg-neon-green text-black animate-pulse' 
            : 'bg-muted text-muted-foreground'
        }`}
      >
        {config.status_label}
      </Badge>

      {/* Stream Button */}
      {config.stream_url ? (
        <Button
          onClick={handleStreamClick}
          variant="outline"
          size="lg"
          className="font-orbitron font-bold hover:border-neon-cyan hover:text-neon-cyan transition-all duration-200 flex items-center gap-2"
        >
          {getPlatformIcon(config.stream_platform)}
          Ver torneo en vivo
        </Button>
      ) : (
        <Button
          variant="outline"
          size="lg"
          disabled
          className="font-orbitron font-bold opacity-50 cursor-not-allowed flex items-center gap-2"
        >
          <ExternalLink size={16} />
          Transmisión próximamente
        </Button>
      )}

      {/* Live Indicator */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground">En vivo:</span>
        <div className="flex items-center space-x-2">
          <div 
            className={`w-3 h-3 rounded-full ${
              config.is_live 
                ? 'bg-neon-green animate-pulse shadow-[0_0_10px_hsl(var(--neon-green))]' 
                : 'bg-muted'
            }`}
          ></div>
          <span className="text-sm font-medium">
            {config.is_live ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    </div>
  );
};