
import React from 'react';
import Layout from '@/components/Layout';
import { useBusinessContext } from '@/context/BusinessContext';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const { categories } = useBusinessContext();

  return (
    <Layout>
      <div className="bg-gradient-to-r from-brand-100 to-teal-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Senior Care Types</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore senior care facilities by type to find the perfect care solution in your area.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 flex justify-between">
            <TabsTrigger value="all">All Care Types</TabsTrigger>
            <TabsTrigger value="popular">Most Searched</TabsTrigger>
            <TabsTrigger value="assisted">Assisted Living</TabsTrigger>
            <TabsTrigger value="memory">Memory Care</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {categories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {categories.filter(c => c.count > 10).map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assisted" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {categories.filter(c => c.name.includes('Assisted Living')).map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="memory" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {categories.filter(c => c.name.includes('Memory Care')).map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {["Memory Care", "Assisted Living", "Independent Living", "Skilled Nursing", "Home Health", "Hospice Care", "Adult Day Care"].map(term => (
              <Link to={`/map?query=${term}`} key={term}>
                <Button variant="outline" size="sm" className="rounded-full">
                  {term}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
