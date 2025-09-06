import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DisclaimerFederacion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen tech-bg px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-neon-cyan" />
            <h1 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
              Descargo de Responsabilidad - FEDECOLDE
            </h1>
          </div>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft size={16} />
            <span>Volver al inicio</span>
          </Button>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          <div className="text-center mb-8">
            <h2 className="font-orbitron text-xl font-bold text-neon-cyan mb-2">
              Federación Colombiana de Deportes Electrónicos
            </h2>
            <p className="text-muted-foreground">
              Descargo de responsabilidad oficial para el torneo EA FC 25
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-4 text-foreground">
            <p className="text-lg leading-relaxed">
              La <strong>Federación Colombiana de Deportes Electrónicos (FEDECOLDE)</strong> autoriza y respalda esta iniciativa organizada por la comunidad, fomentando la sana competencia en el entorno nacional de los deportes electrónicos.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="font-orbitron text-lg font-bold text-neon-green mb-3">
                Alcance del respaldo
              </h3>
              <p className="mb-3">
                FEDECOLDE apoya y difunde estas acciones con el fin de fortalecer el deporte electrónico en Colombia, promoviendo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>La participación competitiva y fair play</li>
                <li>El crecimiento de la comunidad gaming nacional</li>
                <li>El desarrollo de talentos en deportes electrónicos</li>
                <li>La profesionalización del sector</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg">
              <h3 className="font-orbitron text-lg font-bold text-yellow-400 mb-3">
                Limitaciones de responsabilidad
              </h3>
              <p className="mb-3">
                Sin embargo, FEDECOLDE <strong>no asume responsabilidad</strong> por los siguientes aspectos del torneo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Procesos internos:</strong> Gestión administrativa, inscripciones, y coordinación del evento</li>
                <li><strong>Uso de marcas:</strong> Utilización de marcas registradas, logos, o contenido de terceros</li>
                <li><strong>Entrega de premios:</strong> Distribución, valores, y cumplimiento de premiación</li>
                <li><strong>Disputas:</strong> Resolución de conflictos entre participantes o problemas técnicos</li>
                <li><strong>Aspectos legales:</strong> Responsabilidades contractuales o disputas comerciales</li>
              </ul>
            </div>

            <div className="bg-neon-cyan/10 border border-neon-cyan/30 p-6 rounded-lg">
              <h3 className="font-orbitron text-lg font-bold text-neon-cyan mb-3">
                Responsabilidad exclusiva
              </h3>
              <p>
                Todas las decisiones operativas, administrativas, y de gestión son <strong>responsabilidad exclusiva de los organizadores del torneo</strong>. Los participantes deben dirigir cualquier consulta, reclamo, o disputa directamente a los organizadores del evento.
              </p>
            </div>

            <div className="text-center pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Federación Colombiana de Deportes Electrónicos - FEDECOLDE</strong><br />
                Entidad promotora del deporte electrónico en Colombia<br />
                <a 
                  href="https://www.fedecolde.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:underline"
                >
                  www.fedecolde.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/')} 
            variant="default"
            size="lg"
            className="font-orbitron"
          >
            Entendido, volver al torneo
          </Button>
          <Button 
            onClick={() => window.open('https://www.fedecolde.com/', '_blank')} 
            variant="outline"
            size="lg"
          >
            Visitar FEDECOLDE
          </Button>
        </div>
      </div>
    </div>
  );
};