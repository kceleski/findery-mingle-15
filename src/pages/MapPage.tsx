
import React from 'react';
import Layout from '@/components/Layout';
import Map from '@/components/Map';
import BusinessCard from '@/components/BusinessCard';
import SearchFilters from '@/components/SearchFilters';
import { useBusinessContext } from '@/context/BusinessContext';
import { Button } from '@/components/ui/button';
import { ListVideo, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapPage = () => {
  const { filteredBusinesses } = useBusinessContext();

  return (
    <Layout>
      <SearchFilters />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Business Map</h1>
            <p className="text-gray-600">{filteredBusinesses.length} businesses found</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-1">
              <ListVideo className="h-4 w-4" />
              List View
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[calc(100vh-300px)] min-h-[500px] bg-white rounded-lg shadow-md overflow-hidden">
            <Map />
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-300px)] pr-2 space-y-4">
            <div className="sticky top-0 bg-white p-2 border-b z-10">
              <h2 className="font-medium text-gray-800 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-brand-500" />
                Nearby Businesses
              </h2>
            </div>
            
            {filteredBusinesses.length > 0 ? (
              filteredBusinesses.map(business => (
                <div key={business.id} className="hover:shadow-md transition-shadow rounded-lg">
                  <BusinessCard business={business} />
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No businesses match your search criteria</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-brand-500"
                  onClick={() => window.location.reload()}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
