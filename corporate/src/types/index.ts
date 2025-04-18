
export type PropertyStatus = "forSale" | "forRent";

export type PropertyType = 
  | "house" 
  | "apartment" 
  | "condo" 
  | "townhouse" 
  | "land" 
  | "commercial" 
  | "industrial" 
  | "other";

export interface Property {
  id: string;
  title: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt: number;
  status: PropertyStatus;
  type: PropertyType;
  images: string[];
  hasVideo: boolean;
  has3DTour: boolean;
  features: string[];
  createdAt: string;
  updatedAt: string;
  ownerId: string;
  ownerName: string;
  companyName: string;
}

export interface SubscriptionTier {
  id: "starter" | "enterprise";
  name: string;
  price: number;
  propertyLimit: number;
  tourLimit: number;
  features: string[];
}

export interface DashboardStats {
  totalProperties: number;
  activeListings: number;
  totalValuation: number;
  active3DTours: number;
}
