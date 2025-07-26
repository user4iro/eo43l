import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Heart, Shield, Tag, Zap } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Entrega rápida',
      description: 'Comienza a recibir resultados en minutos después de tu compra'
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: 'Calidad garantizada',
      description: 'Todos nuestros servicios provienen de usuarios reales'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Seguridad completa',
      description: 'Tu cuenta está completamente protegida, no requerimos contraseñas'
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: 'Soporte 24/7',
      description: 'Nuestro equipo está disponible para ayudarte en todo momento'
    },
    {
      icon: <Tag className="h-10 w-10" />,
      title: 'Precios competitivos',
      description: 'La mejor relación calidad-precio del mercado'
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: 'Reposición gratuita',
      description: 'Si hay alguna caída, reponemos gratuitamente'
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <Badge className="mb-4">Ventajas</Badge>
          <h2 className="text-3xl font-bold tracking-tight">¿Por qué elegirnos?</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            SocialBoost ofrece los mejores servicios para potenciar tu presencia en redes sociales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center">
              <div className="mb-4 text-primary">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}