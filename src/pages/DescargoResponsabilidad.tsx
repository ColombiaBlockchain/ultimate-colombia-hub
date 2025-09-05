import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const DescargoResponsabilidad = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background tech-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-8">
            Descargo de Responsabilidad
          </h1>
          
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                1. Uso No Comercial de Marcas Registradas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este sitio web utiliza marcas comerciales, logotipos y nombres de productos con fines únicamente informativos y de entretenimiento. Todas las marcas mencionadas, incluyendo pero no limitándose a "EA FC", "FIFA", "Electronic Arts", y logos relacionados, son propiedad exclusiva de sus respectivos titulares.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                El uso de estas marcas se realiza bajo los principios de uso legítimo (fair use) y no implica ningún tipo de asociación, patrocinio, aprobación o afiliación comercial con las empresas propietarias de dichas marcas.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                2. Propósito del Sitio Web
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este sitio web ha sido creado exclusivamente para la organización de eventos comunitarios de videojuegos y la creación de contenido relacionado con gaming. No perseguimos fines comerciales directos relacionados con las marcas utilizadas y no vendemos productos o servicios que compitan con los titulares de las marcas.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                3. Derechos de Propiedad Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reconocemos y respetamos todos los derechos de propiedad intelectual de Electronic Arts Inc., FIFA, y cualquier otra entidad cuyos contenidos, marcas o productos puedan ser mencionados o referenciados en este sitio.
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                <li>Todas las marcas comerciales pertenecen a sus respectivos propietarios</li>
                <li>No reclamamos ningún derecho sobre las marcas mencionadas</li>
                <li>El contenido se utiliza bajo principios de uso legítimo</li>
                <li>Respetamos las políticas de marca de todos los titulares</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                4. Limitación de Responsabilidad
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este sitio web y sus organizadores no son responsables por:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                <li>Cualquier inconveniente técnico relacionado con los videojuegos mencionados</li>
                <li>Cambios en las políticas o términos de servicio de las plataformas de gaming</li>
                <li>Interrupciones en los servicios de terceros</li>
                <li>Cualquier pérdida o daño derivado del uso de este sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                5. Compromiso de Cumplimiento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos comprometemos a:
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                <li>Retirar cualquier contenido si los propietarios de las marcas lo solicitan</li>
                <li>Cumplir con todas las normativas de propiedad intelectual aplicables</li>
                <li>Mantener el uso de las marcas dentro de los límites del uso legítimo</li>
                <li>No realizar actividades que puedan confundir a los usuarios sobre nuestra relación con los titulares de las marcas</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                6. Contacto para Propietarios de Marcas
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Si usted es propietario de alguna marca mencionada en este sitio y considera que su uso no es apropiado, por favor contáctenos inmediatamente a través de nuestros canales oficiales. Nos comprometemos a responder y tomar las medidas necesarias en un plazo máximo de 48 horas.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-neon-green mb-4">
                7. Legislación Aplicable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este descargo de responsabilidad se rige por las leyes de la República de Colombia y está sujeto a la jurisdicción de los tribunales colombianos. El uso de marcas se realiza conforme a la Decisión 486 de la Comunidad Andina y la Ley 1915 de 2018 sobre Derechos de Autor y Derechos Conexos.
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

export default DescargoResponsabilidad;