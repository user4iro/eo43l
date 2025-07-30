import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { CartProvider } from '@/hooks/use-cart';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Category from './pages/Category';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AboutUs from './pages/AboutUs';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster position="top-right" />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirmacion" element={<Confirmation />} />
              <Route path="/categoria/:platform" element={<Category />} />
              <Route path="/categoria/:platform/:type" element={<Category />} />
              <Route path="/preguntas-frecuentes" element={<Faq />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/como-funciona" element={<Faq />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
