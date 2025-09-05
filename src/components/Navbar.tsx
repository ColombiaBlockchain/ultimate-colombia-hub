import { useLanguage } from '@/contexts/LanguageContext';
import tournamentLogo from '@/assets/tournament-logo.jpg';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('community-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/3921c9ae-2613-4eb4-87b2-9395368b6709.png" 
            alt="Tournament Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="font-orbitron text-lg font-bold text-neon-green hidden sm:block">
            EA FC 25
          </span>
        </div>

        {/* Navigation Links and CTA */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 glow-neon-green text-sm"
          >
            {t('nav.join')}
          </button>
          
          {/* Language Toggle */}
          <div className="flex items-center space-x-1 bg-muted/50 rounded-lg p-1">
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                language === 'es' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                language === 'en' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};