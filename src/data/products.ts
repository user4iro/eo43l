import { Product, Category } from '@/types';

export const categories: Category[] = [
  // Instagram
  { id: 'instagram-likes', name: 'Likes Instagram', platform: 'instagram', type: 'likes' },
  { id: 'instagram-followers', name: 'Seguidores Instagram', platform: 'instagram', type: 'followers' },
  { id: 'instagram-views', name: 'Visualizaciones Instagram', platform: 'instagram', type: 'views' },
  { id: 'instagram-comments', name: 'Comentarios Instagram', platform: 'instagram', type: 'comments' },
  { id: 'instagram-reels', name: 'Visualizaciones Reels', platform: 'instagram', type: 'views' },
  { id: 'instagram-igtv', name: 'Visualizaciones IGTV', platform: 'instagram', type: 'views' },
  { id: 'instagram-stories', name: 'Visualizaciones Stories', platform: 'instagram', type: 'views' },
  { id: 'instagram-impressions', name: 'Impresiones Instagram', platform: 'instagram', type: 'views' },
  { id: 'instagram-saves', name: 'Guardados Instagram', platform: 'instagram', type: 'shares' },
  { id: 'instagram-profile-visits', name: 'Visitas a Perfiles', platform: 'instagram', type: 'views' },
  { id: 'instagram-live', name: 'Visitas Live', platform: 'instagram', type: 'views' },
  { id: 'instagram-poll-votes', name: 'Votos Encuestas', platform: 'instagram', type: 'shares' },
  { id: 'instagram-verified-comments', name: 'Comentarios Verificados', platform: 'instagram', type: 'comments' },
  { id: 'instagram-power-likes', name: 'Power Likes', platform: 'instagram', type: 'likes' },
  { id: 'instagram-auto-likes', name: 'Auto Likes', platform: 'instagram', type: 'likes' },
  { id: 'instagram-direct-messages', name: 'Mensajes Directos', platform: 'instagram', type: 'shares' },
  
  // Facebook
  { id: 'facebook-likes', name: 'Likes Facebook', platform: 'facebook', type: 'likes' },
  { id: 'facebook-followers', name: 'Seguidores Facebook', platform: 'facebook', type: 'followers' },
  { id: 'facebook-page-likes', name: 'Fans Página', platform: 'facebook', type: 'followers' },
  { id: 'facebook-video-views', name: 'Visualizaciones Vídeos', platform: 'facebook', type: 'views' },
  { id: 'facebook-profile-followers', name: 'Seguidores Perfil Personal', platform: 'facebook', type: 'followers' },
  { id: 'facebook-reviews', name: 'Opiniones Positivas', platform: 'facebook', type: 'comments' },
  { id: 'facebook-comments', name: 'Comentarios Facebook', platform: 'facebook', type: 'comments' },
  
  // TikTok
  { id: 'tiktok-likes', name: 'Likes TikTok', platform: 'tiktok', type: 'likes' },
  { id: 'tiktok-followers', name: 'Seguidores TikTok', platform: 'tiktok', type: 'followers' },
  { id: 'tiktok-views', name: 'Visualizaciones TikTok', platform: 'tiktok', type: 'views' },
  { id: 'tiktok-shares', name: 'Compartir TikTok', platform: 'tiktok', type: 'shares' },
  { id: 'tiktok-comments', name: 'Comentarios TikTok', platform: 'tiktok', type: 'comments' },
  { id: 'tiktok-saves', name: 'Guardados TikTok', platform: 'tiktok', type: 'shares' },
  
  // YouTube
  { id: 'youtube-likes', name: 'Likes YouTube', platform: 'youtube', type: 'likes' },
  { id: 'youtube-views', name: 'Visualizaciones YouTube', platform: 'youtube', type: 'views' },
  { id: 'youtube-subscribers', name: 'Suscriptores YouTube', platform: 'youtube', type: 'followers' },
  { id: 'youtube-watch-hours', name: 'Horas de Visualización', platform: 'youtube', type: 'views' },
  { id: 'youtube-comments', name: 'Comentarios YouTube', platform: 'youtube', type: 'comments' },
  { id: 'youtube-shorts-views', name: 'Visualizaciones Shorts', platform: 'youtube', type: 'views' },
  { id: 'youtube-shorts-likes', name: 'Likes Shorts', platform: 'youtube', type: 'likes' },
  
  // Twitter/X
  { id: 'twitter-likes', name: 'Likes Twitter', platform: 'twitter', type: 'likes' },
  { id: 'twitter-followers', name: 'Seguidores Twitter', platform: 'twitter', type: 'followers' },
  
  // Spotify
  { id: 'spotify-plays', name: 'Reproducciones Spotify', platform: 'spotify', type: 'views' },
  { id: 'spotify-podcast-plays', name: 'Reproducciones Podcast', platform: 'spotify', type: 'views' },
  { id: 'spotify-geo-plays', name: 'Reproducciones Geolocalizadas', platform: 'spotify', type: 'views' },
  { id: 'spotify-monthly-listeners', name: 'Oyentes Mensuales', platform: 'spotify', type: 'followers' },
  { id: 'spotify-followers', name: 'Seguidores Spotify', platform: 'spotify', type: 'followers' },
  
  // Others
  { id: 'pinterest-followers', name: 'Seguidores Pinterest', platform: 'pinterest', type: 'followers' },
  { id: 'whatsapp-followers', name: 'Seguidores Canal WhatsApp', platform: 'whatsapp', type: 'followers' },
  { id: 'reddit-upvotes', name: 'Upvotes Reddit', platform: 'reddit', type: 'likes' },
  { id: 'reddit-followers', name: 'Seguidores Reddit', platform: 'reddit', type: 'followers' },
  { id: 'soundcloud-services', name: 'Servicios SoundCloud', platform: 'soundcloud', type: 'followers' },
  { id: 'telegram-followers', name: 'Seguidores Telegram', platform: 'telegram', type: 'followers' },
  { id: 'onlyfans-followers', name: 'Seguidores OnlyFans', platform: 'onlyfans', type: 'followers' },
  { id: 'linkedin-company', name: 'Seguidores Página Empresa', platform: 'linkedin', type: 'followers' },
  { id: 'linkedin-profile', name: 'Seguidores Perfil Personal', platform: 'linkedin', type: 'followers' },
  { id: 'kick-followers', name: 'Seguidores Kick', platform: 'kick', type: 'followers' },
  { id: 'apple-music-plays', name: 'Reproducciones Apple Music', platform: 'apple-music', type: 'views' },
  { id: 'threads-followers', name: 'Seguidores Threads', platform: 'threads', type: 'followers' },
  { id: 'deezer-plays', name: 'Reproducciones Deezer', platform: 'deezer', type: 'views' },
  { id: 'tidal-plays', name: 'Reproducciones TIDAL', platform: 'tidal', type: 'views' },
  { id: 'mixcloud-plays', name: 'Reproducciones MixCloud', platform: 'mixcloud', type: 'views' },
  { id: 'twitch-followers', name: 'Seguidores Twitch', platform: 'twitch', type: 'followers' },
  { id: 'web-traffic', name: 'Tráfico Web Geolocalizado', platform: 'web', type: 'views' },
  { id: 'imdb-starmeter', name: 'Subida en STARmeter IMDB', platform: 'imdb', type: 'likes' },
  { id: 'imdb-votes', name: 'Votos Para IMDB', platform: 'imdb', type: 'likes' }
];

export const products: Product[] = [
  // INSTAGRAM PRODUCTS
  {
    id: '1',
    name: '100 Likes Instagram',
    description: 'Aumenta la visibilidad de tus publicaciones con 100 likes reales de alta calidad.',
    price: 3.99,
    discountPrice: 2.99,
    image: '/images/InstagramLikes.jpg',
    platform: 'instagram',
    category: 'likes',
    featured: true,
    quantity: 100,
    deliveryTime: '1-2 horas',
    quality: 'standard'
  },
  {
    id: '2',
    name: '500 Likes Instagram',
    description: 'Paquete de 500 likes para tus fotos y videos de Instagram.',
    price: 9.99,
    discountPrice: 7.99,
    image: '/images/InstagramLikes.jpg',
    platform: 'instagram',
    category: 'likes',
    quantity: 500,
    deliveryTime: '2-6 horas',
    quality: 'standard'
  },
  {
    id: '3',
    name: '1000 Likes Instagram',
    description: 'Obtén 1000 likes en Instagram para destacar tus mejores contenidos.',
    price: 18.99,
    discountPrice: 14.99,
    image: '/images/InstagramLikes.jpg',
    platform: 'instagram',
    category: 'likes',
    quantity: 1000,
    deliveryTime: '12-24 horas',
    quality: 'premium'
  },
  {
    id: '4',
    name: '100 Seguidores Instagram',
    description: 'Aumenta tu audiencia con 100 seguidores reales para tu cuenta de Instagram.',
    price: 4.99,
    discountPrice: 3.99,
    image: '/images/InstagramFollowers.jpg',
    platform: 'instagram',
    category: 'followers',
    featured: true,
    quantity: 100,
    deliveryTime: '1-2 días',
    quality: 'standard'
  },
  {
    id: '5',
    name: '500 Seguidores Instagram',
    description: 'Paquete de 500 seguidores para hacer crecer tu perfil de Instagram.',
    price: 14.99,
    discountPrice: 11.99,
    image: '/images/InstagramFollowers.jpg',
    platform: 'instagram',
    category: 'followers',
    quantity: 500,
    deliveryTime: '2-3 días',
    quality: 'premium'
  },
  {
    id: '6',
    name: '1000 Visualizaciones Instagram',
    description: 'Obtén 1000 visualizaciones en tus videos de Instagram para aumentar tu alcance.',
    price: 6.99,
    discountPrice: 4.99,
    image: '/images/InstagramViews.jpg',
    platform: 'instagram',
    category: 'views',
    quantity: 1000,
    deliveryTime: '1-2 horas',
    quality: 'standard'
  },
  {
    id: '11',
    name: '50 Comentarios Personalizados Instagram',
    description: 'Comentarios personalizados para tus publicaciones de Instagram que aumentarán tu engagement.',
    price: 9.99,
    discountPrice: 8.49,
    image: '/assets/instagram-comments.png',
    platform: 'instagram',
    category: 'comments',
    quantity: 50,
    deliveryTime: '1-2 días',
    quality: 'premium'
  },
  {
    id: '12',
    name: '1000 Visualizaciones Reels Instagram',
    description: 'Aumenta la visibilidad de tus Reels de Instagram y llega a más audiencia.',
    price: 6.99,
    discountPrice: 4.99,
    image: '/assets/instagram-reels.png',
    platform: 'instagram',
    category: 'views',
    featured: true,
    quantity: 1000,
    deliveryTime: '1-2 horas',
    quality: 'standard'
  },
  {
    id: '13',
    name: '1000 Visualizaciones IGTV',
    description: 'Impulsa tus videos largos en IGTV con visualizaciones de calidad.',
    price: 7.99,
    discountPrice: 5.99,
    image: '/assets/instagram-igtv.png',
    platform: 'instagram',
    category: 'views',
    quantity: 1000,
    deliveryTime: '1-2 días',
    quality: 'premium'
  },
  {
    id: '14',
    name: '1000 Visualizaciones Stories Instagram',
    description: 'Aumenta las reproducciones de tus stories para mayor alcance y exposición.',
    price: 4.99,
    discountPrice: 3.49,
    image: '/assets/instagram-stories.png',
    platform: 'instagram',
    category: 'views',
    quantity: 1000,
    deliveryTime: '6-12 horas',
    quality: 'standard'
  },
  {
    id: '15',
    name: '1000 Impresiones Instagram',
    description: 'Mejora el alcance de tus publicaciones con impresiones de calidad.',
    price: 3.99,
    discountPrice: 2.99,
    image: '/assets/instagram-impressions.png',
    platform: 'instagram',
    category: 'views',
    quantity: 1000,
    deliveryTime: '12-24 horas',
    quality: 'standard'
  },
  {
    id: '16',
    name: '500 Guardados Instagram',
    description: 'Aumenta los guardados en tus publicaciones para mejorar tu posicionamiento en el algoritmo.',
    price: 9.99,
    discountPrice: 7.49,
    image: '/assets/instagram-saves.png',
    platform: 'instagram',
    category: 'shares',
    quantity: 500,
    deliveryTime: '1-2 días',
    quality: 'premium'
  },
  {
    id: '17',
    name: '1000 Visitas a Perfiles Instagram',
    description: 'Incrementa las visitas a tu perfil para mayor exposición.',
    price: 5.99,
    discountPrice: 4.49,
    image: '/assets/instagram-profile-visits.png',
    platform: 'instagram',
    category: 'views',
    quantity: 1000,
    deliveryTime: '1-2 días',
    quality: 'standard'
  },
  {
    id: '18',
    name: '100 Auto Likes Instagram (30 días)',
    description: 'Recibe likes automáticamente en tus nuevas publicaciones durante 30 días.',
    price: 24.99,
    discountPrice: 19.99,
    image: '/images/InstagramLikes.jpg',
    platform: 'instagram',
    category: 'likes',
    featured: true,
    quantity: 100,
    deliveryTime: 'Automático',
    quality: 'premium'
  },
  
  // FACEBOOK PRODUCTS
  {
    id: '7',
    name: '100 Likes Facebook',
    description: 'Consigue 100 likes para tus publicaciones en Facebook y mejora tu engagement.',
    price: 3.99,
    image: '/images/FacebookLikes.jpg',
    platform: 'facebook',
    category: 'likes',
    quantity: 100,
    deliveryTime: '1-2 horas',
    quality: 'standard'
  },
  {
    id: '21',
    name: '500 Fans Página Facebook',
    description: 'Aumenta los seguidores de tu página de Facebook para mayor credibilidad.',
    price: 12.99,
    discountPrice: 9.99,
    image: '/images/FacebookLikes.jpg',
    platform: 'facebook',
    category: 'followers',
    quantity: 500,
    deliveryTime: '2-3 días',
    quality: 'premium'
  },
  {
    id: '22',
    name: '1000 Visualizaciones Video Facebook',
    description: 'Consigue más visualizaciones en tus videos de Facebook.',
    price: 6.99,
    discountPrice: 4.99,
    image: '/assets/facebook-video-views.png',
    platform: 'facebook',
    category: 'views',
    quantity: 1000,
    deliveryTime: '1-2 días',
    quality: 'standard'
  },
  {
    id: '23',
    name: '100 Seguidores Perfil Personal Facebook',
    description: 'Aumenta los seguidores de tu perfil personal de Facebook.',
    price: 7.99,
    discountPrice: 5.99,
    image: '/assets/facebook-profile-followers.png',
    platform: 'facebook',
    category: 'followers',
    quantity: 100,
    deliveryTime: '1-2 días',
    quality: 'premium'
  },
  {
    id: '24',
    name: '10 Opiniones Positivas Facebook',
    description: 'Mejora la reputación de tu página con opiniones positivas de 5 estrellas.',
    price: 29.99,
    discountPrice: 24.99,
    image: '/assets/facebook-reviews.png',
    platform: 'facebook',
    category: 'comments',
    quantity: 10,
    deliveryTime: '3-5 días',
    quality: 'vip'
  },
  
  // TIKTOK PRODUCTS
  {
    id: '8',
    name: '500 Seguidores TikTok',
    description: 'Impulsa tu cuenta de TikTok con 500 nuevos seguidores de calidad.',
    price: 12.99,
    discountPrice: 9.99,
    image: '/images/TikTokFollowers.jpg',
    platform: 'tiktok',
    category: 'followers',
    featured: true,
    quantity: 500,
    deliveryTime: '1-3 días',
    quality: 'premium'
  },
  {
    id: '31',
    name: '1000 Likes TikTok',
    description: 'Aumenta los me gusta en tus videos de TikTok.',
    price: 5.99,
    discountPrice: 4.49,
    image: '/assets/tiktok-likes.png',
    platform: 'tiktok',
    category: 'likes',
    quantity: 1000,
    deliveryTime: '1-2 días',
    quality: 'standard'
  },
  {
    id: '32',
    name: '5000 Visualizaciones TikTok',
    description: 'Consigue más visualizaciones en tus videos de TikTok para mayor alcance.',
    price: 9.99,
    discountPrice: 7.99,
    image: '/assets/tiktok-views.png',
    platform: 'tiktok',
    category: 'views',
    quantity: 5000,
    deliveryTime: '1-2 días',
    quality: 'standard'
  },
  {
    id: '33',
    name: '500 Compartir TikTok',
    description: 'Aumenta las veces que se comparte tu contenido en TikTok.',
    price: 14.99,
    discountPrice: 11.99,
    image: '/assets/tiktok-shares.png',
    platform: 'tiktok',
    category: 'shares',
    quantity: 500,
    deliveryTime: '2-3 días',
    quality: 'premium'
  },
  {
    id: '34',
    name: '50 Comentarios Personalizados TikTok',
    description: 'Comentarios personalizados para mejorar la interacción en tus videos de TikTok.',
    price: 9.99,
    discountPrice: 8.49,
    image: '/assets/tiktok-comments.png',
    platform: 'tiktok',
    category: 'comments',
    quantity: 50,
    deliveryTime: '1-2 días',
    quality: 'premium'
  },
  
  // YOUTUBE PRODUCTS
  {
    id: '9',
    name: '2000 Visualizaciones YouTube',
    description: 'Aumenta la popularidad de tus videos con 2000 visualizaciones en YouTube.',
    price: 14.99,
    discountPrice: 11.99,
    image: '/images/YouTubeViews.jpg',
    platform: 'youtube',
    category: 'views',
    quantity: 2000,
    deliveryTime: '2-3 días',
    quality: 'premium'
  },
  {
    id: '41',
    name: '100 Suscriptores YouTube',
    description: 'Aumenta los suscriptores de tu canal de YouTube.',
    price: 19.99,
    discountPrice: 16.99,
    image: '/assets/youtube-subscribers.png',
    platform: 'youtube',
    category: 'followers',
    featured: true,
    quantity: 100,
    deliveryTime: '2-4 días',
    quality: 'premium'
  },
  {
    id: '42',
    name: '500 Likes YouTube',
    description: 'Incrementa los me gusta en tus videos de YouTube.',
    price: 9.99,
    discountPrice: 7.99,
    image: '/assets/youtube-likes.png',
    platform: 'youtube',
    category: 'likes',
    quantity: 500,
    deliveryTime: '1-2 días',
    quality: 'standard'
  },
  {
    id: '43',
    name: '1000 Horas de Visualización YouTube',
    description: 'Consigue horas de visualización para monetizar tu canal de YouTube.',
    price: 49.99,
    discountPrice: 44.99,
    image: '/images/YouTubeViews.jpg',
    platform: 'youtube',
    category: 'views',
    quantity: 1000,
    deliveryTime: '7-10 días',
    quality: 'vip'
  },
  {
    id: '44',
    name: '25 Comentarios Personalizados YouTube',
    description: 'Comentarios personalizados para aumentar la interacción en tus videos.',
    price: 14.99,
    discountPrice: 12.49,
    image: '/assets/youtube-comments.png',
    platform: 'youtube',
    category: 'comments',
    quantity: 25,
    deliveryTime: '1-2 días',
    quality: 'premium'
  },
  
  // TWITTER/X PRODUCTS
  {
    id: '10',
    name: '1000 Seguidores Twitter',
    description: 'Gana credibilidad en Twitter con 1000 nuevos seguidores para tu cuenta.',
    price: 19.99,
    discountPrice: 15.99,
    image: '/images/TwitterFollowers.jpg',
    platform: 'twitter',
    category: 'followers',
    quantity: 1000,
    deliveryTime: '3-5 días',
    quality: 'vip'
  },
  {
    id: '51',
    name: '500 Likes Twitter',
    description: 'Consigue más likes en tus tweets para mayor visibilidad.',
    price: 9.99,
    discountPrice: 7.99,
    image: '/assets/twitter-likes.png',
    platform: 'twitter',
    category: 'likes',
    quantity: 500,
    deliveryTime: '1-2 días',
    quality: 'standard'
  },
  
  // SPOTIFY PRODUCTS
  {
    id: '61',
    name: '1000 Reproducciones Spotify',
    description: 'Aumenta las reproducciones de tus canciones en Spotify.',
    price: 5.99,
    discountPrice: 4.49,
    image: '/assets/spotify-plays.png',
    platform: 'spotify',
    category: 'views',
    quantity: 1000,
    deliveryTime: '1-3 días',
    quality: 'standard'
  },
  {
    id: '62',
    name: '500 Seguidores Spotify',
    description: 'Consigue más seguidores en tu perfil de artista en Spotify.',
    price: 14.99,
    discountPrice: 11.99,
    image: '/assets/spotify-followers.png',
    platform: 'spotify',
    category: 'followers',
    quantity: 500,
    deliveryTime: '2-4 días',
    quality: 'premium'
  },
  {
    id: '63',
    name: '1000 Reproducciones Podcast Spotify',
    description: 'Impulsa tu podcast con más reproducciones en Spotify.',
    price: 9.99,
    discountPrice: 7.99,
    image: '/assets/spotify-podcast-plays.png',
    platform: 'spotify',
    category: 'views',
    quantity: 1000,
    deliveryTime: '2-3 días',
    quality: 'premium'
  },
  
  // OTHER PLATFORMS
  {
    id: '71',
    name: '500 Seguidores Pinterest',
    description: 'Incrementa los seguidores en tu cuenta de Pinterest.',
    price: 12.99,
    discountPrice: 9.99,
    image: '/assets/pinterest-followers.png',
    platform: 'pinterest',
    category: 'followers',
    quantity: 500,
    deliveryTime: '2-4 días',
    quality: 'premium'
  },
  {
    id: '72',
    name: '100 Seguidores Twitch',
    description: 'Aumenta los seguidores en tu canal de Twitch para crecer como streamer.',
    price: 19.99,
    discountPrice: 16.99,
    image: '/assets/twitch-followers.png',
    platform: 'twitch',
    category: 'followers',
    quantity: 100,
    deliveryTime: '1-3 días',
    quality: 'premium'
  },
  {
    id: '73',
    name: '100 Seguidores OnlyFans',
    description: 'Consigue más seguidores en tu cuenta de OnlyFans.',
    price: 29.99,
    discountPrice: 24.99,
    image: '/assets/onlyfans-followers.png',
    platform: 'onlyfans',
    category: 'followers',
    quantity: 100,
    deliveryTime: '3-5 días',
    quality: 'vip'
  },
  {
    id: '74',
    name: '1000 Upvotes Reddit',
    description: 'Aumenta los upvotes en tus posts de Reddit para mayor visibilidad.',
    price: 19.99,
    discountPrice: 16.99,
    image: '/assets/reddit-upvotes.png',
    platform: 'reddit',
    category: 'likes',
    quantity: 1000,
    deliveryTime: '1-3 días',
    quality: 'premium'
  },
  {
    id: '75',
    name: '500 Seguidores Threads',
    description: 'Impulsa tu presencia en la nueva red social Threads con más seguidores.',
    price: 14.99,
    discountPrice: 12.49,
    image: '/assets/threads-followers.png',
    platform: 'threads',
    category: 'followers',
    quantity: 500,
    deliveryTime: '2-4 días',
    quality: 'premium'
  },
  {
    id: '76',
    name: '10000 Tráfico Web Geolocalizado',
    description: 'Aumenta las visitas a tu sitio web con tráfico real geolocalizado.',
    price: 29.99,
    discountPrice: 24.99,
    image: '/assets/web-traffic.png',
    platform: 'web',
    category: 'views',
    quantity: 10000,
    deliveryTime: '7-10 días',
    quality: 'vip'
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByPlatform = (platform: string): Product[] => {
  return products.filter(product => product.platform === platform);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};