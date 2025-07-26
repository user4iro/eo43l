import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Confirmation() {
  const navigate = useNavigate();
  const orderNumber = `SB-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="container py-16 max-w-2xl mx-auto text-center">
      <div className="mb-6 flex justify-center">
        <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">¡Pedido confirmado!</h1>
      <p className="text-muted-foreground mb-6">
        Gracias por tu compra. Hemos recibido tu pedido y estamos procesándolo.
      </p>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-muted-foreground">Número de pedido</h3>
              <p className="font-bold text-lg">{orderNumber}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-medium text-muted-foreground">Estado del pedido</h3>
                <p>En proceso</p>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Tiempo estimado</h3>
                <p>24-48 horas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <p className="mb-6 text-muted-foreground">
        Te enviaremos un correo electrónico con la confirmación del pedido y actualizaciones sobre su estado.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => navigate('/')}>
          Volver a la página principal
        </Button>
        <Button variant="outline" onClick={() => navigate('/productos')}>
          Seguir comprando
        </Button>
      </div>
    </div>
  );
}