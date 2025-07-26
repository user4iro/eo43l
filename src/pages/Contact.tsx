import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  MessageSquare, 
  Phone
} from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensaje enviado correctamente. Te responderemos pronto.');
  };

  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Contáctanos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o necesitas ayuda con nuestros servicios? 
          Estamos aquí para ayudarte 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Email</h3>
          <p className="text-muted-foreground mb-4">
            Envíanos un correo para cualquier consulta
          </p>
          <a href="mailto:info@socialboost.com" className="text-primary hover:underline">
            info@socialboost.com
          </a>
        </Card>

        <Card className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Chat en vivo</h3>
          <p className="text-muted-foreground mb-4">
            Habla con nuestro equipo en tiempo real
          </p>
          <Button variant="outline">Iniciar chat</Button>
        </Card>

        <Card className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Teléfono</h3>
          <p className="text-muted-foreground mb-4">
            Llámanos para atención inmediata
          </p>
          <a href="tel:+1234567890" className="text-primary hover:underline">
            +1 234 567 890
          </a>
        </Card>
      </div>

      <Card className="max-w-3xl mx-auto mt-12">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Envíanos un mensaje</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Tu nombre" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" required />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="subject">Asunto</Label>
              <Input id="subject" placeholder="¿Cómo podemos ayudarte?" required />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea 
                id="message" 
                placeholder="Escribe tu mensaje aquí..." 
                rows={5}
                required
              />
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}