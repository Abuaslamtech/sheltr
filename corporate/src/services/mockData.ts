
import { Property, SubscriptionTier, DashboardStats } from "@/types";

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Beachfront Villa",
    description: "Beautiful beachfront property with stunning ocean views. Modern design with high-end finishes throughout.",
    address: {
      street: "123 Ocean Drive",
      city: "Malibu",
      state: "CA",
      zip: "90210",
      country: "USA"
    },
    price: 2500000,
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    yearBuilt: 2018,
    status: "forSale",
    type: "house",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    hasVideo: true,
    has3DTour: true,
    features: ["Ocean view", "Swimming pool", "Modern kitchen", "Smart home", "Private beach access"],
    createdAt: "2023-01-15T10:00:00Z",
    updatedAt: "2023-01-15T10:00:00Z",
    ownerId: "1",
    ownerName: "John Smith",
    companyName: "Smith Real Estate"
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    description: "Elegant apartment in the heart of downtown. Walk to restaurants, shopping, and entertainment.",
    address: {
      street: "456 Main Street, Unit 12A",
      city: "Los Angeles",
      state: "CA",
      zip: "90014",
      country: "USA"
    },
    price: 5000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    yearBuilt: 2020,
    status: "forRent",
    type: "apartment",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    ],
    hasVideo: false,
    has3DTour: true,
    features: ["City view", "Gym access", "Concierge", "Rooftop terrace", "Pet friendly"],
    createdAt: "2023-02-10T14:30:00Z",
    updatedAt: "2023-02-10T14:30:00Z",
    ownerId: "1",
    ownerName: "John Smith",
    companyName: "Smith Real Estate"
  },
  {
    id: "3",
    title: "Modern Commercial Office Space",
    description: "Premium office space in a prime location. Open floor plan with meeting rooms and reception area.",
    address: {
      street: "789 Business Avenue",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA"
    },
    price: 1200000,
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 5000,
    yearBuilt: 2015,
    status: "forSale",
    type: "commercial",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    ],
    hasVideo: true,
    has3DTour: false,
    features: ["Open layout", "High ceilings", "Natural light", "Kitchen area", "Parking garage"],
    createdAt: "2023-03-05T09:15:00Z",
    updatedAt: "2023-03-05T09:15:00Z",
    ownerId: "1",
    ownerName: "John Smith",
    companyName: "Smith Real Estate"
  }
];

export const mockSubscriptionTiers: SubscriptionTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    propertyLimit: 20,
    tourLimit: 5,
    features: [
      "Up to 20 active properties",
      "Up to 5 active 3D tours",
      "Basic analytics",
      "Email support",
      "Marketplace listings"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 299,
    propertyLimit: Infinity,
    tourLimit: 20,
    features: [
      "Unlimited properties",
      "Up to 20 active 3D tours",
      "Advanced analytics",
      "Priority support",
      "Featured marketplace listings",
      "Custom branding",
      "API access"
    ]
  }
];

export const mockDashboardStats: DashboardStats = {
  totalProperties: 3,
  activeListings: 3,
  totalValuation: 3705000,
  active3DTours: 2
};

// Service functions
export const getProperties = (): Promise<Property[]> => {
  return Promise.resolve(mockProperties);
};

export const getProperty = (id: string): Promise<Property | undefined> => {
  return Promise.resolve(mockProperties.find(property => property.id === id));
};

export const getSubscriptionTiers = (): Promise<SubscriptionTier[]> => {
  return Promise.resolve(mockSubscriptionTiers);
};

export const getDashboardStats = (): Promise<DashboardStats> => {
  return Promise.resolve(mockDashboardStats);
};

export const createProperty = (property: Omit<Property, 'id' | 'createdAt' | 'updatedAt' | 'ownerId' | 'ownerName' | 'companyName'>): Promise<Property> => {
  const newProperty: Property = {
    ...property,
    id: Math.random().toString(36).substring(2, 11),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ownerId: "1",
    ownerName: "John Smith",
    companyName: "Smith Real Estate"
  };
  
  // In a real app, this would save to a database
  mockProperties.push(newProperty);
  return Promise.resolve(newProperty);
};
