-- Create table for tournament registrations
CREATE TABLE public.tournament_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  country_code TEXT NOT NULL DEFAULT '+57',
  country TEXT NOT NULL DEFAULT 'Colombia',
  console TEXT NOT NULL,
  eafc25 BOOLEAN DEFAULT false,
  eafc26 BOOLEAN DEFAULT false,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tournament_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (this is a tournament registration, publicly accessible)
CREATE POLICY "Anyone can view registrations" 
ON public.tournament_registrations 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create registrations" 
ON public.tournament_registrations 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_tournament_registrations_updated_at
BEFORE UPDATE ON public.tournament_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_tournament_registrations_created_at ON public.tournament_registrations(created_at DESC);
CREATE INDEX idx_tournament_registrations_country ON public.tournament_registrations(country);