import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useCart } from '@/hooks/use-cart';
import { formatPriceToCOP } from '@/lib/currency';

// Importar íconos de react-icons
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaTwitter, FaSpotify, FaPinterest, FaTwitch, FaReddit, FaWhatsapp, FaTelegramPlane, FaLinkedin, FaApple, FaDeezer, FaSoundcloud, FaGlobe, FaImdb, FaKickstarterK, FaCloud, FaCrown } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { id, name, image, price, discountPrice, platform, category, quality } = product;

  const platformLogos: Record<string, string> = {
    instagram: '/assets/logos/instagram.svg',
    facebook: '/assets/logos/facebook.svg',
    tiktok: '/assets/logos/tiktok.svg',
    youtube: '/assets/logos/youtube.svg',
    twitter: '/assets/logos/twitter.svg',
    spotify: '/assets/logos/spotify.svg',
    pinterest: '/assets/logos/pinterest.svg',
    twitch: '/assets/logos/twitch.svg',
  };

  const qualityColors: Record<string, string> = {
    standard: 'bg-blue-100 text-blue-800',
    premium: 'bg-purple-100 text-purple-800',
    vip: 'bg-amber-100 text-amber-800',
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
  };

  const getLogo = () => {
    if (platformLogos[platform]) {
      return <img src={platformLogos[platform]} alt={platform} className="h-12 w-12 text-primary" />;
    }

    const platformIcons: Record<string, JSX.Element> = {
      instagram: <FaInstagram className="h-12 w-12 text-[#E1306C]" />,
      facebook: <FaFacebook className="h-12 w-12 text-[#1877F2]" />,
      tiktok: <FaTiktok className="h-12 w-12 text-black" />,
      youtube: <FaYoutube className="h-12 w-12 text-[#FF0000]" />,
      twitter: <FaTwitter className="h-12 w-12 text-[#1DA1F2]" />,
      spotify: <FaSpotify className="h-12 w-12 text-[#1DB954]" />,
      pinterest: <FaPinterest className="h-12 w-12 text-[#BD081C]" />,
      twitch: <FaTwitch className="h-12 w-12 text-[#9146FF]" />,
      reddit: <FaReddit className="h-12 w-12 text-[#FF4500]" />,
      whatsapp: <FaWhatsapp className="h-12 w-12 text-[#25D366]" />,
      telegram: <FaTelegramPlane className="h-12 w-12 text-[#0088cc]" />,
      onlyfans: <FaCrown className="h-12 w-12 text-[#00AFF0]" />,
      linkedin: <FaLinkedin className="h-12 w-12 text-[#0077B5]" />,
      'apple-music': <FaApple className="h-12 w-12 text-black" />,
      threads: <FaGlobe className="h-12 w-12 text-black" />,
      deezer: <FaDeezer className="h-12 w-12 text-[#FF0000]" />,
      tidal: <FaCloud className="h-12 w-12 text-[#000000]" />,
      mixcloud: <FaCloud className="h-12 w-12 text-[#666666]" />,
      soundcloud: <FaSoundcloud className="h-12 w-12 text-[#FF5500]" />,
      web: <FaGlobe className="h-12 w-12 text-[#555]" />,
      imdb: <FaImdb className="h-12 w-12 text-[#F5C518]" />,
      kick: <FaKickstarterK className="h-12 w-12 text-[#2DB94D]" />,
    };

    return platformIcons[platform] || <FaGlobe className="h-12 w-12 text-muted-foreground" />;
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative">
          <div className="h-40 bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-4">
            {getLogo()}
          </div>
          {discountPrice && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              Oferta
            </Badge>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="capitalize">
              {platform}
            </Badge>
            <Badge variant="secondary" className={`${qualityColors[quality]} border-0`}>
              {quality === 'standard' ? 'Estándar' : quality === 'premium' ? 'Premium' : 'VIP'}
            </Badge>
          </div>
          <Link to={`/producto/${id}`}>
            <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors mb-1">
              {name}
            </h3>
          </Link>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <span className="capitalize">{category === 'followers' ? 'seguidores' : 
              category === 'likes' ? 'likes' : 
              category === 'views' ? 'visualizaciones' : 
              category === 'comments' ? 'comentarios' : 'compartidos'}</span>
          </div>
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">4.0 (24)</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto flex flex-col">
        <div className="flex items-center justify-between w-full mb-3">
          <div className="flex items-baseline gap-1">
            {discountPrice ? (
              <>
                <span className="text-lg font-bold">{formatPriceToCOP(discountPrice)}</span>
                <span className="text-sm text-muted-foreground line-through">{formatPriceToCOP(price)}</span>
              </>
            ) : (
              <span className="text-lg font-bold">{formatPriceToCOP(price)}</span>
            )}
          </div>
          <div className="text-xs text-muted-foreground">Entrega: {product.deliveryTime}</div>
        </div>
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
