
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Business, SearchFilters, Category } from '@/types';
import { businesses, categories } from '@/data/mockData';

interface BusinessContextType {
  businesses: Business[];
  filteredBusinesses: Business[];
  categories: Category[];
  selectedBusiness: Business | null;
  searchFilters: SearchFilters;
  userLocation: { lat: number; lng: number } | null;
  setSelectedBusiness: (business: Business | null) => void;
  updateSearchFilters: (filters: Partial<SearchFilters>) => void;
  getUserLocation: () => Promise<void>;
}

const defaultSearchFilters: SearchFilters = {
  query: '',
  category: '',
  radius: 5,
  location: undefined
};

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allBusinesses] = useState<Business[]>(businesses);
  const [allCategories] = useState<Category[]>(categories);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>(businesses);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>(defaultSearchFilters);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const getUserLocation = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            setSearchFilters(prev => ({
              ...prev,
              location: { lat: latitude, lng: longitude }
            }));
            resolve();
          },
          (error) => {
            console.error('Error getting location:', error);
            reject(error);
          }
        );
      } else {
        const error = new Error('Geolocation is not supported by this browser.');
        console.error(error);
        reject(error);
      }
    });
  };

  const updateSearchFilters = (filters: Partial<SearchFilters>) => {
    setSearchFilters(prev => ({ ...prev, ...filters }));
  };

  // Filter businesses based on search filters
  useEffect(() => {
    let filtered = allBusinesses;

    // Filter by query
    if (searchFilters.query) {
      const query = searchFilters.query.toLowerCase();
      filtered = filtered.filter(business => 
        business.name.toLowerCase().includes(query) || 
        business.description.toLowerCase().includes(query) ||
        business.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (searchFilters.category) {
      filtered = filtered.filter(business => 
        business.category === searchFilters.category
      );
    }

    // Filter by location radius
    if (searchFilters.location && searchFilters.radius) {
      filtered = filtered.filter(business => {
        const distance = calculateDistance(
          searchFilters.location!.lat,
          searchFilters.location!.lng,
          business.location.lat,
          business.location.lng
        );
        return distance <= searchFilters.radius;
      });
    }

    setFilteredBusinesses(filtered);
  }, [searchFilters, allBusinesses]);

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI/180);
  };

  return (
    <BusinessContext.Provider
      value={{
        businesses: allBusinesses,
        filteredBusinesses,
        categories: allCategories,
        selectedBusiness,
        searchFilters,
        userLocation,
        setSelectedBusiness,
        updateSearchFilters,
        getUserLocation
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error('useBusinessContext must be used within a BusinessProvider');
  }
  return context;
};
