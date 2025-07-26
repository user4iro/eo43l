import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "¿Es seguro comprar likes y seguidores?",
      answer: "Sí, nuestros servicios son completamente seguros para tu cuenta. No utilizamos bots ni métodos que violen los términos de servicio de las plataformas. Utilizamos métodos naturales de crecimiento para aumentar tu presencia en redes sociales."
    },
    {
      question: "¿Necesito compartir mi contraseña?",
      answer: "No. Nunca pedimos contraseñas ni datos de acceso a tus cuentas. Solo necesitamos la URL de tu perfil o publicación para entregar nuestros servicios."
    },
    {
      question: "¿Cuánto tiempo tarda en completarse mi pedido?",
      answer: "El tiempo de entrega varía según el servicio y la cantidad solicitada. Los pedidos pequeños pueden completarse en pocas horas, mientras que los más grandes pueden tardar varios días. El tiempo estimado de entrega se muestra en cada producto."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito/débito, PayPal y criptomonedas como Bitcoin y Ethereum. Todas nuestras transacciones están protegidas y encriptadas para garantizar tu seguridad."
    },
    {
      question: "¿Qué sucede si hay una caída en mis seguidores o likes?",
      answer: "Ofrecemos una garantía de reposición por 30 días. Si experimentas una caída en los servicios que te hemos entregado, nos encargaremos de reponerlos sin costo adicional."
    },
    {
      question: "¿Puedo cancelar mi pedido?",
      answer: "Puedes cancelar tu pedido si aún no ha comenzado a procesarse. Una vez que el pedido está en proceso, no es posible cancelarlo. Para solicitar una cancelación, contáctanos a través de nuestro servicio de soporte."
    },
    {
      question: "¿Ofrecen descuentos por volumen?",
      answer: "Sí, ofrecemos descuentos especiales para pedidos grandes. Contáctanos directamente para obtener una cotización personalizada si necesitas servicios a gran escala."
    },
    {
      question: "¿Cómo puedo contactar al soporte?",
      answer: "Nuestro equipo de soporte está disponible 24/7. Puedes contactarnos a través de nuestro formulario de contacto, por email a soporte@socialboost.com o mediante el chat en vivo en nuestra página web."
    }
  ];

  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Preguntas frecuentes</h1>
        <p className="text-muted-foreground">
          Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <p className="mb-4 text-muted-foreground">
          ¿No encuentras lo que buscas? Contáctanos directamente
        </p>
        <a href="mailto:info@socialboost.com" className="text-primary hover:underline">
          info@socialboost.com
        </a>
      </div>
    </div>
  );
}