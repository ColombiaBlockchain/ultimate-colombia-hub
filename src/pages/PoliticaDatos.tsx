import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PoliticaDatos = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background tech-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t('footer.data-policy')}
          </h1>
          
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                1. Información que Recopilamos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                2. Uso de la Información
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit 
                voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
                illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                3. Protección de Datos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                4. Contacto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para cualquier consulta sobre esta política de datos, puedes contactarnos a través 
                de nuestros canales oficiales de comunicación. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam.
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


export default PoliticaDatos;