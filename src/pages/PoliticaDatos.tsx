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
                1. Responsable del Tratamiento de Datos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El responsable del tratamiento de sus datos personales es la organización del Torneo EA FC 25 Colombia, con domicilio en Colombia. Para efectos de esta política, nos referiremos como "nosotros", "nuestro" o "la organización".
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                2. Datos Personales que Recopilamos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recopilamos los siguientes datos personales cuando se registra en nuestro torneo:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                <li>Nombre y apellido completo</li>
                <li>Número de teléfono móvil</li>
                <li>País de residencia</li>
                <li>Preferencias de consola de videojuegos</li>
                <li>Información sobre juegos que posee</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                3. Finalidades del Tratamiento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sus datos personales serán utilizados para las siguientes finalidades:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                <li>Gestión y organización del torneo EA FC 25</li>
                <li>Comunicación de información relevante del torneo vía WhatsApp</li>
                <li>Formación y gestión de la comunidad de gaming</li>
                <li>Notificación de futuros torneos y eventos</li>
                <li>Estadísticas anónimas de participación</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                4. Base Legal del Tratamiento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El tratamiento de sus datos personales se basa en el consentimiento libre, previo, expreso e informado que usted otorga al registrarse, conforme a lo establecido en la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                5. Conservación de Datos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas y mientras mantenga su vinculación con nuestra comunidad. Podrá solicitar la eliminación de sus datos en cualquier momento ejerciendo su derecho de supresión.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                6. Sus Derechos como Titular
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Como titular de los datos, usted tiene derecho a:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                <li>Conocer, actualizar y rectificar sus datos personales</li>
                <li>Solicitar prueba de la autorización otorgada</li>
                <li>Ser informado sobre el uso dado a sus datos</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
                <li>Revocar la autorización y solicitar la supresión de datos</li>
                <li>Acceder de forma gratuita a sus datos personales</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                7. Medidas de Seguridad
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas y administrativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos encriptación y almacenamos los datos en servidores seguros con acceso restringido.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                8. Transferencia de Datos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sus datos personales no serán transferidos a terceros sin su consentimiento expreso, excepto cuando sea requerido por autoridades competentes o para el cumplimiento de las finalidades autorizadas (como servicios de mensajería para comunicaciones del torneo).
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                9. Contacto para Ejercer sus Derechos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para ejercer sus derechos o realizar consultas sobre el tratamiento de sus datos personales, puede contactarnos a través de los canales oficiales del torneo. Responderemos a su solicitud en un plazo máximo de 15 días hábiles.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                10. Modificaciones a esta Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta política puede ser modificada en cualquier momento. Las modificaciones serán comunicadas a través de nuestros canales oficiales y publicadas en este sitio web. Se considera que acepta los cambios si continúa utilizando nuestros servicios después de la publicación.
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