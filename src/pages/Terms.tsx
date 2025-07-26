import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          Última actualización: 26 de julio de 2023
        </p>
        
        <p>
          Bienvenido a SocialBoost. Estos Términos y Condiciones rigen su uso de nuestro sitio web y servicios. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos términos.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Uso de nuestros servicios</h2>
        <p>
          Debe tener al menos 18 años para utilizar nuestros servicios. Al utilizar nuestros servicios, usted declara y garantiza que tiene la autoridad para aceptar estos Términos.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Descripción de los servicios</h2>
        <p>
          SocialBoost proporciona servicios para aumentar la presencia en redes sociales, incluyendo pero no limitado a: seguidores, me gusta, visualizaciones y comentarios para diversas plataformas de redes sociales.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Entrega de servicios</h2>
        <p>
          Nos esforzamos por entregar nuestros servicios dentro del tiempo especificado. Sin embargo, los tiempos de entrega son estimados y pueden variar según la carga del sistema y otros factores. No garantizamos tiempos de entrega exactos.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Política de reembolso</h2>
        <p>
          Ofrecemos reembolso completo en caso de que no podamos entregar el servicio solicitado. Si el servicio se entrega parcialmente, ofrecemos un reembolso proporcional o completamos el servicio según corresponda.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Restricciones de uso</h2>
        <p>
          Usted acepta no utilizar nuestros servicios para:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Promover contenido ilegal o prohibido</li>
          <li>Infringir los términos de servicio de las plataformas de redes sociales</li>
          <li>Acosar, intimidar o discriminar a otros usuarios</li>
          <li>Distribuir virus o código malicioso</li>
          <li>Recopilar información de otros usuarios sin su consentimiento</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitación de responsabilidad</h2>
        <p>
          Nuestros servicios se proporcionan "tal cual" y "según disponibilidad". No garantizamos que los servicios sean ininterrumpidos o libres de errores.
        </p>
        <p>
          En ningún caso seremos responsables de cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluida la pérdida de beneficios, datos o uso.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modificaciones de los términos</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre estos Términos, puede contactarnos a través de WhatsApp al +57 314 528 7412 o por correo electrónico a info@socialboost.com.
        </p>
      </div>
    </div>
  );
}