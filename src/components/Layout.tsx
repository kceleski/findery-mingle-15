
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  hideFooter?: boolean;
  showHero?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  fullWidth = false, 
  className = '',
  hideFooter = false,
  showHero = false
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className={`flex-grow ${className}`}>
        {fullWidth ? (
          children
        ) : (
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
        )}
      </main>
      
      {/* Enhanced CTA Section for Business Owners */}
      {!showHero && (
        <section className="bg-gradient-to-r from-brand-900 to-teal-900 text-white py-12 px-4 shadow-inner">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Grow Your Business?</h2>
              <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto">
                Join thousands of businesses that are thriving on our platform. Get more visibility, attract customers, and boost your revenue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">40% More Customers</h3>
                <p className="text-sm opacity-80">Average increase in customer base</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">3x Visibility</h3>
                <p className="text-sm opacity-80">Boost in online presence</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">ROI Guaranteed</h3>
                <p className="text-sm opacity-80">Measurable return on investment</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-brand-900 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                List Your Business Free
              </Button>
              <Button 
                variant="outline" 
                className="border-white/40 text-white hover:bg-white/10 px-8 py-3 text-lg"
                size="lg"
                onClick={() => navigate('/business-dashboard')}
              >
                Business Dashboard
              </Button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm opacity-75">
                ✓ No setup fees ✓ Cancel anytime ✓ 24/7 support
              </p>
            </div>
          </div>
        </section>
      )}
      
      {/* Floating Call Button (Mobile Only) */}
      <a 
        href="tel:+11234567890" 
        className="fixed bottom-6 right-6 md:hidden z-40 bg-brand-500 text-white p-4 rounded-full shadow-lg hover:bg-brand-600 transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
      
      {/* Enhanced Live Chat Button */}
      <button 
        className="fixed bottom-6 left-6 z-40 bg-white border border-gray-200 text-brand-800 px-4 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:scale-105 flex items-center"
        onClick={() => alert('Live chat functionality - connect with our business success team!')}
      >
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="hidden sm:inline font-medium">Get Help</span>
      </button>
      
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
