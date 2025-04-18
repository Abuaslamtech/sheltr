import React from "react";
import { Link } from "react-router-dom";
import { Property } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Box, MapPin, Home as HomeIcon, Building, Video, Image } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  showActions?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, showActions = true }) => {
  const { id, title, address, price, bedrooms, bathrooms, squareFeet, status, type, images, hasVideo, has3DTour } = property;

  const getStatusColor = (status: "forSale" | "forRent") => {
    return status === "forSale" 
      ? "bg-realestate-forsale hover:bg-realestate-forsale/90" 
      : "bg-realestate-forrent hover:bg-realestate-forrent/90";
  };

  const getStatusText = (status: "forSale" | "forRent") => {
    return status === "forSale" ? "For Sale" : "For Rent";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "house":
        return <HomeIcon className="h-4 w-4" />;
      case "apartment":
      case "condo":
        return <Building className="h-4 w-4" />;
      default:
        return <Building className="h-4 w-4" />;
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={images[0]} 
          alt={title} 
          className="h-48 w-full object-cover"
        />
        <Badge className={`absolute top-2 left-2 ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </Badge>

        {/* Media indicators */}
        <div className="absolute bottom-2 right-2 flex space-x-1">
          {hasVideo && (
            <div className="bg-black/70 p-1 rounded-md">
              <Video className="h-4 w-4 text-white" />
            </div>
          )}
          {has3DTour && (
            <div className="bg-black/70 p-1 rounded-md">
              <Box className="h-4 w-4 text-white" />
            </div>
          )}
          {images.length > 1 && (
            <div className="bg-black/70 p-1 rounded-md">
              <Image className="h-4 w-4 text-white" />
              <span className="text-white text-xs">{images.length}</span>
            </div>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-bold text-lg truncate">{title}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate">
              {address.street}, {address.city}, {address.state}
            </span>
          </div>
        </div>

        <div className="mt-3">
          <div className="text-xl font-bold text-realestate-navy">
            {status === "forSale" ? formatCurrency(price) : `${formatCurrency(price)}/month`}
          </div>
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <div className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-1 text-gray-500" />
            <span>{bedrooms} {bedrooms === 1 ? "Bed" : "Beds"}</span>
          </div>
          <div className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-1 text-gray-500" />
            <span>{bathrooms} {bathrooms === 1 ? "Bath" : "Baths"}</span>
          </div>
          <div className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-1 text-gray-500" />
            <span>{squareFeet.toLocaleString()} sq ft</span>
          </div>
        </div>
      </CardContent>

      {showActions && (
        <CardFooter className="p-4 pt-0 flex justify-end">
          <Link 
            to={`/property/${id}`}
            className="text-realestate-teal hover:text-realestate-teal/90 text-sm font-medium"
          >
            View Details
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default PropertyCard;
