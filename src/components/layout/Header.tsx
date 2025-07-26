import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';

export function Header() {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Instagram', path: '/categoria/instagram' },
    { label: 'Facebook', path: '/categoria/facebook' },
    { label: 'TikTok', path: '/categoria/tiktok' },
    { label: 'YouTube', path: '/categoria/youtube' },
    { label: 'Twitter', path: '/categoria/twitter' },
    { label: 'Spotify', path: '/categoria/spotify' },
    { label: 'Más', path: '/productos' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SocialBoost
            </span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar servicios..."
              className="w-full pl-8"
            />
          </div>

          <Button variant="outline" size="icon" asChild>
            <Link to="/cuenta">
              <User className="h-4 w-4" />
              <span className="sr-only">Cuenta</span>
            </Link>
          </Button>

          <Button variant="outline" size="icon" asChild className="relative">
            <Link to="/carrito">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Carrito</span>
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </Button>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/" className="flex items-center pb-6" onClick={() => setIsMenuOpen(false)}>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                SocialBoost
              </span>
            </Link>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar servicios..." className="w-full pl-8" />
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/cuenta" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-4 w-4 mr-2" />
                    Cuenta
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1 relative">
                  <Link to="/carrito" onClick={() => setIsMenuOpen(false)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Carrito
                    {items.length > 0 && (
                      <span className="ml-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                        {items.length}
                      </span>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}