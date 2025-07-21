
import React, { useState } from 'react';
import { Search, Sliders, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useBusinessContext } from '@/context/BusinessContext';

const SearchFilters: React.FC = () => {
  const { categories, searchFilters, updateSearchFilters } = useBusinessContext();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchFilters({ query: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSearchFilters({ category: e.target.value });
  };

  const handleRadiusChange = (value: number[]) => {
    updateSearchFilters({ radius: value[0] });
  };

  const clearFilters = () => {
    updateSearchFilters({
      query: '',
      category: '',
      radius: 5
    });
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="sticky top-16 z-20 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
              placeholder="Search businesses, categories, or keywords..."
              value={searchFilters.query}
              onChange={handleQueryChange}
            />
          </div>
          <Button
            onClick={toggleFilters}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Sliders className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </Button>
        </div>

        {isFilterOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 pb-2 border-t pt-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
                value={searchFilters.category}
                onChange={handleCategoryChange}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Distance Radius: {searchFilters.radius} km
              </label>
              <Slider
                defaultValue={[searchFilters.radius]}
                max={50}
                min={1}
                step={1}
                onValueChange={handleRadiusChange}
                className="mt-3"
              />
            </div>

            <div className="flex items-end">
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="mr-2"
              >
                <X className="w-4 h-4 mr-1" />
                Clear Filters
              </Button>
              <Button
                onClick={toggleFilters}
                size="sm"
                className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;
