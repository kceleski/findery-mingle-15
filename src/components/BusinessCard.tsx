import React from 'react';
import { MapPin, Star, ExternalLink, Phone, Users, Calendar, AlertTriangle } from 'lucide-react';
import { Business } from '@/types';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useBusinessContext } from '@/context/BusinessContext';
import { QualityScore, AlertBadge } from '@/components/QualityScore';
import { CertificationBadges } from '@/components/CertificationBadges';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const { setSelectedBusiness } = useBusinessContext();

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <img 
          src={business.image} 
          alt={business.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium shadow-sm flex items-center">
          <Star className="w-3.5 h-3.5 text-yellow-400 mr-1" fill="currentColor" />
          <span>{business.rating}</span>
          <span className="text-gray-400 ml-1">({business.reviewCount})</span>
        </div>
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium shadow-sm text-gray-600">
          {business.category}
        </div>
        {business.qualityScore && (
          <div className="absolute bottom-3 right-3">
            <QualityScore score={business.qualityScore.overall} size="sm" showLabel={false} />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 flex-1">{business.name}</h3>
          {business.alerts && business.alerts.length > 0 && (
            <AlertTriangle className="w-5 h-5 text-red-500 ml-2" />
          )}
        </div>

        {business.alerts && business.alerts.length > 0 && (
          <div className="mb-3">
            <AlertBadge alerts={business.alerts} />
          </div>
        )}

        {business.certifications && business.certifications.length > 0 && (
          <div className="mb-3">
            <CertificationBadges 
              certifications={business.certifications}
              licensing={business.licensing}
              maxDisplay={2}
            />
          </div>
        )}

        {business.careType && (
          <div className="flex items-center gap-4 mb-3 text-sm">
            {business.capacity && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{business.capacity.available} available</span>
              </div>
            )}
            {business.pricing && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">From ${business.pricing.baseRate.toLocaleString()}/mo</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-start mt-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <span className="ml-2 text-sm text-gray-600">{business.address}, {business.city}, {business.state}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{business.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center justify-center gap-1 text-gray-600"
            asChild
          >
            <a href={`tel:${business.phone}`}>
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </Button>
          
          <Button
            size="sm"
            className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white"
            onClick={() => setSelectedBusiness(business)}
            asChild
          >
            <Link to={`/business-detail/${business.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;