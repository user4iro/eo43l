import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
  title: string;
}

export function FeaturedProducts({ products, title }: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground mt-2">
              Servicios destacados para potenciar tu presencia en redes sociales
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}