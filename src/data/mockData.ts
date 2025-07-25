
import { Business, Category } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Assisted Living', icon: 'home', count: 45 },
  { id: '2', name: 'Memory Care', icon: 'brain', count: 32 },
  { id: '3', name: 'Skilled Nursing', icon: 'heart-pulse', count: 28 },
  { id: '4', name: 'Home Health Care', icon: 'house-plus', count: 18 },
  { id: '5', name: 'Independent Living', icon: 'user-check', count: 22 },
  { id: '6', name: 'Hospice Care', icon: 'heart-handshake', count: 15 },
  { id: '7', name: 'Adult Day Care', icon: 'users', count: 10 },
  { id: '8', name: 'Respite Care', icon: 'clock', count: 12 },
];

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Golden Years Assisted Living',
    category: 'Assisted Living',
    rating: 4.7,
    reviewCount: 124,
    address: '123 Oak Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    phone: '(415) 555-1234',
    website: 'https://goldenyears.example.com',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60',
    description: 'Premier assisted living facility with 24/7 nursing care, beautiful gardens, and personalized care plans.',
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    careType: 'assisted-living',
    licensing: {
      licenseNumber: 'AL-SF-2023-001',
      licenseExpiry: '2025-12-31',
      state: 'CA',
      status: 'active'
    },
    qualityScore: {
      overall: 4.7,
      careQuality: 4.8,
      staff: 4.6,
      safety: 4.9,
      facilities: 4.5,
      value: 4.4
    },
    certifications: ['Joint Commission', 'CARF', 'Medicare Certified'],
    specialties: ['Dementia Care', 'Physical Therapy', 'Medication Management'],
    capacity: {
      total: 120,
      available: 8
    },
    pricing: {
      baseRate: 5500,
      additionalServices: {
        'Medication Management': 150,
        'Physical Therapy': 200,
        'Specialized Diet': 100
      },
      acceptedInsurance: ['Medicare', 'Medicaid', 'Private Pay']
    },
    staffInfo: {
      nurseToResidentRatio: '1:15',
      staffTurnoverRate: 12,
      certifiedStaff: 85
    },
    inspections: {
      lastInspectionDate: '2024-09-15',
      violations: 2,
      correctedViolations: 2,
      nextInspectionDue: '2025-09-15'
    },
    alerts: [],
    amenities: ['Garden', 'Dining Room', 'Activity Room', 'Chapel', 'Beauty Salon'],
    languages: ['English', 'Spanish', 'Mandarin'],
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    },
    hours: {
      'Monday': { open: '24/7', close: '24/7' },
      'Tuesday': { open: '24/7', close: '24/7' },
      'Wednesday': { open: '24/7', close: '24/7' },
      'Thursday': { open: '24/7', close: '24/7' },
      'Friday': { open: '24/7', close: '24/7' },
      'Saturday': { open: '24/7', close: '24/7' },
      'Sunday': { open: '24/7', close: '24/7' }
    }
  },
  {
    id: '2',
    name: 'Sunset Memory Care',
    category: 'Memory Care',
    rating: 4.2,
    reviewCount: 87,
    address: '456 Maple Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    phone: '(415) 555-5678',
    website: 'https://sunsetmemory.example.com',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&auto=format&fit=crop&q=60',
    description: 'Specialized memory care facility with secure environment and innovative dementia programs.',
    location: {
      lat: 37.7922,
      lng: -122.4070
    },
    careType: 'memory-care',
    licensing: {
      licenseNumber: 'MC-SF-2023-002',
      licenseExpiry: '2025-11-30',
      state: 'CA',
      status: 'active'
    },
    qualityScore: {
      overall: 4.3,
      careQuality: 4.5,
      staff: 4.2,
      safety: 4.4,
      facilities: 4.1,
      value: 4.0
    },
    certifications: ['Alzheimer\'s Association', 'CARF'],
    specialties: ['Alzheimer\'s Care', 'Behavioral Management', 'Art Therapy'],
    capacity: {
      total: 60,
      available: 3
    },
    pricing: {
      baseRate: 7200,
      additionalServices: {
        'Advanced Behavioral Support': 300,
        'Family Counseling': 150
      },
      acceptedInsurance: ['Private Pay', 'Long-term Care Insurance']
    },
    staffInfo: {
      nurseToResidentRatio: '1:12',
      staffTurnoverRate: 8,
      certifiedStaff: 92
    },
    inspections: {
      lastInspectionDate: '2024-07-20',
      violations: 1,
      correctedViolations: 1,
      nextInspectionDue: '2025-07-20'
    },
    alerts: [],
    amenities: ['Secured Garden', 'Memory Café', 'Therapy Room', 'Family Lounge'],
    languages: ['English', 'Spanish'],
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    },
    hours: {
      'Monday': { open: '24/7', close: '24/7' },
      'Tuesday': { open: '24/7', close: '24/7' },
      'Wednesday': { open: '24/7', close: '24/7' },
      'Thursday': { open: '24/7', close: '24/7' },
      'Friday': { open: '24/7', close: '24/7' },
      'Saturday': { open: '24/7', close: '24/7' },
      'Sunday': { open: '24/7', close: '24/7' }
    }
  },
  {
    id: '3',
    name: 'Hillside Skilled Nursing',
    category: 'Skilled Nursing',
    rating: 3.8,
    reviewCount: 156,
    address: '789 Elm Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94107',
    phone: '(415) 555-9012',
    website: 'https://hillsidenursing.example.com',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60',
    description: 'Full-service skilled nursing facility providing medical care and rehabilitation services.',
    location: {
      lat: 37.7833,
      lng: -122.4024
    },
    careType: 'skilled-nursing',
    licensing: {
      licenseNumber: 'SN-SF-2023-003',
      licenseExpiry: '2025-06-30',
      state: 'CA',
      status: 'active'
    },
    qualityScore: {
      overall: 3.8,
      careQuality: 4.0,
      staff: 3.5,
      safety: 3.2,
      facilities: 3.8,
      value: 4.2
    },
    certifications: ['Medicare Certified', 'State Licensed'],
    specialties: ['Post-Surgical Care', 'Wound Care', 'Physical Therapy'],
    capacity: {
      total: 150,
      available: 12
    },
    pricing: {
      baseRate: 8500,
      additionalServices: {
        'Private Room': 500,
        'Specialized Equipment': 200
      },
      acceptedInsurance: ['Medicare', 'Medicaid', 'Private Insurance']
    },
    staffInfo: {
      nurseToResidentRatio: '1:18',
      staffTurnoverRate: 22,
      certifiedStaff: 78
    },
    inspections: {
      lastInspectionDate: '2024-05-10',
      violations: 5,
      correctedViolations: 3,
      nextInspectionDue: '2025-05-10'
    },
    alerts: [
      {
        type: 'safety',
        severity: 'high',
        message: 'Two safety violations pending correction from last inspection',
        date: '2024-05-10'
      },
      {
        type: 'staffing',
        severity: 'medium',
        message: 'Staff turnover rate above industry average',
        date: '2024-06-15'
      }
    ],
    amenities: ['Physical Therapy', 'Occupational Therapy', 'Dining Room', 'Chapel'],
    languages: ['English', 'Spanish'],
    socialLinks: {
      facebook: 'https://facebook.com'
    },
    hours: {
      'Monday': { open: '24/7', close: '24/7' },
      'Tuesday': { open: '24/7', close: '24/7' },
      'Wednesday': { open: '24/7', close: '24/7' },
      'Thursday': { open: '24/7', close: '24/7' },
      'Friday': { open: '24/7', close: '24/7' },
      'Saturday': { open: '24/7', close: '24/7' },
      'Sunday': { open: '24/7', close: '24/7' }
    }
  },
  {
    id: '4',
    name: 'Wellness Center',
    category: 'Health',
    rating: 4.5,
    reviewCount: 108,
    address: '321 Pine Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94108',
    phone: '(415) 555-3456',
    website: 'https://wellness.example.com',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlbGxuZXNzfGVufDB8fDB8fHww',
    description: 'Holistic health services including acupuncture, massage therapy, and nutritional counseling.',
    location: {
      lat: 37.7683,
      lng: -122.4212
    },
    socialLinks: {
      instagram: 'https://instagram.com'
    },
    hours: {
      'Monday': { open: '08:00', close: '20:00' },
      'Tuesday': { open: '08:00', close: '20:00' },
      'Wednesday': { open: '08:00', close: '20:00' },
      'Thursday': { open: '08:00', close: '20:00' },
      'Friday': { open: '08:00', close: '20:00' },
      'Saturday': { open: '09:00', close: '18:00' },
      'Sunday': { open: '10:00', close: '16:00' }
    }
  },
  {
    id: '5',
    name: 'Lush Salon & Spa',
    category: 'Beauty',
    rating: 4.6,
    reviewCount: 92,
    address: '555 Sutter Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    phone: '(415) 555-7890',
    website: 'https://lushsalon.example.com',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNhbG9ufGVufDB8fDB8fHww',
    description: 'Luxury hair styling, nail services, and spa treatments using organic and sustainable products.',
    location: {
      lat: 37.7695,
      lng: -122.4143
    },
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    },
    hours: {
      'Monday': { open: '10:00', close: '19:00' },
      'Tuesday': { open: '10:00', close: '19:00' },
      'Wednesday': { open: '10:00', close: '19:00' },
      'Thursday': { open: '10:00', close: '20:00' },
      'Friday': { open: '10:00', close: '20:00' },
      'Saturday': { open: '09:00', close: '20:00' },
      'Sunday': { open: '11:00', close: '18:00' }
    }
  },
  {
    id: '6',
    name: 'Peak Performance Gym',
    category: 'Fitness',
    rating: 4.3,
    reviewCount: 75,
    address: '888 Folsom Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94107',
    phone: '(415) 555-2345',
    website: 'https://peakperformance.example.com',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww',
    description: 'State-of-the-art fitness equipment, personal training, and group classes for all fitness levels.',
    location: {
      lat: 37.7766,
      lng: -122.4155
    },
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    hours: {
      'Monday': { open: '05:00', close: '23:00' },
      'Tuesday': { open: '05:00', close: '23:00' },
      'Wednesday': { open: '05:00', close: '23:00' },
      'Thursday': { open: '05:00', close: '23:00' },
      'Friday': { open: '05:00', close: '23:00' },
      'Saturday': { open: '07:00', close: '22:00' },
      'Sunday': { open: '07:00', close: '22:00' }
    }
  }
];
