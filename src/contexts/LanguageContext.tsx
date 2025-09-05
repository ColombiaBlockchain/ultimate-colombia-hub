import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.join': 'Unirte a la comunidad',
    
    // Hero
    'hero.title': 'El torneo más épico de EAFC 25 en Colombia empieza en…',
    'hero.subtitle': 'Ya casi arrancamos. Únete a la comunidad y sé el primero en enterarte de próximos torneos y cupos.',
    'hero.cta': 'Unirme a la comunidad',
    'hero.members': 'Miembros en la comunidad:',
    'hero.creators': 'Creadores que promueven el torneo',
    'hero.organizers': 'Creadores y Organizadores del Torneo',
    
    // Countdown
    'countdown.days': 'Días',
    'countdown.hours': 'Hrs',
    'countdown.minutes': 'Min',
    'countdown.seconds': 'Seg',
    
    // Form
    'form.title': 'Únete a la comunidad y entérate primero de próximos torneos',
    'form.subtitle': 'Si ya te registraste para el torneo, este formulario te suma a la comunidad; si aún no, te avisaremos de futuros cupos.',
    'form.country': 'País',
    'form.phone': 'Número de teléfono',
    'form.name': 'Nombre y apellido',
    'form.console': 'Consola',
    'form.console.ps5': 'PS5',
    'form.console.xbox-s': 'Xbox Series S',
    'form.console.xbox-x': 'Xbox Series X',
    'form.console.pc': 'PC',
    'form.console.other': 'Otro',
    'form.eafc25': 'EAFC 25 (ya lo tienes)',
    'form.eafc26': 'EAFC 26 (ya lo tienes)',
    'form.consent': 'Acepto el tratamiento de mis datos y los Términos y Condiciones del TOR de la comunidad.',
    'form.submit': 'Enviar',
    'form.success.title': '¡Listo!',
    'form.success.message': 'Te agregamos a la comunidad. Pronto tendrás novedades por WhatsApp.',
    
    // Footer
    'footer.data-policy': 'Política de Datos',
    'footer.terms': 'Términos y Condiciones',
    'footer.disclaimer': 'Sitio no afiliado oficialmente a Electronic Arts. EAFC y marcas relacionadas pertenecen a sus respectivos titulares.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.join': 'Join the community',
    
    // Hero
    'hero.title': 'The most epic EAFC 25 tournament in Colombia starts in…',
    'hero.subtitle': 'We\'re about to kick off. Join the community and be the first to know about upcoming tournaments and slots.',
    'hero.cta': 'Join the community',
    'hero.members': 'Community members:',
    'hero.creators': 'Creators promoting the tournament',
    'hero.organizers': 'Creators and Tournament Organizers',
    
    // Countdown
    'countdown.days': 'Days',
    'countdown.hours': 'Hrs',
    'countdown.minutes': 'Min',
    'countdown.seconds': 'Sec',
    
    // Form
    'form.title': 'Join the community and be the first to hear about upcoming tournaments',
    'form.subtitle': 'If you\'ve already registered, this form adds you to the community; if not yet, we\'ll notify you about future slots.',
    'form.country': 'Country',
    'form.phone': 'Phone number',
    'form.name': 'Full name',
    'form.console': 'Console',
    'form.console.ps5': 'PS5',
    'form.console.xbox-s': 'Xbox Series S',
    'form.console.xbox-x': 'Xbox Series X',
    'form.console.pc': 'PC',
    'form.console.other': 'Other',
    'form.eafc25': 'EAFC 25 (you own it)',
    'form.eafc26': 'EAFC 26 (you own it)',
    'form.consent': 'I accept the processing of my data and the community TOR Terms & Conditions.',
    'form.submit': 'Submit',
    'form.success.title': 'Done!',
    'form.success.message': 'You\'re now in the community. We\'ll reach out via WhatsApp soon.',
    
    // Footer
    'footer.data-policy': 'Data Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.disclaimer': 'This site is not officially affiliated with Electronic Arts. EAFC and related marks belong to their respective owners.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('tournament-language');
    return (saved as Language) || 'es';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('tournament-language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};