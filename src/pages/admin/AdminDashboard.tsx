
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, Building, DollarSign, TrendingUp, Settings, 
  BarChart, Star, MapPin, Phone, ToggleLeft
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeBusinesses, setActiveBusinesses] = useState(1247);
  const [totalRevenue, setTotalRevenue] = useState(89540);
  const [monthlyGrowth, setMonthlyGrowth] = useState(12.5);

  const stats = [
    { title: 'Active Businesses', value: activeBusinesses, icon: Building, trend: '+8%' },
    { title: 'Monthly Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, trend: '+15%' },
    { title: 'New Users', value: '2,847', icon: Users, trend: '+22%' },
    { title: 'Growth Rate', value: `${monthlyGrowth}%`, icon: TrendingUp, trend: '+5%' }
  ];

  const categoryToggles = [
    { name: 'Restaurants', enabled: true, count: 324 },
    { name: 'Beauty & Wellness', enabled: true, count: 189 },
    { name: 'Healthcare', enabled: true, count: 256 },
    { name: 'Fitness', enabled: true, count: 143 },
    { name: 'Retail', enabled: false, count: 278 },
    { name: 'Automotive', enabled: true, count: 95 }
  ];

  const recentBusinesses = [
    { name: 'Golden Spoon Restaurant', category: 'Restaurant', status: 'pending', revenue: 2450 },
    { name: 'Zen Spa & Wellness', category: 'Beauty', status: 'approved', revenue: 1890 },
    { name: 'TechFix Solutions', category: 'Services', status: 'approved', revenue: 3200 },
    { name: 'FreshMart Grocery', category: 'Retail', status: 'pending', revenue: 1650 }
  ];

  return (
    <Layout hideFooter={true}>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your business directory platform</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button size="sm" className="bg-brand-500 hover:bg-brand-600">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Security
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="businesses">Businesses</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
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
                    <CardTitle>Recent Business Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBusinesses.map((business, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{business.name}</p>
                            <p className="text-sm text-gray-600">{business.category}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant={business.status === 'approved' ? 'default' : 'secondary'}>
                              {business.status}
                            </Badge>
                            <span className="text-sm font-medium">${business.revenue}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Category Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categoryToggles.map((category, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${category.enabled ? 'bg-green-500' : 'bg-gray-300'}`} />
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{category.count} businesses</span>
                            <Button variant="ghost" size="sm">
                              <ToggleLeft className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="businesses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Management</CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm">Approve Pending</Button>
                    <Button variant="outline" size="sm">Export Data</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBusinesses.map((business, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Building className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">{business.name}</p>
                            <p className="text-sm text-gray-600">{business.category}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                              <span className="text-sm">4.8 (127 reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant={business.status === 'approved' ? 'default' : 'secondary'}>
                            {business.status}
                          </Badge>
                          <Button variant="outline" size="sm">View</Button>
                          <Button size="sm">Edit</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Category Management</CardTitle>
                  <p className="text-gray-600">Enable or disable business categories and manage their features</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryToggles.map((category, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium">{category.name}</h3>
                          <Badge variant={category.enabled ? 'default' : 'secondary'}>
                            {category.enabled ? 'Active' : 'Disabled'}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{category.count} businesses</p>
                        <div className="flex space-x-2">
                          <Button 
                            variant={category.enabled ? 'destructive' : 'default'} 
                            size="sm"
                          >
                            {category.enabled ? 'Disable' : 'Enable'}
                          </Button>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                      <div className="text-center">
                        <BarChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Revenue chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subscription Fees</span>
                        <span className="font-medium">$45,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Featured Listings</span>
                        <span className="font-medium">$28,900</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commission</span>
                        <span className="font-medium">$15,440</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$89,540</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
