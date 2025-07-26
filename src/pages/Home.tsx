import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CategoriesSection } from '@/components/CategoriesSection';
import { HowItWorks } from '@/components/HowItWorks';
import { BenefitsSection } from '@/components/BenefitsSection';
import { categories, getFeaturedProducts } from '@/data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} title="Servicios destacados" />
      <CategoriesSection categories={categories} />
      <HowItWorks />
      <BenefitsSection />
    </>
  );
}