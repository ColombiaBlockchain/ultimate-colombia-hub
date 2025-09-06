-- Create tournament_config table for dynamic tournament status
CREATE TABLE public.tournament_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  status_label TEXT NOT NULL DEFAULT 'Preparando torneo',
  stream_url TEXT,
  is_live BOOLEAN NOT NULL DEFAULT false,
  stream_platform TEXT DEFAULT 'twitch',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.tournament_config ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Tournament config is viewable by everyone" 
ON public.tournament_config 
FOR SELECT 
USING (true);

-- Create policy for admin updates (no authentication for now, just basic protection)
CREATE POLICY "Tournament config can be updated by anyone" 
ON public.tournament_config 
FOR UPDATE 
USING (true);

CREATE POLICY "Tournament config can be inserted by anyone" 
ON public.tournament_config 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_tournament_config_updated_at
BEFORE UPDATE ON public.tournament_config
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default configuration
INSERT INTO public.tournament_config (status_label, is_live) 
VALUES ('Fase de inscripciones', false);