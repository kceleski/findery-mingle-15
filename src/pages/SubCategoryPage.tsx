
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useBusinessContext } from '@/context/BusinessContext';
import BusinessCard from '@/components/BusinessCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { MapPin, ListFilter, Star, MapIcon, Filter, Grid, List } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import SearchFilters from '@/components/SearchFilters';

const SubCategoryPage = () => {
  const { category = 'restaurants' } = useParams<{ category: string }>();
  const { filteredBusinesses, updateSearchFilters } = useBusinessContext();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // Filter businesses based on the category parameter
  const categoryBusinesses = filteredBusinesses.filter(
    business => business.category.toLowerCase() === category.toLowerCase()
  );

  // Mock data for filters
  const brands = ['Apple', 'Samsung', 'Google', 'Microsoft', 'Dell'];
  const serviceTypes = ['Installation', 'Repair', 'Consultation', 'Maintenance'];

  React.useEffect(() => {
    updateSearchFilters({ category });
  }, [category, updateSearchFilters]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const clearAllFilters = () => {
    setPriceRange([0, 500]);
    setSelectedBrands([]);
    setMinRating(0);
    updateSearchFilters({ category: '', query: '' });
  };

  return (
    <Layout>
      <SearchFilters />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/categories">Categories</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">{category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="bg-gradient-to-r from-brand-100 to-teal-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 capitalize">{category}</h1>
          <p className="text-gray-600">
            Explore {categoryBusinesses.length} {category} businesses in your area
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear All
                </Button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  min={0}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Brands/Service Types */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {category === 'retail' ? 'Brands' : 'Service Types'}
                </label>
                <div className="space-y-2">
                  {(category === 'retail' ? brands : serviceTypes).map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox
                        id={item}
                        checked={selectedBrands.includes(item)}
                        onCheckedChange={(checked) => handleBrandChange(item, !!checked)}
                      />
                      <label htmlFor={item} className="text-sm text-gray-700">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Minimum Rating
                </label>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={minRating === rating}
                        onCheckedChange={() => setMinRating(minRating === rating ? 0 : rating)}
                      />
                      <label htmlFor={`rating-${rating}`} className="flex items-center text-sm text-gray-700">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        {rating}+ stars
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Features
                </label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="warranty" />
                    <label htmlFor="warranty" className="text-sm text-gray-700">
                      Warranty Included
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="delivery" />
                    <label htmlFor="delivery" className="text-sm text-gray-700">
                      Same Day Delivery
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="certified" />
                    <label htmlFor="certified" className="text-sm text-gray-700">
                      Certified Professionals
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="mb-4 md:mb-0">
                <div className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Showing {categoryBusinesses.length} results</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-1" />
                  Filters
                </Button>
                
                <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <Link to="/map">
                  <Button size="sm" className="bg-gradient-to-r from-brand-500 to-teal-500">
                    <MapIcon className="h-4 w-4 mr-1" />
                    View Map
                  </Button>
                </Link>
              </div>
            </div>

            <Tabs defaultValue="popular" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="rating">Highest Rated</TabsTrigger>
                <TabsTrigger value="newest">Newest</TabsTrigger>
                <TabsTrigger value="price-low">Price: Low to High</TabsTrigger>
                <TabsTrigger value="price-high">Price: High to Low</TabsTrigger>
              </TabsList>
              
              <TabsContent value="popular" className="mt-0">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                  {categoryBusinesses.map(business => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="rating" className="mt-0">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                  {[...categoryBusinesses]
                    .sort((a, b) => b.rating - a.rating)
                    .map(business => (
                      <BusinessCard key={business.id} business={business} />
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="newest" className="mt-0">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                  {categoryBusinesses.slice().reverse().map(business => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="price-low" className="mt-0">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                  {categoryBusinesses.map(business => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="price-high" className="mt-0">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                  {categoryBusinesses.map(business => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Compare Section */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Compare Selected Items</h3>
              <p className="text-gray-600 mb-4">Select up to 3 items to compare features and prices</p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Compare Now
              </Button>
            </div>

            {categoryBusinesses.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800">No businesses found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search terms</p>
                <Button 
                  variant="link"
                  className="mt-4 text-brand-500"
                  onClick={clearAllFilters}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubCategoryPage;
