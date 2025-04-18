
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Building, MapPin, ArrowUpRight, Info } from "lucide-react";

const Portfolio = () => {
  const navigate = useNavigate();
  
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Modern Apartment",
      location: "Barnawa, Kaduna",
      value: "₦15,500,000",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=400",
      type: "Apartment",
      size: "120 sqm",
      growth: "+3.5%",
    },
    {
      id: 2,
      title: "Luxury Villa",
      location: "Malali, Kaduna",
      value: "₦45,000,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
      type: "Villa",
      size: "350 sqm",
      growth: "+5.2%",
    },
    {
      id: 3,
      title: "Commercial Space",
      location: "Kawo, Kaduna",
      value: "₦28,750,000",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400",
      type: "Commercial",
      size: "200 sqm",
      growth: "+2.8%",
    },
  ]);
  
  const totalValue = "₦89,250,000";

  return (
    <AppLayout>
      <div className="container-app">
        <div className="pt-6 pb-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
          </div>
          
          <Card className="mb-8 overflow-hidden border-none shadow-md bg-gradient-to-br from-kadestate-blue to-kadestate-blue-dark text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-white/80 text-sm mb-1">Total Value</p>
                  <h2 className="text-3xl font-bold">{totalValue}</h2>
                </div>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="bg-white/20 text-white hover:bg-white/30 border-none"
                  onClick={() => {}}
                >
                  <Info className="h-4 w-4 mr-1" />
                  Details
                </Button>
              </div>
              
              <div className="flex items-center mt-2">
                <span className="text-white/80 text-sm mr-2">
                  Total Growth: 
                </span>
                <span className="text-white bg-white/20 px-2 py-0.5 rounded text-xs">
                  +4.2% this month
                </span>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Properties</h2>
            <Button 
              onClick={() => navigate("/add-property")} 
              className="bg-kadestate-blue hover:bg-kadestate-blue-dark text-white"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Property
            </Button>
          </div>
          
          <div className="space-y-4 mb-10">
            {properties.map((property) => (
              <Card 
                key={property.id}
                className="overflow-hidden border border-kadestate-neutral-300 card-shadow"
                onClick={() => navigate(`/property/${property.id}`)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-32 md:h-auto">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{property.title}</h3>
                        <span className="text-sm text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                          {property.growth}
                        </span>
                      </div>
                      <div className="flex items-center text-kadestate-neutral-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end mt-2">
                      <div>
                        <p className="text-sm text-kadestate-neutral-500 mb-1">Estimated Value</p>
                        <p className="font-semibold text-lg">{property.value}</p>
                      </div>
                      <div className="flex space-x-2 text-sm text-kadestate-neutral-500">
                        <span>{property.type}</span>
                        <span>•</span>
                        <span>{property.size}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="outline"
              className="border-dashed border-kadestate-neutral-400 text-kadestate-neutral-600"
              onClick={() => navigate("/marketplace")}
            >
              <Building className="h-4 w-4 mr-2" />
              Browse Marketplace
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Portfolio;
