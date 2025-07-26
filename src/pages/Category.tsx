import { useParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';

export default function Category() {
  const { platform, type } = useParams<{ platform?: string; type?: string }>();
  
  // Filter products by platform and type if they exist
  const filteredProducts = products.filter(product => {
    if (platform && type) {
      return product.platform === platform && product.category === type;
    } else if (platform) {
      return product.platform === platform;
    } else {
      return true;
    }
  });

  const platformNames: Record<string, string> = {
    instagram: 'Instagram',
    facebook: 'Facebook',
    tiktok: 'TikTok',
    youtube: 'YouTube',
    twitter: 'Twitter',
  };

  const typeNames: Record<string, string> = {
    likes: 'Likes',
    followers: 'Seguidores',
    views: 'Visualizaciones',
    comments: 'Comentarios',
    shares: 'Compartidos',
  };

  // Get the title for the page
  const title = platform && type 
    ? `${typeNames[type]} para ${platformNames[platform]}` 
    : platform 
      ? `Servicios para ${platformNames[platform]}` 
      : 'Todos los servicios';

  const platformIcons: Record<string, string> = {
    instagram: '📸',
    facebook: '👍',
    tiktok: '🎵',
    youtube: '📹',
    twitter: '🐦',
  };

  const icon = platform ? platformIcons[platform] : '🌐';

  return (
    <div className="container py-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="text-4xl">{icon}</div>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground">
            Encuentra los mejores servicios para aumentar tu presencia en redes sociales
          </p>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No se encontraron productos</h3>
          <p className="text-muted-foreground">No hay productos disponibles en esta categoría actualmente</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}