
import { Business, Category } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Restaurants', icon: 'utensils', count: 45 },
  { id: '2', name: 'Retail', icon: 'shopping-bag', count: 32 },
  { id: '3', name: 'Services', icon: 'briefcase', count: 28 },
  { id: '4', name: 'Health', icon: 'heart', count: 18 },
  { id: '5', name: 'Beauty', icon: 'scissors', count: 22 },
  { id: '6', name: 'Fitness', icon: 'dumbbell', count: 15 },
  { id: '7', name: 'Education', icon: 'graduation-cap', count: 10 },
  { id: '8', name: 'Entertainment', icon: 'film', count: 12 },
];

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Coastal Cuisine',
    category: 'Restaurants',
    rating: 4.7,
    reviewCount: 124,
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    phone: '(415) 555-1234',
    website: 'https://coastalcuisine.example.com',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Fresh seafood and coastal flavors in a relaxed atmosphere. Farm-to-table ingredients and seasonal menu.',
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    hours: {
      'Monday': { open: '11:00', close: '22:00' },
      'Tuesday': { open: '11:00', close: '22:00' },
      'Wednesday': { open: '11:00', close: '22:00' },
      'Thursday': { open: '11:00', close: '23:00' },
      'Friday': { open: '11:00', close: '23:00' },
      'Saturday': { open: '10:00', close: '23:00' },
      'Sunday': { open: '10:00', close: '21:00' }
    }
  },
  {
    id: '2',
    name: 'Urban Outfitters',
    category: 'Retail',
    rating: 4.2,
    reviewCount: 87,
    address: '456 Market Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    phone: '(415) 555-5678',
    website: 'https://urbanoutfitters.example.com',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Trendy clothing and home goods for the urban lifestyle. Featuring sustainable and locally made products.',
    location: {
      lat: 37.7922,
      lng: -122.4070
    },
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    },
    hours: {
      'Monday': { open: '10:00', close: '20:00' },
      'Tuesday': { open: '10:00', close: '20:00' },
      'Wednesday': { open: '10:00', close: '20:00' },
      'Thursday': { open: '10:00', close: '20:00' },
      'Friday': { open: '10:00', close: '21:00' },
      'Saturday': { open: '10:00', close: '21:00' },
      'Sunday': { open: '11:00', close: '19:00' }
    }
  },
  {
    id: '3',
    name: 'Bay Area Tech Solutions',
    category: 'Services',
    rating: 4.9,
    reviewCount: 56,
    address: '789 Howard Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94107',
    phone: '(415) 555-9012',
    website: 'https://bayareatech.example.com',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D',
    description: 'Expert IT support and technology consulting for small businesses. Remote and on-site services available.',
    location: {
      lat: 37.7833,
      lng: -122.4024
    },
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com'
    },
    hours: {
      'Monday': { open: '09:00', close: '18:00' },
      'Tuesday': { open: '09:00', close: '18:00' },
      'Wednesday': { open: '09:00', close: '18:00' },
      'Thursday': { open: '09:00', close: '18:00' },
      'Friday': { open: '09:00', close: '17:00' },
      'Saturday': { open: 'Closed', close: 'Closed' },
      'Sunday': { open: 'Closed', close: 'Closed' }
    }
  },
  {
    id: '4',
    name: 'Wellness Center',
    category: 'Health',
    rating: 4.5,
    reviewCount: 108,
    address: '321 Pine Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94108',
    phone: '(415) 555-3456',
    website: 'https://wellness.example.com',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlbGxuZXNzfGVufDB8fDB8fHww',
    description: 'Holistic health services including acupuncture, massage therapy, and nutritional counseling.',
    location: {
      lat: 37.7683,
      lng: -122.4212
    },
    socialLinks: {
      instagram: 'https://instagram.com'
    },
    hours: {
      'Monday': { open: '08:00', close: '20:00' },
      'Tuesday': { open: '08:00', close: '20:00' },
      'Wednesday': { open: '08:00', close: '20:00' },
      'Thursday': { open: '08:00', close: '20:00' },
      'Friday': { open: '08:00', close: '20:00' },
      'Saturday': { open: '09:00', close: '18:00' },
      'Sunday': { open: '10:00', close: '16:00' }
    }
  },
  {
    id: '5',
    name: 'Lush Salon & Spa',
    category: 'Beauty',
    rating: 4.6,
    reviewCount: 92,
    address: '555 Sutter Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    phone: '(415) 555-7890',
    website: 'https://lushsalon.example.com',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNhbG9ufGVufDB8fDB8fHww',
    description: 'Luxury hair styling, nail services, and spa treatments using organic and sustainable products.',
    location: {
      lat: 37.7695,
      lng: -122.4143
    },
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    },
    hours: {
      'Monday': { open: '10:00', close: '19:00' },
      'Tuesday': { open: '10:00', close: '19:00' },
      'Wednesday': { open: '10:00', close: '19:00' },
      'Thursday': { open: '10:00', close: '20:00' },
      'Friday': { open: '10:00', close: '20:00' },
      'Saturday': { open: '09:00', close: '20:00' },
      'Sunday': { open: '11:00', close: '18:00' }
    }
  },
  {
    id: '6',
    name: 'Peak Performance Gym',
    category: 'Fitness',
    rating: 4.3,
    reviewCount: 75,
    address: '888 Folsom Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94107',
    phone: '(415) 555-2345',
    website: 'https://peakperformance.example.com',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww',
    description: 'State-of-the-art fitness equipment, personal training, and group classes for all fitness levels.',
    location: {
      lat: 37.7766,
      lng: -122.4155
    },
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    hours: {
      'Monday': { open: '05:00', close: '23:00' },
      'Tuesday': { open: '05:00', close: '23:00' },
      'Wednesday': { open: '05:00', close: '23:00' },
      'Thursday': { open: '05:00', close: '23:00' },
      'Friday': { open: '05:00', close: '23:00' },
      'Saturday': { open: '07:00', close: '22:00' },
      'Sunday': { open: '07:00', close: '22:00' }
    }
  }
];
