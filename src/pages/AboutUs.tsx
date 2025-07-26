import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">Sobre Nosotros</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-xl mb-6 leading-relaxed">
          SocialBoost es la plataforma líder en servicios de marketing para redes sociales, con el respaldo de influencers reconocidos como Yeferson Cossio. Ayudamos a creadores de contenido, empresas e influencers a potenciar su presencia digital con soluciones de crecimiento efectivas.
        </p>

        <div className="my-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="text-lg">
            Empoderar a creadores de contenido y empresas proporcionando herramientas accesibles y efectivas para aumentar su presencia online y conectar con audiencias más amplias.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 p-1 rounded-full">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Servicio de alta calidad</h3>
              <p className="text-muted-foreground">Utilizamos métodos seguros y orgánicos para garantizar resultados duraderos.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 p-1 rounded-full">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Entrega rápida</h3>
              <p className="text-muted-foreground">Nuestros servicios se entregan en tiempo récord para satisfacer tus necesidades.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 p-1 rounded-full">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Atención personalizada</h3>
              <p className="text-muted-foreground">Ofrecemos soporte directo a través de WhatsApp para resolver todas tus dudas.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 p-1 rounded-full">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Garantía de satisfacción</h3>
              <p className="text-muted-foreground">Si no estás satisfecho con nuestro servicio, te ofrecemos reembolso garantizado.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestro equipo</h2>
        <p className="mb-6">
          SocialBoost está respaldado por un equipo de expertos en marketing digital y redes sociales, liderado por Yeferson Cossio, uno de los influencers más reconocidos de Colombia con millones de seguidores. Nuestra experiencia combinada nos permite ofrecer las mejores estrategias para crecer tu presencia online.
        </p>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h3 className="text-xl font-medium mb-2">Contáctanos</h3>
          <p className="mb-4">
            ¿Tienes alguna pregunta o necesitas un servicio personalizado? No dudes en contactarnos.
          </p>
          <p>
            <strong>WhatsApp:</strong> +57 314 528 7412<br />
            <strong>Email:</strong> info@socialboost.com<br />
            <strong>Redes sociales:</strong> @yefersoncossio
          </p>
        </div>
      </div>
    </div>
  );
}