export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'twitter';
  category: 'likes' | 'followers' | 'views' | 'comments' | 'shares';
  featured?: boolean;
  quantity: number;
  deliveryTime: string;
  quality: 'standard' | 'premium' | 'vip';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'twitter';
  type: 'likes' | 'followers' | 'views' | 'comments' | 'shares';
}

export interface OrderDetails {
  profileUrl: string;
  email: string;
}