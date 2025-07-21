import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useBusinessContext } from '@/context/BusinessContext';
import { useParams, Link } from 'react-router-dom';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { MapPin, Phone, Globe, Clock, Star, Facebook, Instagram, Twitter, Share2, ShoppingCart, Calendar, Heart, ZoomIn, Truck, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Map from '@/components/Map';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { businesses } = useBusinessContext();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [quantity, setQuantity] = useState(1);
  
  // Find the business based on the id parameter
  const business = businesses.find(b => b.id === id);

  // Mock product data
  const productImages = [
    business?.image,
    "https://images.unsplash.com/photo-1534650075489-3ba700e5ed8b?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60"
  ];

  const variants = [
    { id: 'default', name: 'Standard', price: 299 },
    { id: 'premium', name: 'Premium', price: 399 },
    { id: 'deluxe', name: 'Deluxe', price: 499 }
  ];

  const relatedProducts = businesses.slice(0, 3);

  if (!business) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Business Not Found</h1>
          <p className="text-gray-600">The business you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  const currentVariant = variants.find(v => v.id === selectedVariant) || variants[0];

  return (
    <Layout>
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
                <BreadcrumbLink asChild>
                  <Link to={`/category/${business.category.toLowerCase()}`}>
                    {business.category}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{business.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden group">
              <img 
                src={productImages[selectedImage] || business.image} 
                alt={business.name}
                className="w-full h-96 object-cover"
              />
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500">Featured</Badge>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? 'border-brand-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(business.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {business.rating} ({business.reviewCount} reviews)
                  </span>
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-900">${currentVariant.price}</span>
                <span className="text-lg text-gray-500 line-through">$399</span>
                <Badge variant="destructive">25% OFF</Badge>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">In Stock - Only 3 left!</span>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-blue-500" />
                  2-Year Warranty
                </div>
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-1 text-green-500" />
                  Free Shipping
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1 text-purple-500" />
                  Certified Quality
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Service Package:
              </label>
              <div className="flex space-x-2">
                {variants.map((variant) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant === variant.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    {variant.name} - ${variant.price}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Quantity:</label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${currentVariant.price * quantity}
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Calendar className="h-5 w-5 mr-2" />
                Book Consultation
              </Button>
            </div>

            {/* Quick Features */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3">What's Included:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Professional installation service</li>
                <li>• 24/7 customer support</li>
                <li>• Extended warranty coverage</li>
                <li>• Free maintenance for 6 months</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About This Service</h3>
                  <p className="text-gray-700 mb-4">{business.description}</p>
                  <p className="text-gray-700">
                    Our comprehensive service package includes everything you need to get started. 
                    With years of experience and certified professionals, we guarantee quality results 
                    that exceed your expectations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Service Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Duration</h4>
                      <p className="text-gray-600">2-4 hours</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Availability</h4>
                      <p className="text-gray-600">Mon-Sat, 9AM-6PM</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Coverage Area</h4>
                      <p className="text-gray-600">Within 25 miles</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Certification</h4>
                      <p className="text-gray-600">Licensed & Insured</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <span className="font-medium text-gray-700">JD</span>
                        </div>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Amazing service and great atmosphere. Would definitely recommend to anyone!
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <span className="font-medium text-gray-700">AS</span>
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
                      </div>
                      <p className="text-gray-700">
                        Great place, really enjoyed my visit. The staff was very friendly and helpful.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="booking" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Schedule Your Service</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500">
                        <option>9:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 3:00 PM</option>
                        <option>3:00 PM - 6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                  <Button className="mt-4 bg-gradient-to-r from-brand-500 to-teal-500">
                    Request Booking
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Frequently Bought Together */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Bought Together</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map(product => (
                  <div key={product.id} className="text-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <p className="text-brand-500 font-bold">$149</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Add Bundle to Cart - Save 15%
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Main content already handled above */}
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    {business.address}, {business.city}, {business.state} {business.zipCode}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{business.phone}</span>
                </div>
                {business.website && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                    <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline text-sm">
                      Visit Website
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="rounded-lg overflow-hidden h-48">
              <Map />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share This Page
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
