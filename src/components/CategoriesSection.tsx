import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types';

import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  const platformIcons: Record<string, JSX.Element> = {
    instagram: <FaInstagram className="text-pink-500 w-7 h-7" />,
    facebook: <FaFacebookF className="text-blue-600 w-7 h-7" />,
    tiktok: <FaTiktok className="text-black w-7 h-7" />,
    youtube: <FaYoutube className="text-red-600 w-7 h-7" />,
    twitter: <FaTwitter className="text-blue-400 w-7 h-7" />,
  };

  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Servicios por categoría</h2>
          <p className="text-muted-foreground mt-2">
            Explora nuestras diferentes opciones para cada plataforma
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link to={`/categoria/${category.platform}/${category.type}`} key={category.id}>
              <Card className="hover:shadow-md transition-all h-full">
                <CardContent className="p-4 text-center flex flex-col items-center justify-center">
                  <div className="mb-3">{platformIcons[category.platform]}</div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
