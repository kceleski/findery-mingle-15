
import React from 'react';
import { Search, ChevronRight, MapPin, Phone, ArrowRight, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBusinessContext } from '@/context/BusinessContext';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { updateSearchFilters, getUserLocation } = useBusinessContext();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/map');
  };

  const handleUseLocation = async () => {
    try {
      await getUserLocation();
      navigate('/map');
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-brand-900 to-teal-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
            <Award className="h-6 w-6 text-yellow-300" />
          </div>
          <span className="text-white/90 text-sm md:text-base">Trusted by over 10,000 businesses</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
          Connect with Top Local Businesses in Your Area
        </h1>
        
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
          Discover, connect, and engage with the best local businesses and services near you.
        </p>
        
        <form 
          onSubmit={handleSearchSubmit}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-white/70" />
              </div>
              <input
                type="text"
                className="w-full h-12 pl-10 pr-4 text-white bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-white/70"
                placeholder="Search for businesses, services, or locations..."
                onChange={(e) => updateSearchFilters({ query: e.target.value })}
              />
            </div>
            
            <Button 
              type="submit"
              className="h-12 px-6 bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white font-medium rounded-md flex items-center justify-center"
            >
              Search
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </form>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            className="text-white border-white/30 hover:bg-white/20 flex items-center"
            onClick={handleUseLocation}
          >
            <MapPin className="w-5 h-5 mr-1.5" />
            Use my current location
          </Button>
          
          <Button
            className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600"
            onClick={() => navigate('/contact')}
          >
            <Phone className="w-5 h-5 mr-1.5" />
            Contact Us
          </Button>
          
          <Button
            variant="link"
            className="text-white hover:text-brand-200"
            onClick={() => navigate('/categories')}
          >
            Explore Services <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-300 mr-2" fill="currentColor" />
            <span className="text-sm md:text-base">4.9 Average Rating</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm md:text-base">50,000+ Monthly Users</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm md:text-base">Verified Businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
