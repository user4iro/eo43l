import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Info, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { formatPriceToCOP } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';
import { getProductById, products } from '@/data/products';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <Button onClick={() => navigate('/productos')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a productos
        </Button>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
    });
  };

  const platformIcons: Record<string, string> = {
    instagram: '📸',
    facebook: '👍',
    tiktok: '🎵',
    youtube: '📹',
    twitter: '🐦',
  };

  const qualityColors: Record<string, string> = {
    standard: 'bg-blue-100 text-blue-800',
    premium: 'bg-purple-100 text-purple-800',
    vip: 'bg-amber-100 text-amber-800',
  };

  return (
    <div className="container py-10">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden bg-muted/30 aspect-square flex items-center justify-center">
          <div className="text-8xl">{platformIcons[product.platform]}</div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="capitalize">
              {product.platform}
            </Badge>
            <Badge variant="secondary" className={`${qualityColors[product.quality]} border-0`}>
              {product.quality === 'standard' ? 'Estándar' : product.quality === 'premium' ? 'Premium' : 'VIP'}
            </Badge>
            {product.discountPrice && (
              <Badge className="bg-red-500">Oferta</Badge>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.0 (24 reseñas)</span>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            {product.discountPrice ? (
              <>
                <span className="text-3xl font-bold">{formatPriceToCOP(product.discountPrice)}</span>
                <span className="text-xl text-muted-foreground line-through">{formatPriceToCOP(product.price)}</span>
              </>
            ) : (
              <span className="text-3xl font-bold">{formatPriceToCOP(product.price)}</span>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">Cantidad ({product.quantity} {product.category === 'followers' ? 'seguidores' : 
                product.category === 'likes' ? 'likes' : 
                product.category === 'views' ? 'visualizaciones' : 
                product.category === 'comments' ? 'comentarios' : 'compartidos'})</p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input 
                type="number" 
                value={quantity} 
                onChange={handleQuantityChange} 
                className="w-20 text-center"
                min="1"
              />
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <p className="font-medium mb-2">Tiempo de entrega: <span className="font-normal text-muted-foreground">{product.deliveryTime}</span></p>
            </div>

            <Alert className="bg-muted/50 mb-6">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Solo necesitamos la URL de tu perfil o publicación. No requerimos contraseñas.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-2 gap-4">
              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al carrito
              </Button>
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={() => {
                  // Create WhatsApp link with product details
                  const price = formatPriceToCOP((product.discountPrice || product.price) * quantity);
                  // Import to avoid issues with module loading
                  import('@/lib/whatsapp').then(({ generateWhatsAppLink }) => {
                    const whatsappLink = generateWhatsAppLink(product.name, quantity, price);
                    window.location.href = whatsappLink;
                  });
                }}
              >
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                </svg> 
                Comprar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mt-10">
        <TabsList>
          <TabsTrigger value="details">Detalles</TabsTrigger>
          <TabsTrigger value="faq">Preguntas frecuentes</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-6">
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Especificaciones del servicio</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Servicio de alta calidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Entrega rápida en {product.deliveryTime}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No requiere contraseña</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Soporte 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Reembolso garantizado si no se entrega</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Recarga gratuita si hay caída</span>
                </li>
              </ul>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="faq" className="mt-6">
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">¿Es seguro para mi cuenta?</h3>
              <p className="text-muted-foreground">
                Sí, todos nuestros servicios son completamente seguros. No requerimos contraseñas ni acceso a tu cuenta.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">¿Cuánto tiempo tarda en reflejarse el servicio?</h3>
              <p className="text-muted-foreground">
                El tiempo estimado de entrega es de {product.deliveryTime}, aunque puede variar según la carga del sistema.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">¿Qué sucede si hay una caída en los servicios?</h3>
              <p className="text-muted-foreground">
                Ofrecemos reposición gratuita durante 30 días si hay alguna caída en los servicios entregados.
              </p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}