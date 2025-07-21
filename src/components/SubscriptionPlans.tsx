
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      icon: Star,
      color: 'bg-gray-500',
      features: [
        'Basic business listing',
        'Up to 5 photos',
        'Contact information display',
        'Business hours',
        'Basic analytics',
        'Email support'
      ],
      limitations: [
        'No featured placement',
        'Limited to 3 services',
        'No booking integration'
      ]
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      icon: Zap,
      color: 'bg-brand-500',
      popular: true,
      features: [
        'Enhanced business listing',
        'Unlimited photos & gallery',
        'Priority search placement',
        'Booking system integration',
        'Review management tools',
        'Advanced analytics',
        'Social media integration',
        'Phone & email support',
        'Custom service menu',
        'Promotional badges'
      ],
      limitations: []
    },
    {
      name: 'Enterprise',
      price: 149,
      period: 'month',
      icon: Crown,
      color: 'bg-purple-500',
      features: [
        'Premium business listing',
        'Featured homepage placement',
        'Multiple location support',
        'Advanced booking system',
        'Custom branding options',
        'Dedicated account manager',
        'Priority customer support',
        'Advanced reporting',
        'API access',
        'White-label options',
        'Commission-free bookings',
        'Marketing automation tools'
      ],
      limitations: []
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Business Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan to grow your business and reach more customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'ring-2 ring-brand-500 shadow-lg scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-brand-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-brand-500 hover:bg-brand-600' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  No setup fees • Cancel anytime
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Button variant="outline" size="lg">
            Contact Sales Team
          </Button>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="font-semibold mb-2">Proven Results</h4>
              <p className="text-gray-600 text-sm">
                Our platform has helped over 10,000 businesses grow their customer base by an average of 40%
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="font-semibold mb-2">Easy Setup</h4>
              <p className="text-gray-600 text-sm">
                Get your business online in minutes with our streamlined onboarding process
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="font-semibold mb-2">Premium Support</h4>
              <p className="text-gray-600 text-sm">
                Get dedicated support from our team of business growth specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
