import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const formSchema = z.object({
  country: z.string().min(1, 'Country is required'),
  phone: z.string().min(8, 'Phone must be at least 8 digits').max(12, 'Phone must be at most 12 digits'),
  name: z.string().min(2, 'Name is required'),
  console: z.string().min(1, 'Console selection is required'),
  eafc25: z.boolean(),
  eafc26: z.boolean(),
  consent: z.boolean().refine(val => val === true, 'You must accept the terms')
});

type FormData = z.infer<typeof formSchema>;

export const CommunityForm = () => {
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: '+57 Colombia',
      phone: '',
      name: '',
      console: '',
      eafc25: false,
      eafc26: false,
      consent: false
    }
  });

  const submitToSubAVIS = async (payload: FormData) => {
    // Placeholder function for future endpoint integration
    console.log('Submitting to SubAVIS:', payload);
    // await fetch('/api/subavis', { method: 'POST', body: JSON.stringify(payload) });
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Add new member to community
      if ((window as any).addNewMember) {
        (window as any).addNewMember(data.name);
      }
      
      // Submit to SubAVIS (placeholder)
      await submitToSubAVIS(data);
      
      // Show success modal
      setShowSuccess(true);
      reset();
      
      toast({
        title: t('form.success.title'),
        description: t('form.success.message'),
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    }
  };

  return (
    <>
      <div id="community-form" className="bg-card border-2 border-neon-cyan rounded-3xl p-8 md:p-10 max-w-2xl mx-auto glow-neon-cyan">
        <div className="text-center mb-8">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t('form.title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t('form.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('form.country')}</label>
              <Select 
                value="+57 Colombia" 
                onValueChange={(value) => setValue('country', value)}
              >
                <SelectTrigger className="bg-input border-border focus:border-neon-cyan">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="+57 Colombia">🇨🇴 +57 Colombia</SelectItem>
                </SelectContent>
              </Select>
              {errors.country && <p className="text-destructive text-xs">{errors.country.message}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('form.phone')}</label>
              <Input
                type="tel"
                {...register('phone')}
                className="bg-input border-border focus:border-neon-cyan"
                placeholder="3001234567"
              />
              {errors.phone && <p className="text-destructive text-xs">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{t('form.name')}</label>
            <Input
              {...register('name')}
              className="bg-input border-border focus:border-neon-cyan"
              placeholder="Juan Pérez"
            />
            {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
          </div>

          {/* Console */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{t('form.console')}</label>
            <Select onValueChange={(value) => setValue('console', value)}>
              <SelectTrigger className="bg-input border-border focus:border-neon-cyan">
                <SelectValue placeholder="Selecciona tu consola" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="ps5">{t('form.console.ps5')}</SelectItem>
                <SelectItem value="xbox-s">{t('form.console.xbox-s')}</SelectItem>
                <SelectItem value="xbox-x">{t('form.console.xbox-x')}</SelectItem>
                <SelectItem value="pc">{t('form.console.pc')}</SelectItem>
                <SelectItem value="other">{t('form.console.other')}</SelectItem>
              </SelectContent>
            </Select>
            {errors.console && <p className="text-destructive text-xs">{errors.console.message}</p>}
          </div>

          {/* Game Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="eafc25"
                checked={watch('eafc25')}
                onCheckedChange={(checked) => setValue('eafc25', checked as boolean)}
                className="border-border data-[state=checked]:bg-neon-green data-[state=checked]:border-neon-green"
              />
              <label htmlFor="eafc25" className="text-sm text-foreground">
                {t('form.eafc25')}
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="eafc26"
                checked={watch('eafc26')}
                onCheckedChange={(checked) => setValue('eafc26', checked as boolean)}
                className="border-border data-[state=checked]:bg-neon-green data-[state=checked]:border-neon-green"
              />
              <label htmlFor="eafc26" className="text-sm text-foreground">
                {t('form.eafc26')}
              </label>
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={watch('consent')}
              onCheckedChange={(checked) => setValue('consent', checked as boolean)}
              className="border-border data-[state=checked]:bg-neon-green data-[state=checked]:border-neon-green mt-1"
            />
            <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
              {t('form.consent')}{' '}
              <a href="/politica-de-datos" className="text-neon-cyan hover:underline">
                {t('footer.data-policy')}
              </a>{' '}
              y{' '}
              <a href="/terminos-y-condiciones" className="text-neon-cyan hover:underline">
                {t('footer.terms')}
              </a>
            </label>
          </div>
          {errors.consent && <p className="text-destructive text-xs">{errors.consent.message}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold py-6 text-lg glow-neon-green"
          >
            {isSubmitting ? 'Enviando...' : t('form.submit')}
          </Button>
        </form>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-card border-neon-green max-w-md">
          <DialogHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-neon-green" />
            </div>
            <DialogTitle className="font-orbitron text-2xl text-neon-green">
              {t('form.success.title')}
            </DialogTitle>
          </DialogHeader>
          <p className="text-center text-muted-foreground mb-6">
            {t('form.success.message')}
          </p>
          <Button
            onClick={() => setShowSuccess(false)}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};