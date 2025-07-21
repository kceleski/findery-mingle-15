
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-100 to-teal-100 flex items-center justify-center mb-6">
        <MapPin className="w-12 h-12 text-brand-500" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      
      <p className="text-center text-gray-600 max-w-md mb-8">
        Oops! The page you are looking for seems to be missing from our map. Let's get you back on the right path.
      </p>
      
      <Link to="/">
        <Button className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 px-6 py-2">
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
