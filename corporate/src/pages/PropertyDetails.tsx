import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Home,
  MapPin,
  DollarSign,
  BedDouble,
  Bath,
  SquareCode,
  CalendarClock,
  ArrowLeft,
  Box,
  Video,
  Image,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Building,
  Check,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProperty } from "@/services/mockData";
import { Property } from "@/types";
import { formatCurrency } from "@/lib/utils";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await getProperty(id);
          if (data) {
            setProperty(data);
          }
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const nextImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    }
  };

  const prevImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };

  const getStatusColor = (status: "forSale" | "forRent") => {
    return status === "forSale" 
      ? "bg-realestate-forsale hover:bg-realestate-forsale/90" 
      : "bg-realestate-forrent hover:bg-realestate-forrent/90";
  };

  const getStatusText = (status: "forSale" | "forRent") => {
    return status === "forSale" ? "For Sale" : "For Rent";
  };

  if (isLoading) {
    return (
      <DashboardLayout title="Property Details">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading property details...</div>
        </div>
      </DashboardLayout>
    );
  }

  if (!property) {
    return (
      <DashboardLayout title="Property Details">
        <div className="text-center py-12">
          <Building className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-4 text-2xl font-bold">Property Not Found</h2>
          <p className="mt-2 text-gray-500">The property you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-6 bg-realestate-teal hover:bg-realestate-teal/90">
            <Link to="/properties">Back to Properties</Link>
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Property Details">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/properties">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>
                {property.address.street}, {property.address.city}, {property.address.state} {property.address.zip}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className={getStatusColor(property.status)}>
              {getStatusText(property.status)}
            </Badge>
            <Badge variant="outline">{property.type}</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="mb-6">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Media indicators */}
              <div className="absolute top-4 right-4 flex gap-2">
                {property.hasVideo && (
                  <div className="bg-black/70 p-2 rounded-md">
                    <Video className="h-5 w-5 text-white" />
                  </div>
                )}
                {property.has3DTour && (
                  <div className="bg-black/70 p-2 rounded-md">
                    <Box className="h-5 w-5 text-white" />
                  </div>
                )}
                <div className="bg-black/70 p-2 rounded-md">
                  <Image className="h-5 w-5 text-white" />
                  <span className="text-white text-xs">{property.images.length}</span>
                </div>
              </div>
            </div>

            {property.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-md overflow-hidden aspect-video ${
                      index === currentImageIndex ? "ring-2 ring-realestate-teal" : ""
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Property Tabs */}
          <Tabs defaultValue="details" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              {(property.hasVideo || property.has3DTour) && (
                <TabsTrigger value="virtual">Virtual Tour</TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="details" className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                <div className="flex items-center">
                  <BedDouble className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-medium">{property.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="font-medium">{property.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <SquareCode className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Square Feet</p>
                    <p className="font-medium">{property.squareFeet.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CalendarClock className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Year Built</p>
                    <p className="font-medium">{property.yearBuilt}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{property.address.city}, {property.address.state}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Property Type</p>
                    <p className="font-medium capitalize">{property.type}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{property.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="features" className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Features & Amenities</h2>
              {property.features.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No features listed for this property.</p>
              )}
            </TabsContent>
            {(property.hasVideo || property.has3DTour) && (
              <TabsContent value="virtual" className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Virtual Experience</h2>
                {property.has3DTour && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Box className="h-5 w-5 mr-2 text-purple-600" />
                      3D Virtual Tour
                    </h3>
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Box className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="mt-2 text-gray-500">3D tour preview</p>
                        <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                          Launch 3D Tour
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                {property.hasVideo && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Video className="h-5 w-5 mr-2 text-blue-600" />
                      Video Tour
                    </h3>
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Video className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="mt-2 text-gray-500">Video tour preview</p>
                        <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                          Play Video
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            )}
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          {/* Price Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-realestate-teal mr-2" />
                <h2 className="text-2xl font-bold">
                  {formatCurrency(property.price)}
                  {property.status === "forRent" && <span className="text-base font-normal text-gray-500">/month</span>}
                </h2>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full bg-realestate-teal hover:bg-realestate-teal/90">
                  Request a Tour
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Agent
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Agent Card */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-bold mb-4">Listed By</h2>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">{property.companyName}</h3>
                  <p className="text-sm text-gray-500">{property.ownerName}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PropertyDetails;
