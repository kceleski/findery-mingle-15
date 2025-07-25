
export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website?: string;
  image: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  hours?: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  // Senior Care Specific Fields
  careType?: 'assisted-living' | 'memory-care' | 'skilled-nursing' | 'home-health' | 'independent-living' | 'hospice';
  licensing?: {
    licenseNumber: string;
    licenseExpiry: string;
    state: string;
    status: 'active' | 'expired' | 'suspended' | 'revoked';
  };
  qualityScore?: {
    overall: number;
    careQuality: number;
    staff: number;
    safety: number;
    facilities: number;
    value: number;
  };
  certifications?: string[];
  specialties?: string[];
  capacity?: {
    total: number;
    available: number;
  };
  pricing?: {
    baseRate: number;
    additionalServices: { [key: string]: number };
    acceptedInsurance: string[];
  };
  staffInfo?: {
    nurseToResidentRatio: string;
    staffTurnoverRate: number;
    certifiedStaff: number;
  };
  inspections?: {
    lastInspectionDate: string;
    violations: number;
    correctedViolations: number;
    nextInspectionDue: string;
  };
  alerts?: {
    type: 'safety' | 'license' | 'compliance' | 'financial' | 'staffing';
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    date: string;
  }[];
  amenities?: string[];
  languages?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface SearchFilters {
  query: string;
  category: string;
  radius: number;
  location?: {
    lat: number;
    lng: number;
  };
  // Senior Care Specific Filters
  careType?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  qualityScore?: number;
  acceptsInsurance?: string[];
  hasAvailability?: boolean;
  certifications?: string[];
  languages?: string[];
}
