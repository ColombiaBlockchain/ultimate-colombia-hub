
import { Navbar } from '@/components/Navbar';
import { Countdown } from '@/components/Countdown';
import { MemberBubbles } from '@/components/MemberBubbles';
import { InfluencerCard } from '@/components/InfluencerCard';
import { CommunityForm } from '@/components/CommunityForm';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import eafcLogo from '@/assets/eafc25-logo.jpg';
import influencer1 from '@/assets/influencer1.jpg';
import influencer2 from '@/assets/influencer2.jpg';
import influencer3 from '@/assets/influencer3.jpg';

const Index = () => {
  const { t } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('community-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const influencers = [
    {
      name: 'ProGamer_COL',
      handle: '@progamer_col',
      avatar: influencer1,
      platforms: {
        instagram: '#',
        youtube: '#',
        twitch: '#'
      }
    },
    {
      name: 'GamerGirl_CO',
      handle: '@gamergirl_co',
      avatar: influencer2,
      platforms: {
        instagram: '#',
        youtube: '#'
      }
    },
    {
      name: 'EAFC_Master',
      handle: '@eafc_master',
      avatar: influencer3,
      platforms: {
        instagram: '#',
        twitch: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen tech-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="hero-bg min-h-screen flex flex-col justify-center items-center px-4 pt-16">
        <div className="container mx-auto max-w-6xl text-center">
          {/* EAFC Logo */}
          <div className="mb-12 mt-8">
            <div className="relative group mx-auto max-w-xs sm:max-w-md">
              <img 
                src="/lovable-uploads/3921c9ae-2613-4eb4-87b2-9395368b6709.png" 
                alt="EAFC 25 Tournament Logo" 
                className="w-full h-auto transition-all duration-500 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(86deg)_brightness(118%)_contrast(119%)]"
              />
              {/* Animated neon border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 border-2 border-neon-green rounded-lg animate-pulse shadow-[0_0_20px_#00FF87]"></div>
                <div className="absolute inset-0 border border-neon-cyan rounded-lg animate-ping shadow-[0_0_30px_#00E5FF]"></div>
              </div>
              {/* Scanning line animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden rounded-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_10px_#00FF87]"></div>
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

          {/* CTA Button */}
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-2xl glow-neon-green hover-scale mb-16"
          >
            {t('hero.cta')}
          </Button>

          {/* Member Bubbles */}
          <div className="mb-16">
            <MemberBubbles />
          </div>

          {/* Influencers Section */}
          <div className="mb-16">
            <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 px-4">
              {t('hero.creators')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {influencers.map((influencer, index) => (
                <InfluencerCard
                  key={index}
                  name={influencer.name}
                  handle={influencer.handle}
                  avatar={influencer.avatar}
                  platforms={influencer.platforms}
                />
              ))}
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
    </div>
  );
};


export default Index;
