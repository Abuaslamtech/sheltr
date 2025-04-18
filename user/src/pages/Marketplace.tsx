
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, List, Map, SlidersHorizontal } from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"list" | "map">("list");
  const navigate = useNavigate();
  
  const properties = [
    {
      id: 101,
      title: "Modern Apartment",
      location: "Barnawa, Kaduna",
      price: "₦15,500,000",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=400",
      type: "Apartment",
      size: "120 sqm",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 102,
      title: "Luxury Villa",
      location: "Malali, Kaduna",
      price: "₦45,000,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
      type: "Villa",
      size: "350 sqm",
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      id: 103,
      title: "Commercial Space",
      location: "Kawo, Kaduna",
      price: "₦28,750,000",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400",
      type: "Commercial",
      size: "200 sqm",
      bedrooms: 0,
      bathrooms: 2,
    },
    {
      id: 104,
      title: "Family House",
      location: "Ungwan Rimi, Kaduna",
      price: "₦22,300,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400",
      type: "House",
      size: "180 sqm",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 105,
      title: "Office Building",
      location: "Sabon Tasha, Kaduna",
      price: "₦35,000,000",
      image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=400",
      type: "Commercial",
      size: "250 sqm",
      bedrooms: 0,
      bathrooms: 4,
    },
  ];

  return (
    <AppLayout>
      <div className="container-app">
        <div className="pt-6 pb-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Marketplace</h1>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {}}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-kadestate-neutral-500" />
            <input 
              type="text"
              placeholder="Search properties, locations..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-kadestate-neutral-300 focus:outline-none focus:ring-2 focus:ring-kadestate-blue focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="list" className="mb-6" onValueChange={(val) => setView(val as "list" | "map")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list" className="flex items-center">
                <List className="h-4 w-4 mr-2" />
                List View
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center">
                <Map className="h-4 w-4 mr-2" />
                Map View
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          {view === "list" ? (
            <div className="space-y-4 mb-10">
              {properties.map((property) => (
                <Card 
                  key={property.id}
                  className="overflow-hidden border border-kadestate-neutral-300 card-shadow"
                  onClick={() => navigate(`/marketplace/${property.id}`)}
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
                        <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                        <div className="flex items-center text-kadestate-neutral-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{property.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-end mt-2">
                        <div>
                          <p className="text-sm text-kadestate-neutral-500 mb-1">Price</p>
                          <p className="font-semibold text-lg">{property.price}</p>
                        </div>
                        <div className="flex space-x-4 text-sm text-kadestate-neutral-500">
                          <div className="flex items-center">
                            <div className="w-4 h-4 flex justify-center items-center text-kadestate-neutral-500 mr-1">
                              🛏️
                            </div>
                            <span>{property.bedrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 flex justify-center items-center text-kadestate-neutral-500 mr-1">
                              🚿
                            </div>
                            <span>{property.bathrooms}</span>
                          </div>
                          <span>{property.size}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="h-[70vh] relative bg-kadestate-neutral-200 rounded-lg overflow-hidden mb-10">
              <div className="absolute inset-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125835.94236850485!2d7.385262042695599!3d10.526413621482247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d1e0865968b35%3A0x47bd70d7e1470f99!2sKaduna%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1712718236012!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Map pins would go here in a real implementation */}
              {properties.map((property, index) => (
                <div 
                  key={property.id}
                  className="absolute bg-white rounded-lg shadow-lg p-2 flex items-center cursor-pointer hover:scale-105 transition-transform"
                  style={{ 
                    left: `${20 + (index * 15)}%`, 
                    top: `${30 + (index * 10)}%`,
                    zIndex: 10,
                  }}
                  onClick={() => navigate(`/marketplace/${property.id}`)}
                >
                  <div className="font-bold text-kadestate-blue mr-2">{property.price}</div>
                  <div className="w-2 h-2 rounded-full bg-kadestate-blue"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Marketplace;
