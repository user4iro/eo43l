import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <h1 className="text-9xl font-bold text-muted-foreground/20">404</h1>
      <h2 className="text-3xl font-bold mt-6 mb-2">Página no encontrada</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link to="/">
            Volver al inicio
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/productos">
            Ver productos
          </Link>
        </Button>
      </div>
    </div>
  );
}