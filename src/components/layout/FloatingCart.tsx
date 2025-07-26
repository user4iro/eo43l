import { ShoppingCart, ArrowDown } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { formatPriceToCOP } from '@/lib/currency';
import { useEffect, useState } from 'react';

export function FloatingCart() {
  const { items, totalPrice } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const [showCallout, setShowCallout] = useState(true);
  
  // Esconde el callout después de 10 segundos o después de un click
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCallout(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Callout con flecha animada */}
      {showCallout && itemCount > 0 && (
        <div 
          className="relative bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mb-2 animate-bounce shadow-lg"
          onClick={() => setShowCallout(false)}
        >
          <div className="flex items-center justify-center gap-2">
            <span>¡Click aquí para pagar!</span>
            <ArrowDown className="h-5 w-5 animate-pulse" />
          </div>
          {/* Triángulo de la burbuja */}
          <div className="absolute -bottom-2 right-10 w-0 h-0 
            border-l-[10px] border-l-transparent
            border-t-[10px] border-t-yellow-400
            border-r-[10px] border-r-transparent">
          </div>
        </div>
      )}
      
      {/* Cart Button */}
      <Link
        to="/carrito"
        className="bg-blue-600 hover:bg-blue-700 text-white h-16 rounded-full flex items-center shadow-lg px-6 transition-all hover:scale-105"
        onClick={() => setShowCallout(false)}
      >
        <div className="relative">
          <ShoppingCart className="h-7 w-7" />
          {itemCount > 0 && (
            <Badge className="absolute -top-3 -right-3 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-red-500">
              {itemCount}
            </Badge>
          )}
        </div>
        <div className="ml-3 flex flex-col items-start">
          <span className="text-xs">Tu carrito</span>
          {itemCount > 0 ? (
            <span className="font-medium text-sm">{formatPriceToCOP(totalPrice)}</span>
          ) : (
            <span className="font-medium text-sm">Está vacío</span>
          )}
        </div>
      </Link>
    </div>
  );
}