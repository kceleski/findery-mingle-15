import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Clock } from 'lucide-react';

interface CertificationBadgesProps {
  certifications: string[];
  licensing?: {
    licenseNumber: string;
    licenseExpiry: string;
    state: string;
    status: 'active' | 'expired' | 'suspended' | 'revoked';
  };
  maxDisplay?: number;
}

export const CertificationBadges: React.FC<CertificationBadgesProps> = ({ 
  certifications, 
  licensing,
  maxDisplay = 3 
}) => {
  const getLicenseStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'expired': return 'bg-red-100 text-red-800 border-red-200';
      case 'suspended': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'revoked': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLicenseIcon = (status: string) => {
    if (status === 'active') return <CheckCircle className="w-3 h-3" />;
    return <Clock className="w-3 h-3" />;
  };

  const displayCertifications = certifications.slice(0, maxDisplay);
  const remainingCount = certifications.length - maxDisplay;

  return (
    <div className="flex flex-wrap gap-1">
      {licensing && (
        <Badge 
          variant="outline" 
          className={`${getLicenseStatusColor(licensing.status)} flex items-center gap-1`}
        >
          {getLicenseIcon(licensing.status)}
          <span className="font-medium">Licensed</span>
        </Badge>
      )}
      
      {displayCertifications.map((cert, index) => (
        <Badge 
          key={index}
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1"
        >
          <Award className="w-3 h-3" />
          <span className="text-xs">{cert}</span>
        </Badge>
      ))}
      
      {remainingCount > 0 && (
        <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
          +{remainingCount} more
        </Badge>
      )}
    </div>
  );
};