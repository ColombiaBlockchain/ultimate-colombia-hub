import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Countdown = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-05T15:30:00-05:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-card border-2 border-neon-green rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] pulse-neon">
        <span className="font-orbitron text-2xl md:text-4xl font-bold text-neon-green">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-8">
      <CountdownUnit value={timeLeft.days} label={t('countdown.days')} />
      <span className="font-orbitron text-2xl md:text-4xl text-neon-cyan">:</span>
      <CountdownUnit value={timeLeft.hours} label={t('countdown.hours')} />
      <span className="font-orbitron text-2xl md:text-4xl text-neon-cyan">:</span>
      <CountdownUnit value={timeLeft.minutes} label={t('countdown.minutes')} />
      <span className="font-orbitron text-2xl md:text-4xl text-neon-cyan">:</span>
      <CountdownUnit value={timeLeft.seconds} label={t('countdown.seconds')} />
    </div>
  );
};