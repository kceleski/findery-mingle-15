
export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website?: string;
  image: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  hours?: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface SearchFilters {
  query: string;
  category: string;
  radius: number;
  location?: {
    lat: number;
    lng: number;
  };
}
