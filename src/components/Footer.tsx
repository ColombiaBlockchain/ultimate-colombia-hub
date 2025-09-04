import { Instagram, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="p-3 rounded-lg bg-muted hover:bg-neon-magenta/20 hover:text-neon-magenta transition-all duration-200 hover-scale"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-lg bg-muted hover:bg-red-500/20 hover:text-red-400 transition-all duration-200 hover-scale"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-lg bg-muted hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-200 hover-scale"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="/politica-de-datos" 
              className="text-muted-foreground hover:text-neon-cyan transition-colors duration-200"
            >
              {t('footer.data-policy')}
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="/terminos-y-condiciones" 
              className="text-muted-foreground hover:text-neon-cyan transition-colors duration-200"
            >
              {t('footer.terms')}
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center max-w-2xl leading-relaxed">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};