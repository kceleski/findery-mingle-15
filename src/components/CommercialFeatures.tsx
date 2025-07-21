
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, TrendingUp, Users, Calendar, 
  BarChart, MessageSquare, Star, Shield,
  Target, Zap, Award, Globe
} from 'lucide-react';

const CommercialFeatures = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Revenue Optimization',
      description: 'Maximize your earnings with our advanced pricing and promotion tools',
      benefits: ['Dynamic pricing suggestions', 'Seasonal promotions', 'Revenue analytics']
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Build lasting relationships with comprehensive customer insights',
      benefits: ['Customer profiles', 'Purchase history', 'Loyalty programs']
    },
    {
      icon: Calendar,
      title: 'Smart Booking System',
      description: 'Streamline appointments with intelligent scheduling',
      benefits: ['Automated reminders', 'No-show protection', 'Multi-service bookings']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with detailed business insights',
      benefits: ['Performance metrics', 'Customer behavior', 'Growth forecasting']
    },
    {
      icon: Target,
      title: 'Marketing Automation',
      description: 'Reach the right customers at the right time',
      benefits: ['Email campaigns', 'Social media integration', 'Lead nurturing']
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Build credibility with verified reviews and secure transactions',
      benefits: ['Review verification', 'Secure payments', 'Fraud protection']
    }
  ];

  const industryFeatures = [
    {
      industry: 'Restaurants',
      icon: '🍽️',
      features: ['Online menu management', 'Table reservations', 'Food delivery integration', 'Special dietary filters']
    },
    {
      industry: 'Beauty & Wellness',
      icon: '💅',
      features: ['Service duration tracking', 'Staff scheduling', 'Product recommendations', 'Before/after galleries']
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      features: ['Practitioner credentials', 'Insurance verification', 'Appointment types', 'Medical forms']
    },
    {
      industry: 'Fitness',
      icon: '💪',
      features: ['Class schedules', 'Trainer profiles', 'Equipment tracking', 'Progress monitoring']
    },
    {
      industry: 'Retail',
      icon: '🛍️',
      features: ['Inventory management', 'Product catalogs', 'Click & collect', 'Size guides']
    },
    {
      industry: 'Automotive',
      icon: '🚗',
      features: ['Service tracking', 'Parts ordering', 'Warranty management', 'Vehicle history']
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Business Growth
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage, grow, and optimize your business in one comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-brand-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry-Specific Features */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h3>
            <p className="text-gray-600">
              Tailored features for different business categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryFeatures.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{industry.icon}</span>
                  <h4 className="text-lg font-semibold">{industry.industry}</h4>
                </div>
                <ul className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-brand-900 to-teal-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Proven Return on Investment
              </h3>
              <p className="text-brand-100 mb-6">
                Our platform delivers measurable results for businesses of all sizes
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">40%</div>
                  <div className="text-sm text-brand-200">Average increase in customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">65%</div>
                  <div className="text-sm text-brand-200">Boost in online bookings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">3x</div>
                  <div className="text-sm text-brand-200">More online visibility</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">92%</div>
                  <div className="text-sm text-brand-200">Customer satisfaction rate</div>
                </div>
              </div>
              
              <Button className="bg-white text-brand-900 hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="font-medium">Industry Recognition</span>
                </div>
                <p className="text-sm text-brand-100">
                  Winner of "Best Business Platform 2024" by Business Tech Awards
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="font-medium">Global Reach</span>
                </div>
                <p className="text-sm text-brand-100">
                  Serving over 50,000 businesses across 25+ countries
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="font-medium">Customer Success</span>
                </div>
                <p className="text-sm text-brand-100">
                  4.9/5 average rating from business owners worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialFeatures;
