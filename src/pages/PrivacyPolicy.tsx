import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          Última actualización: 26 de julio de 2023
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Información que recopilamos</h2>
        <p>
          En SocialBoost, recopilamos cierta información personal para poder brindarle nuestros servicios. Esta información incluye:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Información de contacto (como correo electrónico)</li>
          <li>Enlaces a sus perfiles de redes sociales</li>
          <li>Información de las transacciones realizadas en nuestra plataforma</li>
          <li>Información del dispositivo y navegación</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cómo utilizamos la información</h2>
        <p>
          Utilizamos la información recopilada para los siguientes propósitos:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Proporcionar y mantener nuestros servicios</li>
          <li>Procesar sus pedidos y transacciones</li>
          <li>Comunicarnos con usted sobre sus pedidos y actualizaciones de servicio</li>
          <li>Mejorar nuestros servicios y experiencia de usuario</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Seguridad de la información</h2>
        <p>
          La seguridad de sus datos es importante para nosotros. Implementamos medidas de seguridad adecuadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Divulgación a terceros</h2>
        <p>
          No vendemos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Con proveedores de servicios que nos ayudan a entregar nuestros servicios</li>
          <li>Cuando sea requerido por ley</li>
          <li>Para proteger nuestros derechos y propiedades</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sus derechos</h2>
        <p>
          Usted tiene derecho a:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Acceder a su información personal que tenemos</li>
          <li>Corregir datos inexactos</li>
          <li>Solicitar la eliminación de sus datos</li>
          <li>Objetar o restringir ciertos procesamientos de datos</li>
          <li>Solicitar la portabilidad de sus datos</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cambios a esta política</h2>
        <p>
          Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "última actualización".
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contáctenos</h2>
        <p>
          Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos a través de WhatsApp al +57 314 528 7412 o por correo electrónico a info@socialboost.com.
        </p>
      </div>
    </div>
  );
}