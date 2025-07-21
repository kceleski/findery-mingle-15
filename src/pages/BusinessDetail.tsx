import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useBusinessContext } from '@/context/BusinessContext';
import { 
  MapPin, Phone, Globe, Clock, Star, Facebook, 
  Instagram, Twitter, Share2, Mail, Calendar,
  ChevronRight, Users, Camera, FileText, MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Map from '@/components/Map';
import { Separator } from '@/components/ui/separator';

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { businesses } = useBusinessContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Find the business based on the id parameter
  const business = businesses.find(b => b.id === id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your message has been sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleBookAppointment = () => {
    alert('Booking feature would be implemented here');
  };

  const handleShareBusiness = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => console.error('Failed to copy link', err));
  };

  if (!business) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Business Not Found</h1>
          <p className="text-gray-600 mb-6">The business you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-600">Home</Link>
            <ChevronRight className="inline h-3 w-3 mx-1" />
            <Link to="/categories" className="hover:text-brand-600">Categories</Link>
            <ChevronRight className="inline h-3 w-3 mx-1" />
            <Link to={`/category/${business.category.toLowerCase()}`} className="hover:text-brand-600">
              {business.category}
            </Link>
            <ChevronRight className="inline h-3 w-3 mx-1" />
            <span className="text-gray-700">{business.name}</span>
          </div>
        </div>

        {/* Header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={business.image} 
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold">{business.name}</h1>
                <p className="text-lg opacity-90">{business.category}</p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(business.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">
                    {business.rating} ({business.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <Button 
                  onClick={() => window.location.href = `tel:${business.phone}`}
                  className="bg-brand-500 hover:bg-brand-600"
                >
                  <Phone className="h-4 w-4 mr-2" /> Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 hover:bg-white/20"
                  onClick={handleBookAppointment}
                >
                  <Calendar className="h-4 w-4 mr-2" /> Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="w-full border-b mb-6 bg-transparent justify-start">
                  <TabsTrigger value="about" className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none">About</TabsTrigger>
                  <TabsTrigger value="services" className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none">Services</TabsTrigger>
                  <TabsTrigger value="photos" className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none">Photos</TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="py-4">
                  <h2 className="text-xl font-semibold mb-4">About {business.name}</h2>
                  <p className="text-gray-700 mb-6">
                    {business.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium mb-3 text-lg">Business Hours</h3>
                    {business.hours ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {Object.entries(business.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between text-sm py-1 border-b border-gray-100">
                            <span className="font-medium">{day}</span>
                            <span>{hours.open} - {hours.close}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">Hours not available</p>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="services" className="py-4">
                  <h2 className="text-xl font-semibold mb-4">Services & Offerings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-md font-medium mb-2">Service 1</h3>
                      <p className="text-sm text-gray-600 mb-2">Description of the service with details about what is included.</p>
                      <p className="text-md font-semibold">$99</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-md font-medium mb-2">Service 2</h3>
                      <p className="text-sm text-gray-600 mb-2">Description of the service with details about what is included.</p>
                      <p className="text-md font-semibold">$149</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-md font-medium mb-2">Service 3</h3>
                      <p className="text-sm text-gray-600 mb-2">Description of the service with details about what is included.</p>
                      <p className="text-md font-semibold">$199</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-md font-medium mb-2">Service 4</h3>
                      <p className="text-sm text-gray-600 mb-2">Description of the service with details about what is included.</p>
                      <p className="text-md font-semibold">$249</p>
                    </div>
                  </div>
                  <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                    <h3 className="text-lg font-medium mb-2 text-brand-800">Special Offers</h3>
                    <p className="text-gray-700 mb-4">Get 15% off your first service when you book online!</p>
                    <Button 
                      className="bg-brand-500 hover:bg-brand-600"
                      onClick={handleBookAppointment}
                    >
                      Book Now & Save
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="photos" className="py-4">
                  <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img src={business.image} alt={business.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1534650075489-3ba700e5ed8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="Interior" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="Food" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="Dining" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="Restaurant" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 relative group">
                      <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="More" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-white text-center">
                          <p className="font-medium">View All</p>
                          <Camera className="h-6 w-6 mx-auto mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="py-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Customer Reviews</h2>
                    <Button variant="outline" className="text-brand-600 border-brand-200">
                      <FileText className="h-4 w-4 mr-2" /> Write a Review
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-2xl font-bold">{business.rating}</span>
                        <span className="text-gray-500">/5</span>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(business.rating) ? 'fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Based on {business.reviewCount} reviews
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3">
                          <span className="font-medium text-brand-700">JD</span>
                        </div>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="ml-auto text-sm text-gray-500">2 days ago</div>
                      </div>
                      <p className="text-gray-700 mb-2">
                        Amazing service and great atmosphere. Would definitely recommend to anyone!
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <button className="flex items-center mr-4 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          Helpful (12)
                        </button>
                        <button className="flex items-center hover:text-gray-700">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Reply
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3">
                          <span className="font-medium text-brand-700">AS</span>
                        </div>
                        <div>
                          <p className="font-medium">Amy Smith</p>
                          <div className="flex text-yellow-400">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-current" />
                            ))}
                            <Star className="h-3 w-3 text-gray-300" />
                          </div>
                        </div>
                        <div className="ml-auto text-sm text-gray-500">1 week ago</div>
                      </div>
                      <p className="text-gray-700 mb-2">
                        Great place, really enjoyed my visit. The staff was very friendly and helpful.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <button className="flex items-center mr-4 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          Helpful (8)
                        </button>
                        <button className="flex items-center hover:text-gray-700">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Reply
                        </button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full py-2">Load More Reviews</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="font-medium text-lg mb-4">Contact Business</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                        required
                      ></textarea>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-500 hover:bg-brand-600"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium mb-3 text-lg">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      {business.address}, {business.city}, {business.state} {business.zipCode}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                    <a href={`tel:${business.phone}`} className="text-gray-700 hover:text-brand-600">{business.phone}</a>
                  </div>
                  {business.website && (
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                      <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">
                        {business.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-48 border border-gray-200">
                <Map 
                  center={[business.location.lat, business.location.lng]} 
                  showAllBusinesses={false} 
                  zoom={15}
                />
              </div>
              
              {/* Social Media */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium mb-3 text-lg">Follow {business.name}</h3>
                <div className="flex space-x-2">
                  {business.socialLinks?.facebook && (
                    <a href={business.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                      <Facebook className="h-5 w-5" />
                    </a>
                  )}
                  {business.socialLinks?.instagram && (
                    <a href={business.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {business.socialLinks?.twitter && (
                    <a href={business.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Actions */}
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center"
                onClick={handleShareBusiness}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              
              {/* Trust Badge Section */}
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">Trusted Business</h3>
                <div className="flex items-center justify-center space-x-4 mb-3">
                  <div className="flex flex-col items-center">
                    <svg className="h-6 w-6 text-green-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-500">Verified</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="h-6 w-6 text-blue-500 mb-1" />
                    <span className="text-xs text-gray-500">Reviewed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star className="h-6 w-6 text-yellow-500 mb-1" fill="currentColor" />
                    <span className="text-xs text-gray-500">Top Rated</span>
                  </div>
                </div>
                <Separator className="my-3" />
                <p className="text-xs text-gray-500 text-center">
                  This business has been verified by our team and has received positive reviews from the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessDetail;
