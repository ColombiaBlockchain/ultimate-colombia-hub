import { Instagram, Youtube, Twitch } from 'lucide-react';

interface InfluencerCardProps {
  name: string;
  handle: string;
  avatar: string;
  platforms: {
    instagram?: string;
    youtube?: string;
    twitch?: string;
  };
}

export const InfluencerCard = ({ name, handle, avatar, platforms }: InfluencerCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover-scale hover:border-neon-cyan transition-all duration-300 group">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img 
            src={avatar} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-neon-green/50 group-hover:border-neon-cyan transition-colors duration-300"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-neon-green rounded-full border-2 border-card"></div>
        </div>
        
        <div className="text-center">
          <h3 className="font-orbitron font-bold text-foreground">{name}</h3>
          <p className="text-sm text-neon-cyan">{handle}</p>
        </div>
        
        <div className="flex items-center space-x-3">
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
          {platforms.youtube && (
            <a 
              href={platforms.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200"
            >
              <Youtube size={16} />
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
        </div>
      </div>
    </div>
  );
};