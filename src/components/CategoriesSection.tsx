import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types';

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaSpotify,
  FaPinterest,
  FaTwitch,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
  FaLinkedin,
  FaApple,
  FaThreads,
  FaSoundcloud,
  FaGlobe,
  FaImdb,
} from 'react-icons/fa';
import { SiOnlyfans, SiDeezer, SiTidal, SiMixcloud, SiKickstarter } from 'react-icons/si';

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
    spotify: <FaSpotify className="text-green-500 w-7 h-7" />,
    pinterest: <FaPinterest className="text-red-500 w-7 h-7" />,
    twitch: <FaTwitch className="text-purple-500 w-7 h-7" />,
    reddit: <FaReddit className="text-orange-500 w-7 h-7" />,
    whatsapp: <FaWhatsapp className="text-green-500 w-7 h-7" />,
    telegram: <FaTelegram className="text-blue-400 w-7 h-7" />,
    onlyfans: <SiOnlyfans className="text-sky-400 w-7 h-7" />,
    linkedin: <FaLinkedin className="text-blue-700 w-7 h-7" />,
    'apple-music': <FaApple className="text-gray-700 w-7 h-7" />,
    threads: <FaThreads className="text-black w-7 h-7" />,
    deezer: <SiDeezer className="text-pink-500 w-7 h-7" />,
    tidal: <SiTidal className="text-black w-7 h-7" />,
    mixcloud: <SiMixcloud className="text-blue-500 w-7 h-7" />,
    soundcloud: <FaSoundcloud className="text-orange-500 w-7 h-7" />,
    web: <FaGlobe className="text-gray-600 w-7 h-7" />,
    imdb: <FaImdb className="text-yellow-500 w-7 h-7" />,
    kick: <SiKickstarter className="text-green-700 w-7 h-7" />,
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
