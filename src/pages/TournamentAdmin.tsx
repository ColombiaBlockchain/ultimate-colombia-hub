import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ADMIN_PASSWORD = 'TorneoAcceso2025!';

interface TournamentConfig {
  id: string;
  status_label: string;
  stream_url: string | null;
  is_live: boolean;
  stream_platform: string | null;
}

export const TournamentAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [config, setConfig] = useState<TournamentConfig | null>(null);
  const [statusLabel, setStatusLabel] = useState('');
  const [streamUrl, setStreamUrl] = useState('');
  const [isLive, setIsLive] = useState(false);
  const [streamPlatform, setStreamPlatform] = useState('twitch');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      fetchTournamentConfig();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: 'Acceso autorizado',
        description: 'Bienvenido al panel de administración',
      });
    } else {
      toast({
        title: 'Contraseña incorrecta',
        description: 'Verifica la contraseña e intenta nuevamente',
        variant: 'destructive',
      });
    }
  };

  const fetchTournamentConfig = async () => {
    try {
      const { data, error } = await supabase
        .from('tournament_config')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Error fetching config:', error);
        return;
      }

      if (data) {
        setConfig(data);
        setStatusLabel(data.status_label);
        setStreamUrl(data.stream_url || '');
        setIsLive(data.is_live);
        setStreamPlatform(data.stream_platform || 'twitch');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSave = async () => {
    if (!config) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('tournament_config')
        .update({
          status_label: statusLabel,
          stream_url: streamUrl || null,
          is_live: isLive,
          stream_platform: streamPlatform,
        })
        .eq('id', config.id);

      if (error) {
        throw error;
      }

      toast({
        title: 'Configuración guardada',
        description: 'Los cambios se han aplicado correctamente',
      });

      fetchTournamentConfig();
    } catch (error) {
      console.error('Error saving config:', error);
      toast({
        title: 'Error al guardar',
        description: 'No se pudieron guardar los cambios',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen tech-bg flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="font-orbitron text-2xl">Panel de Administración</CardTitle>
            <CardDescription>
              Ingresa la contraseña para acceder a la configuración del torneo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
            <Button onClick={handleLogin} className="w-full font-orbitron">
              Ingresar
            </Button>
            <Button 
              onClick={() => navigate('/')} 
              variant="outline" 
              className="w-full"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen tech-bg px-4 py-8">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-orbitron text-3xl font-bold text-foreground">
            Configuración del Torneo
          </h1>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver al inicio
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Estado y Transmisión del Torneo</CardTitle>
            <CardDescription>
              Configura el estado actual y los enlaces de transmisión en tiempo real
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status Label */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Estado del torneo
              </label>
              <Input
                placeholder="Ej: Fase de grupos, Semifinales, Gran Final..."
                value={statusLabel}
                onChange={(e) => setStatusLabel(e.target.value)}
              />
            </div>

            {/* Stream Platform */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Plataforma de transmisión
              </label>
              <Select value={streamPlatform} onValueChange={setStreamPlatform}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitch">Twitch</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="other">Otra plataforma</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Stream URL */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Enlace de transmisión
              </label>
              <Input
                placeholder="https://twitch.tv/canal o https://youtube.com/watch?v=..."
                value={streamUrl}
                onChange={(e) => setStreamUrl(e.target.value)}
              />
            </div>

            {/* Live Switch */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <h4 className="font-medium">Estado en vivo</h4>
                <p className="text-sm text-muted-foreground">
                  Activa cuando el torneo esté transmitiendo en vivo
                </p>
              </div>
              <Switch
                checked={isLive}
                onCheckedChange={setIsLive}
              />
            </div>

            {isLive && (
              <Alert>
                <AlertDescription>
                  ⚡ El torneo aparecerá como "EN VIVO" en la página principal
                </AlertDescription>
              </Alert>
            )}

            <Button 
              onClick={handleSave} 
              disabled={loading}
              className="w-full font-orbitron"
            >
              {loading ? 'Guardando...' : 'Guardar cambios'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};