
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Menu, ChevronDown, X, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBusinessContext } from '@/context/BusinessContext';
import { toast } from '@/hooks/use-toast';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { updateSearchFilters, getUserLocation, categories } = useBusinessContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const handleLocationClick = async () => {
    try {
      await getUserLocation();
      toast({
        title: "Location updated",
        description: "Using your current location for search results",
      });
    } catch (error) {
      toast({
        title: "Location error",
        description: "Unable to get your location. Please allow location access.",
        variant: "destructive",
      });
    }
  };

  // Get top categories for dropdown
  const topCategories = categories.slice(0, 6);
  
  // Check if the current path is active
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/35814cbd-9d3d-4154-8d08-7afaaf08217a.png" 
              alt="HealthProAssist" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Search */}
          <div className="relative flex-1 max-w-md mx-10 hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
              placeholder="Search businesses..."
              onChange={(e) => updateSearchFilters({ query: e.target.value })}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActivePath('/') ? "default" : "ghost"} size="sm">
                Home
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={location.pathname.includes('/category') ? "default" : "ghost"} 
                  size="sm" 
                  className="flex items-center"
                >
                  Categories <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/categories" className="w-full">All Categories</Link>
                </DropdownMenuItem>
                {topCategories.map(category => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link to={`/category/${category.name.toLowerCase()}`} className="w-full">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/map">
              <Button variant={isActivePath('/map') ? "default" : "ghost"} size="sm">
                Map
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 ml-2"
              onClick={handleLocationClick}
            >
              <MapPin className="w-4 h-4" />
              <span>Near Me</span>
            </Button>
            
            <Button className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 ml-2">
              <Phone className="w-4 h-4 mr-1" /> Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
                  placeholder="Search businesses..."
                  onChange={(e) => updateSearchFilters({ query: e.target.value })}
                />
              </div>
              
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-100">
                Home
              </Link>
              <Link to="/categories" className="px-3 py-2 rounded-md hover:bg-gray-100">
                Categories
              </Link>
              <Link to="/map" className="px-3 py-2 rounded-md hover:bg-gray-100">
                Map
              </Link>
              
              <div className="grid grid-cols-2 gap-3 mt-3">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="sm"
                  onClick={handleLocationClick}
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Near Me
                </Button>
                
                <Button className="w-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600" size="sm">
                  <Phone className="w-4 h-4 mr-1" /> Contact
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
