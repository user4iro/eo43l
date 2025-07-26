import { Badge } from '@/components/ui/badge';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Elige un servicio',
      description: 'Explora nuestra variedad de servicios para todas las principales plataformas sociales'
    },
    {
      number: '02',
      title: 'Proporciona tu enlace',
      description: 'Simplemente ingresa la URL de tu perfil o publicación (sin necesidad de contraseñas)'
    },
    {
      number: '03',
      title: 'Realiza el pago',
      description: 'Utiliza nuestros métodos de pago seguros para completar tu compra'
    },
    {
      number: '04',
      title: 'Observa los resultados',
      description: 'Los resultados comenzarán a aparecer poco después de la confirmación'
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <Badge className="mb-4">Proceso simple</Badge>
          <h2 className="text-3xl font-bold tracking-tight">¿Cómo funciona?</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Aumentar tu presencia en redes sociales nunca ha sido tan fácil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-muted rounded-lg p-6 h-full">
                <div className="text-3xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}