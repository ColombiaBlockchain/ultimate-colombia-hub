
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
          <div className="mb-12">
            <img 
              src={eafcLogo} 
              alt="EAFC 25 Logo" 
              className="mx-auto max-w-md w-full h-auto opacity-60 rounded-2xl"
            />
          </div>

          {/* Main Title */}
          <h1 className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold text-lg px-8 py-6 rounded-2xl glow-neon-green hover-scale mb-16"
          >
            {t('hero.cta')}
          </Button>

          {/* Member Bubbles */}
          <div className="mb-16">
            <MemberBubbles />
          </div>

          {/* Influencers Section */}
          <div className="mb-16">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-8">
              {t('hero.creators')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
