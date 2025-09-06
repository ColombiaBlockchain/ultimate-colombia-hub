
import { Navbar } from '@/components/Navbar';
import { Countdown } from '@/components/Countdown';
import { MemberBubbles } from '@/components/MemberBubbles';
import { EnhancedInfluencerCard } from '@/components/EnhancedInfluencerCard';
import { CommunityForm } from '@/components/CommunityForm';
import { Footer } from '@/components/Footer';
import { TournamentStatus } from '@/components/TournamentStatus';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollToTop } from '@/components/ScrollToTop';
import eafcLogo from '@/assets/eafc25-logo.jpg';
import influencer1 from '@/assets/influencer1.jpg';
import influencer2 from '@/assets/influencer2.jpg';
import influencer3 from '@/assets/influencer3.jpg';
import sponsor4 from '@/assets/sponsor4.jpg';
import fede1 from '@/assets/fede1.jpg';

const Index = () => {
  const { t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('community-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Creadores de contenido del torneo
  const creators = [
    {
      name: 'BryanP',
      handle: '@bryanpe10_',
      avatar: influencer1,
      type: 'creator' as const,
      platforms: {
        tiktok: 'https://www.tiktok.com/@bryanpe10_?_t=ZS-8zT0ECUljex&_r=1',
        kick: 'https://kick.com/ibryanp'
      }
    },
    {
      name: 'Sebastian Zarazan',
      handle: '@sebastian_zarazan',
      avatar: influencer3,
      type: 'creator' as const,
      platforms: {
        instagram: 'https://www.instagram.com/sebastian_zarazan/?igsh=MXZhYjJqNWNibXhybg%3D%3D&utm_source=qr',
        tiktok: 'https://www.tiktok.com/@soyzarazagang?_t=ZS-8zSl2xDWv37&_r=1'
      }
    },
    {
      name: 'McZeus19',
      handle: '@mczeus19',
      avatar: influencer2,
      type: 'creator' as const,
      platforms: {
        tiktok: 'https://www.tiktok.com/@mczeus19?_t=ZS-8zT0Wdn3hHb&_r=1',
        kick: 'https://kick.com/mczeus19'
      }
    }
  ];

  // Patrocinador oficial
  const sponsor = {
    name: 'Daniel Luque',
    handle: 'Patrocinador Oficial',
    avatar: sponsor4,
    type: 'sponsor' as const,
    platforms: {
      linkedin: 'https://www.linkedin.com/in/dani-luque/',
      instagram: 'https://www.instagram.com/soydaniluque/'
    }
  };

  // Federación que avala
  const federation = {
    name: 'Fedecolde',
    handle: 'Federación Colombiana de Deportes Electrónicos',
    avatar: fede1,
    type: 'organization' as const,
    platforms: {
      website: 'https://www.fedecolde.com/',
      instagram: 'https://www.instagram.com/fedecolde/?hl=es'
    }
  };

  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="hero-bg min-h-screen flex flex-col justify-center items-center px-4 pt-16">
        <div className="container mx-auto max-w-6xl text-center">
          {/* EAFC Logo */}
          <div className="mb-12 mt-12">
            <div className="relative group mx-auto max-w-xs sm:max-w-sm">
              <img 
                src="/lovable-uploads/3921c9ae-2613-4eb4-87b2-9395368b6709.png" 
                alt="EAFC 25 Tournament Logo" 
                className="w-full h-auto transition-all duration-500 [filter:drop-shadow(0_0_10px_transparent)] group-hover:[filter:drop-shadow(0_0_20px_hsl(var(--neon-green)/0.6))_brightness(0)_saturate(100%)_invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(86deg)_brightness(118%)_contrast(119%)]"
                style={{
                  filter: 'drop-shadow(0 0 10px transparent)',
                }}
              />
              {/* Pulse animation only on logo content */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full animate-pulse bg-gradient-to-r from-neon-green via-neon-cyan to-neon-green opacity-20 mix-blend-color-dodge rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-orbitron text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight px-4">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.subtitle')}
          </p>

          {/* Countdown */}
          <div className="mb-12">
            <Countdown />
          </div>

          {/* Tournament Status Component */}
          <div className="mb-16">
            <TournamentStatus />
          </div>

          {/* Member Bubbles */}
          <div className="mb-16">
            <MemberBubbles />
          </div>

          {/* Organizers Section */}
          <div className="mb-16 space-y-12">
            {/* Creadores de contenido del torneo */}
            <div>
              <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 px-4 text-center">
                Creadores de contenido del torneo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
                {creators.map((creator, index) => (
                  <EnhancedInfluencerCard
                    key={index}
                    name={creator.name}
                    handle={creator.handle}
                    avatar={creator.avatar}
                    platforms={creator.platforms}
                    type={creator.type}
                  />
                ))}
              </div>
            </div>

            {/* Patrocinador oficial */}
            <div>
              <h3 className="font-orbitron text-lg sm:text-xl font-bold text-neon-cyan mb-6 px-4 text-center">
                Patrocinador oficial
              </h3>
              <div className="flex justify-center px-4">
                <div className="max-w-xs">
                  <EnhancedInfluencerCard
                    name={sponsor.name}
                    handle={sponsor.handle}
                    avatar={sponsor.avatar}
                    platforms={sponsor.platforms}
                    type={sponsor.type}
                  />
                </div>
              </div>
            </div>

            {/* Federación que avala */}
            <div>
              <h3 className="font-orbitron text-lg sm:text-xl font-bold text-neon-green mb-6 px-4 text-center">
                Federación que avala el torneo
              </h3>
              <div className="flex justify-center px-4">
                <div className="max-w-xs">
                  <EnhancedInfluencerCard
                    name={federation.name}
                    handle={federation.handle}
                    avatar={federation.avatar}
                    platforms={federation.platforms}
                    type={federation.type}
                    showDisclaimer={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <CommunityForm />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};


export default Index;
