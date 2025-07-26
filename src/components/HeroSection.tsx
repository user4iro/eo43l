import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Impulsa tus redes sociales con <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SocialBoost</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Aumenta tu presencia en línea con nuestros servicios de likes, seguidores, visualizaciones y más para todas las principales plataformas sociales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/productos">
                Ver productos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/como-funciona">
                Cómo funciona
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex gap-6 justify-center items-center flex-wrap">
            <div className="flex items-center">
              <div className="text-3xl mr-2">📸</div>
              <span className="font-medium">Instagram</span>
            </div>
            <div className="flex items-center">
              <div className="text-3xl mr-2">👍</div>
              <span className="font-medium">Facebook</span>
            </div>
            <div className="flex items-center">
              <div className="text-3xl mr-2">🎵</div>
              <span className="font-medium">TikTok</span>
            </div>
            <div className="flex items-center">
              <div className="text-3xl mr-2">📹</div>
              <span className="font-medium">YouTube</span>
            </div>
            <div className="flex items-center">
              <div className="text-3xl mr-2">🐦</div>
              <span className="font-medium">Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}