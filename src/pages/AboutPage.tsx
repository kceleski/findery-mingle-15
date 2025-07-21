
import React from 'react';
import Layout from '@/components/Layout';
import { Check, Star, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout fullWidth>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-900 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Findery</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Connecting businesses and customers through innovative location-based technology
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2022, Findery was born from a simple idea: make it easier for people to discover and connect with local businesses in their area. Our founder struggled to find reliable information about businesses near them and wanted to create a solution that would bridge this gap.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small project has grown into a comprehensive platform that helps thousands of users discover businesses and helps businesses reach new customers every day.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be the go-to resource for people looking to explore their local communities and for businesses wanting to increase their visibility.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To connect people with the best local businesses and help businesses thrive by increasing their online visibility and customer engagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To create a world where every local business has the opportunity to thrive and where consumers can easily discover the perfect services for their needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
              <p className="text-gray-600">
                We believe in transparency, community support, innovation, and creating value for both businesses and consumers in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Findery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Accurate Information</h3>
                <p className="text-gray-600">
                  We verify business listings to ensure you always have access to accurate, up-to-date information.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">User-Friendly Platform</h3>
                <p className="text-gray-600">
                  Our intuitive interface makes it easy to find what you're looking for, whether you're a consumer or a business owner.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Social Integration</h3>
                <p className="text-gray-600">
                  Connect with businesses through their social media channels and see real-time updates directly on our platform.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Powerful Search</h3>
                <p className="text-gray-600">
                  Our advanced search filters help you find exactly what you're looking for based on location, category, ratings, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' },
              { name: 'David Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
              { name: 'Michelle Rodriguez', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
              { name: 'James Wilson', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-brand-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're looking to discover new businesses or want to list your business on our platform, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/map">
              <Button className="bg-white text-brand-600 hover:bg-gray-100 min-w-36">
                Explore Map
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-36">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
