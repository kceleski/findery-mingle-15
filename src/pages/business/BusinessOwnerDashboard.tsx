
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Store, Eye, Star, Calendar, DollarSign, 
  MessageSquare, Camera, Settings, TrendingUp,
  Users, Clock, Phone, MapPin
} from 'lucide-react';

const BusinessOwnerDashboard = () => {
  const [profileViews, setProfileViews] = useState(1247);
  const [totalReviews, setTotalReviews] = useState(89);
  const [monthlyBookings, setMonthlyBookings] = useState(156);

  const facilityStats = [
    { title: 'Profile Views', value: profileViews, icon: Eye, trend: '+12%' },
    { title: 'Family Reviews', value: totalReviews, icon: Star, trend: '+8%' },
    { title: 'Care Consultations', value: monthlyBookings, icon: Calendar, trend: '+25%' },
    { title: 'Quality Score', value: '4.6/5', icon: TrendingUp, trend: '+0.2' }
  ];

  const recentReviews = [
    { customer: 'Sarah Johnson', rating: 5, comment: 'Excellent service! Highly recommend.', date: '2 days ago' },
    { customer: 'Mike Chen', rating: 4, comment: 'Great experience, will come back.', date: '5 days ago' },
    { customer: 'Lisa Brown', rating: 5, comment: 'Professional and friendly staff.', date: '1 week ago' }
  ];

  const upcomingConsultations = [
    { family: 'Johnson Family', service: 'Facility Tour', time: '10:00 AM', date: 'Today' },
    { family: 'Wilson Family', service: 'Care Assessment', time: '2:30 PM', date: 'Today' },
    { family: 'Smith Family', service: 'Move-in Consultation', time: '11:00 AM', date: 'Tomorrow' }
  ];

  return (
    <Layout hideFooter={true}>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Care Facility Dashboard</h1>
                <p className="text-gray-600">Manage your facility profile and resident services</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Add Photos
                </Button>
                <Button size="sm" className="bg-brand-500 hover:bg-brand-600">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Consultations</TabsTrigger>
              <TabsTrigger value="reviews">Family Reviews</TabsTrigger>
              <TabsTrigger value="profile">Facility Profile</TabsTrigger>
              <TabsTrigger value="services">Care Services</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilityStats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className="text-sm text-green-600 font-medium">{stat.trend} from last month</p>
                        </div>
                        <div className="p-3 bg-brand-100 rounded-full">
                          <stat.icon className="h-6 w-6 text-brand-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentReviews.map((review, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">{review.customer}</p>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Reviews
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Consultations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingConsultations.map((consultation, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{consultation.family}</p>
                            <p className="text-sm text-gray-600">{consultation.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{consultation.time}</p>
                            <p className="text-sm text-gray-600">{consultation.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Manage Schedule
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Consultation Management</CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm">Add Availability</Button>
                    <Button variant="outline" size="sm">Export Schedule</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingConsultations.map((consultation, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">{consultation.family}</p>
                            <p className="text-sm text-gray-600">{consultation.service}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{consultation.time} - {consultation.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge>Confirmed</Badge>
                          <Button variant="outline" size="sm">Contact</Button>
                          <Button size="sm">Reschedule</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Facility Profile</CardTitle>
                  <p className="text-gray-600">Update your facility information and care services</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Basic Information</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Facility Name</label>
                          <input type="text" className="w-full p-2 border rounded-md" defaultValue="Sunrise Senior Living" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Care Type</label>
                          <select className="w-full p-2 border rounded-md">
                            <option>Assisted Living</option>
                            <option>Memory Care</option>
                            <option>Skilled Nursing</option>
                            <option>Independent Living</option>
                            <option>Home Health</option>
                            <option>Hospice Care</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input type="tel" className="w-full p-2 border rounded-md" defaultValue="(555) 123-4567" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Address & Location</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                          <input type="text" className="w-full p-2 border rounded-md" defaultValue="123 Main Street" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input type="text" className="w-full p-2 border rounded-md" defaultValue="New York" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                            <input type="text" className="w-full p-2 border rounded-md" defaultValue="10001" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-brand-500 hover:bg-brand-600">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessOwnerDashboard;
