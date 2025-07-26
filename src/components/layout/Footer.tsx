import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SocialBoost
            </h3>
            <p className="text-muted-foreground mb-4">
              Tu plataforma de confianza para impulsar tu presencia en redes sociales con servicios de alta calidad.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/yefersoncossio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/YefersonCossioOficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://twitter.com/YefersonCossio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categoria/instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios de Instagram
                </Link>
              </li>
              <li>
                <Link to="/categoria/facebook" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios de Facebook
                </Link>
              </li>
              <li>
                <Link to="/categoria/tiktok" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios de TikTok
                </Link>
              </li>
              <li>
                <Link to="/categoria/youtube" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios de YouTube
                </Link>
              </li>
              <li>
                <Link to="/categoria/twitter" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios de Twitter
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Enlaces
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Contacto
              </h3>
              <p className="text-muted-foreground">
                WhatsApp: <a href="https://wa.me/573145287412" className="text-primary hover:underline">+57 314 528 7412</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SocialBoost. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}