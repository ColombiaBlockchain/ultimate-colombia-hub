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
            TORNEO EAFC25
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a 
            href="#hero" 
            className="text-foreground hover:text-neon-cyan transition-colors duration-200 text-sm lg:text-base"
          >
            {t('nav.home')}
          </a>
          <button 
            onClick={scrollToForm}
            className="text-foreground hover:text-neon-cyan transition-colors duration-200 text-sm lg:text-base"
          >
            {t('nav.join')}
          </button>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center space-x-1 sm:space-x-2 bg-muted/50 rounded-lg p-1">
          <button
            onClick={() => setLanguage('es')}
            className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
              language === 'es' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            ES
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
              language === 'en' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};