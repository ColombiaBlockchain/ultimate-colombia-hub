import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const TerminosCondiciones = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background tech-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t('footer.terms')}
          </h1>
          
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                1. Aceptación de Términos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Al participar 
                en nuestra comunidad, aceptas estos términos y condiciones.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                2. Reglas del Torneo (TOR)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum. Todos los participantes 
                deben seguir las reglas oficiales del torneo.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                3. Código de Conducta
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Se espera 
                un comportamiento respetuoso de todos los miembros.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                4. Modificaciones
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
                quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nos 
                reservamos el derecho de modificar estos términos en cualquier momento.
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-neon-cyan hover:text-neon-green transition-colors duration-200"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TerminosCondiciones;