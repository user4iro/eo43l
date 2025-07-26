import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Products() {
  const [searchParams] = useSearchParams();
  const platform = searchParams.get('platform');
  const category = searchParams.get('category');
  
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const [filters, setFilters] = useState({
    platforms: {
      instagram: platform === 'instagram',
      facebook: platform === 'facebook',
      tiktok: platform === 'tiktok',
      youtube: platform === 'youtube',
      twitter: platform === 'twitter',
    },
    categories: {
      likes: category === 'likes',
      followers: category === 'followers',
      views: category === 'views',
      comments: category === 'comments',
      shares: category === 'shares',
    },
    qualities: {
      standard: false,
      premium: false,
      vip: false,
    }
  });

  const toggleFilter = (type: string, value: string) => {
    setFilters({
      ...filters,
      [type]: {
        ...filters[type as keyof typeof filters],
        [value]: !filters[type as keyof typeof filters][value as keyof typeof filters[keyof typeof filters]],
      }
    });
  };

  const filteredProducts = products.filter(product => {
    // Search filter
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    // Platform filter
    const activePlatforms = Object.entries(filters.platforms).filter(([_, active]) => active).map(([key]) => key);
    if (activePlatforms.length > 0 && !activePlatforms.includes(product.platform)) {
      return false;
    }

    // Category filter
    const activeCategories = Object.entries(filters.categories).filter(([_, active]) => active).map(([key]) => key);
    if (activeCategories.length > 0 && !activeCategories.includes(product.category)) {
      return false;
    }

    // Quality filter
    const activeQualities = Object.entries(filters.qualities).filter(([_, active]) => active).map(([key]) => key);
    if (activeQualities.length > 0 && !activeQualities.includes(product.quality)) {
      return false;
    }

    return true;
  });

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return (a.discountPrice || a.price) - (b.discountPrice || b.price);
      case 'price-desc':
        return (b.discountPrice || b.price) - (a.discountPrice || a.price);
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return a.featured ? -1 : b.featured ? 1 : 0;
    }
  });

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">Buscar</h3>
            <Input
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Ordenar por</h3>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Destacados</SelectItem>
                <SelectItem value="price-asc">Precio: Menor a mayor</SelectItem>
                <SelectItem value="price-desc">Precio: Mayor a menor</SelectItem>
                <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
                <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Plataforma</h3>
            <div className="space-y-2">
              {Object.entries(filters.platforms).map(([platform, isChecked]) => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`platform-${platform}`} 
                    checked={isChecked} 
                    onCheckedChange={() => toggleFilter('platforms', platform)}
                  />
                  <Label htmlFor={`platform-${platform}`} className="capitalize">{platform}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Categoría</h3>
            <div className="space-y-2">
              {Object.entries(filters.categories).map(([category, isChecked]) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={isChecked} 
                    onCheckedChange={() => toggleFilter('categories', category)}
                  />
                  <Label htmlFor={`category-${category}`} className="capitalize">
                    {category === 'followers' ? 'Seguidores' : 
                     category === 'likes' ? 'Likes' : 
                     category === 'views' ? 'Visualizaciones' : 
                     category === 'comments' ? 'Comentarios' : 'Compartidos'}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Calidad</h3>
            <div className="space-y-2">
              {Object.entries(filters.qualities).map(([quality, isChecked]) => (
                <div key={quality} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`quality-${quality}`} 
                    checked={isChecked} 
                    onCheckedChange={() => toggleFilter('qualities', quality)}
                  />
                  <Label htmlFor={`quality-${quality}`} className="capitalize">
                    {quality === 'standard' ? 'Estándar' : quality === 'premium' ? 'Premium' : 'VIP'}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <Button variant="outline" onClick={() => {
            setSearch('');
            setSort('featured');
            setFilters({
              platforms: {instagram: false, facebook: false, tiktok: false, youtube: false, twitter: false},
              categories: {likes: false, followers: false, views: false, comments: false, shares: false},
              qualities: {standard: false, premium: false, vip: false}
            });
          }}>
            Limpiar filtros
          </Button>
        </div>
        
        {/* Products grid */}
        <div className="lg:col-span-3">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No se encontraron productos</h3>
              <p className="text-muted-foreground">Intenta cambiar tus filtros de búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}