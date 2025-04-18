
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Search, Layers, MapPin, TrendingUp, ArrowRight } from "lucide-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Apartment",
      location: "Barnawa, Kaduna",
      price: "₦15,500,000",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=400",
      type: "Apartment",
      size: "120 sqm",
    },
    {
      id: 2,
      title: "Luxury Villa",
      location: "Malali, Kaduna",
      price: "₦45,000,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
      type: "Villa",
      size: "350 sqm",
    },
  ];
  
  const stats = [
    { icon: Building, label: "Properties", value: "250+" },
    { icon: TrendingUp, label: "Growth", value: "15%" },
    { icon: MapPin, label: "Locations", value: "20+" },
  ];

  return (
    <AppLayout>
      <div className="container-app">
        <div className="pt-6 pb-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Hey, John</h1>
              <p className="text-kadestate-neutral-600">Welcome back</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full"
              onClick={() => navigate("/notifications")}
            >
              <span className="relative">
                <Layers className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-kadestate-blue rounded-full w-2.5 h-2.5" />
              </span>
            </Button>
          </div>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-3 h-5 w-5 text-kadestate-neutral-500" />
            <input 
              type="text"
              placeholder="Search Properties in Kaduna"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-kadestate-neutral-300 focus:outline-none focus:ring-2 focus:ring-kadestate-blue focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-3 flex flex-col items-center justify-center text-center">
                  <stat.icon className="h-5 w-5 mb-1 text-kadestate-blue" />
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className="text-xs text-kadestate-neutral-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Featured Properties</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-kadestate-blue text-sm flex items-center"
                onClick={() => navigate("/marketplace")}
              >
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredProperties.map((property) => (
                <Card 
                  key={property.id}
                  className="overflow-hidden border-none card-shadow"
                  onClick={() => navigate(`/property/${property.id}`)}
                >
                  <div className="relative h-48">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white font-semibold text-xl">{property.price}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                    <div className="flex items-center text-kadestate-neutral-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex justify-between text-sm text-kadestate-neutral-500">
                      <span>{property.type}</span>
                      <span>{property.size}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            
            <Card className="border border-kadestate-neutral-300 p-4 bg-kadestate-neutral-200/50">
              <div className="flex justify-center items-center h-32 text-center">
                <div className="text-kadestate-neutral-600">
                  <p className="mb-2">No recent activity</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate("/portfolio")}
                  >
                    Explore your portfolio
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
