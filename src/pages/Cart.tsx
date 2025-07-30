import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { formatPriceToCOP } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from '@/types';

export default function Cart() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const platformIcons: Record<string, string> = {
    instagram: '📸',
    facebook: '👍',
    tiktok: '🎵',
    youtube: '📹',
    twitter: '🐦',
  };

  if (items.length === 0) {
    return (
      <div className="container py-16 max-w-2xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Tu carrito está vacío</h1>
        <p className="text-muted-foreground mb-6">Parece que aún no has agregado productos a tu carrito</p>
        <Button asChild>
          <Link to="/productos">
            Ver productos
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShoppingCart className="h-8 w-8" /> Mi Carrito
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-24 h-24 bg-muted/30 flex items-center justify-center">
                      <div className="text-4xl">{platformIcons[item.platform]}</div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between">
                        <div>
                          <Link to={`/producto/${item.id}`} className="font-medium hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.platform} • {item.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value) && value > 0) {
                                updateQuantity(item.id, value);
                              }
                            }}
                            className="w-14 h-8 text-center"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="font-medium">
                          {formatPriceToCOP((item.discountPrice || item.price) * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => navigate('/productos')}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Seguir comprando
              </Button>
              <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-600">
                <Trash2 className="mr-2 h-4 w-4" /> Vaciar carrito
              </Button>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Resumen del pedido</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPriceToCOP(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Descuentos</span>
                    <span>{formatPriceToCOP(0)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPriceToCOP(totalPrice)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" asChild>
                  <Link to="/checkout">
                    Proceder al pago
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}