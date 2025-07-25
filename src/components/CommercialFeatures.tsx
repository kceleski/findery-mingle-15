
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
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality scoring and licensing verification for every facility',
      benefits: ['Multi-dimensional quality scores', 'License verification', 'Inspection tracking']
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Connect families with the right care through expert guidance',
      benefits: ['Care assessment tools', 'Family communication portal', 'Personalized matching']
    },
    {
      icon: Calendar,
      title: 'Smart Care Coordination',
      description: 'Streamline care planning and family consultations',
      benefits: ['Virtual facility tours', 'Care plan comparisons', 'Progress tracking']
    },
    {
      icon: BarChart,
      title: 'Transparency Analytics',
      description: 'Data-driven insights for informed care decisions',
      benefits: ['Quality metrics', 'Pricing transparency', 'Outcome tracking']
    },
    {
      icon: Target,
      title: 'Regulatory Compliance',
      description: 'Real-time monitoring of licensing and safety standards',
      benefits: ['Compliance alerts', 'Inspection schedules', 'Violation tracking']
    },
    {
      icon: Award,
      title: 'Certification Management',
      description: 'Verify credentials and track facility accreditations',
      benefits: ['License verification', 'Certification tracking', 'Staff credentials']
    }
  ];

  const careTypeFeatures = [
    {
      careType: 'Assisted Living',
      icon: '🏠',
      features: ['Daily living assistance tracking', 'Medication management', 'Activity programs', 'Family communication']
    },
    {
      careType: 'Memory Care',
      icon: '🧠',
      features: ['Specialized dementia programs', 'Secure environments', 'Cognitive assessments', 'Family support groups']
    },
    {
      careType: 'Skilled Nursing',
      icon: '🏥',
      features: ['24/7 medical monitoring', 'Rehabilitation services', 'Nurse-to-patient ratios', 'Specialty care units']
    },
    {
      careType: 'Independent Living',
      icon: '🌟',
      features: ['Maintenance-free living', 'Social activities', 'Emergency response', 'Transportation services']
    },
    {
      careType: 'Home Health',
      icon: '🏡',
      features: ['In-home medical care', 'Personal care assistance', 'Therapy services', 'Family coordination']
    },
    {
      careType: 'Hospice Care',
      icon: '💙',
      features: ['Comfort-focused care', 'Pain management', 'Emotional support', 'Family counseling']
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Care Management Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything families need to find trusted senior care with transparency, quality assurance, and peace of mind
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
              Care Type Specific Solutions
            </h3>
            <p className="text-gray-600">
              Specialized features for different types of senior care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careTypeFeatures.map((careType, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{careType.icon}</span>
                  <h4 className="text-lg font-semibold">{careType.careType}</h4>
                </div>
                <ul className="space-y-2">
                  {careType.features.map((feature, featureIndex) => (
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
                Proven Family Satisfaction
              </h3>
              <p className="text-brand-100 mb-6">
                Our platform delivers peace of mind for families and quality care outcomes
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">96%</div>
                  <div className="text-sm text-brand-200">Family satisfaction rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">78%</div>
                  <div className="text-sm text-brand-200">Faster care placement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">4.8</div>
                  <div className="text-sm text-brand-200">Average facility quality score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">50K+</div>
                  <div className="text-sm text-brand-200">Families served annually</div>
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
                  Winner of "Best Senior Care Platform 2024" by Healthcare Excellence Awards
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="font-medium">Global Reach</span>
                </div>
                <p className="text-sm text-brand-100">
                  Serving over 10,000 care facilities across 48+ states
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="font-medium">Customer Success</span>
                </div>
                <p className="text-sm text-brand-100">
                  4.9/5 average rating from families and care providers
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
