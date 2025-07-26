import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { formatPriceToCOP } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useCart } from '@/hooks/use-cart';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    profileUrl: '',
  });

  if (items.length === 0) {
    navigate('/carrito');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate email and profile URL
    if (!formData.email || !formData.profileUrl) {
      toast.error('Por favor completa todos los campos');
      setLoading(false);
      return;
    }
    
    // Create a message that includes all items in the cart
    const itemsList = items.map(item => 
      `${item.quantity} ${item.name} - ${formatPriceToCOP((item.discountPrice || item.price) * item.quantity)}`
    ).join('\n');
    
    // Include email and profile URL in the message
    const message = encodeURIComponent(
      `Hola, quiero comprar los siguientes productos:\n${itemsList}\n\n` +
      `Total: ${formatPriceToCOP(totalPrice)}\n\n` +
      `Email: ${formData.email}\n` +
      `URL del perfil: ${formData.profileUrl}`
    );
    
    // Use the client's WhatsApp number
    const phoneNumber = "573145287412"; 
    
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <Button variant="ghost" onClick={() => navigate('/carrito')} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al carrito
        </Button>
        
        <h1 className="text-3xl font-bold mb-8">Finalizar compra</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">Información de servicio</h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        placeholder="tu@email.com" 
                        required 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Recibirás actualizaciones sobre tu pedido en este email
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="profileUrl">URL de perfil/publicación</Label>
                      <Input 
                        id="profileUrl" 
                        name="profileUrl" 
                        placeholder="https://instagram.com/tu_usuario" 
                        required 
                        value={formData.profileUrl} 
                        onChange={handleChange}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Introduce la URL donde deseas recibir el servicio
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button type="submit" className="w-full mt-8 bg-green-600 hover:bg-green-700" size="lg" disabled={loading}>
                <MessageCircle className="mr-2 h-5 w-5" />
                {loading ? "Procesando..." : "Continuar en WhatsApp"}
              </Button>
            </form>
          </div>

          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <h2 className="text-xl font-semibold">Resumen del pedido</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.id} className="flex justify-between text-sm">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground block">
                          Cantidad: {item.quantity}
                        </span>
                      </div>
                      <span>{formatPriceToCOP((item.discountPrice || item.price) * item.quantity)}</span>
                    </li>
                  ))}
                </ul>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPriceToCOP(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Impuestos</span>
                    <span>{formatPriceToCOP(0)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPriceToCOP(totalPrice)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500 mt-1" />
                <p>Tus datos están seguros. No compartimos tu información con terceros.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}