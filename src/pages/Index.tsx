
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import Map from '@/components/Map';
import BusinessCard from '@/components/BusinessCard';
import CategoryCard from '@/components/CategoryCard';
import CommercialFeatures from '@/components/CommercialFeatures';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { useBusinessContext } from '@/context/BusinessContext';
import { 
  MapPin, Star, Phone, Clock, Shield, Award, 
  Users, MessageSquare, ChevronRight, Building,
  CheckCircle, ArrowRight, BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { filteredBusinesses, categories, getUserLocation } = useBusinessContext();

  useEffect(() => {
    getUserLocation().catch(error => console.error('Could not get location:', error));
  }, [getUserLocation]);

  const featuredBusinesses = filteredBusinesses.slice(0, 3);
  const topCategories = categories.slice(0, 4);

  const services = [
    {
      icon: <MapPin className="h-8 w-8 text-brand-500" />,
      title: "Discover Local Businesses",
      description: "Find trusted businesses in your area with detailed information, ratings, and reviews.",
      link: "/map"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-500" />,
      title: "Verified Listings",
      description: "All businesses are verified to ensure you get accurate and trustworthy information.",
      link: "/categories"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-brand-500" />,
      title: "Connect Directly",
      description: "Contact businesses directly, book appointments, and get quotes in just a few clicks.",
      link: "/about"
    },
    {
      icon: <Building className="h-8 w-8 text-brand-500" />,
      title: "List Your Business",
      description: "Join our platform to reach more customers and grow your business presence online.",
      link: "/contact"
    }
  ];

  const businessBenefits = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Reach More Customers",
      description: "Connect with potential customers actively searching for your products or services."
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Increase Visibility",
      description: "Stand out from competitors with a professionally managed business profile."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Build Trust",
      description: "Showcase your reviews, ratings and verified status to build customer confidence."
    }
  ];

  return (
    <Layout showHero={true}>
      <HeroSection />

      {/* Business Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Business Directory Solution</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform connects users with the best local businesses, while helping business owners reach more customers and grow their online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-brand-500 hover:text-brand-600 font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Featured Businesses</h2>
              <p className="text-gray-600">Discover top-rated businesses in your area</p>
            </div>
            <Link to="/map">
              <Button variant="outline" className="text-brand-600 border-brand-200 hover:bg-brand-50">
                View All <MapPin className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Features Section */}
      <CommercialFeatures />

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Popular Categories</h2>
              <p className="text-gray-600">Explore businesses by category</p>
            </div>
            <Link to="/categories">
              <Button variant="outline" className="text-brand-600 border-brand-200 hover:bg-brand-50">
                All Categories
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800">Explore the Map</h2>
              <p className="text-gray-600">Find businesses near you with our interactive map</p>
            </div>
            <Link to="/map">
              <Button className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600">
                Open Full Map
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
            <Map />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-brand-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Don't just take our word for it. Here's what our users have to say about their experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-brand-400">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&q=80" 
                  alt="Sarah M." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex text-yellow-400 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="italic mb-4">"Found the best coffee shop near my office that I never knew existed. Now it's my go-to spot for meetings!"</p>
              <p className="font-medium">- Sarah M.</p>
              <p className="text-sm text-gray-300">Marketing Director</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-brand-400">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&q=80" 
                  alt="David L." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex text-yellow-400 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="italic mb-4">"The map feature helped me discover local businesses in my neighborhood that I want to support. Great app!"</p>
              <p className="font-medium">- David L.</p>
              <p className="text-sm text-gray-300">Software Engineer</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-brand-400">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&q=80" 
                  alt="Jennifer R." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex text-yellow-400 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="italic mb-4">"As a small business owner, this platform has helped new customers find my shop. The social integration is amazing!"</p>
              <p className="font-medium">- Jennifer R.</p>
              <p className="text-sm text-gray-300">Boutique Owner</p>
            </div>
          </div>
          
          <div className="mt-10">
            <Button 
              variant="outline" 
              className="border-white/30 hover:bg-white/10 text-white"
              onClick={() => window.location.href = '/about#testimonials'}
            >
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Find the Perfect Business?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start exploring our comprehensive business directory today and discover the best services in your area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600"
              size="lg"
              onClick={() => window.location.href = '/map'}
            >
              Explore Map
            </Button>
            
            <Button 
              variant="outline"
              className="text-brand-600 border-brand-200"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
