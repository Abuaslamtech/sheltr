
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Square, Home, Eye, Share, ArrowDown, ShoppingBag, SendHorizontal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentImage, setCurrentImage] = useState(0);
  
  // Mock property data
  const property = {
    id: Number(id),
    title: "Modern Apartment",
    location: "Barnawa, Kaduna",
    price: "₦15,500,000",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    ],
    type: "Apartment",
    size: "120 sqm",
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2020,
    description: "This beautifully designed modern apartment offers luxurious living in one of Kaduna's most desirable neighborhoods. With spacious rooms, high-quality finishes, and excellent security, this property is perfect for professionals and families alike.",
    features: [
      "24/7 Security",
      "Parking Space",
      "Backup Generator",
      "Swimming Pool",
      "Modern Kitchen",
      "Air Conditioning"
    ],
    owner: "John Doe",
    blockchainId: "0x7a9fe22691c811ea339401bbb2a5e09f997c31"
  };
  
  const handleListOnMarketplace = () => {
    toast({
      title: "Property Listed!",
      description: "Your property has been listed on the marketplace.",
    });
  };
  
  const handleViewVirtualTour = () => {
    // Open the Matterport 360° virtual tour in a new tab
    window.open("https://my.matterport.com/show/?m=UooQuiXKbFY", "_blank");
    
    toast({
      title: "360° Virtual Tour",
      description: "Loading high-quality virtual tour...",
    });
  };
  
  const handleTransferProperty = () => {
    navigate(`/transfer/${id}`);
  };

  return (
    <AppLayout>
      <div className="relative">
        <div className="relative h-72 bg-kadestate-neutral-300">
          <img 
            src={property.images[currentImage]} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
            <Button 
              variant="secondary" 
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={() => toast({ title: "Shared", description: "Property link copied to clipboard" })}
            >
              <Share className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute bottom-4 right-4 left-4 flex justify-center">
            <div className="flex space-x-2 bg-black/40 rounded-full px-3 py-1.5">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImage === index ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="container-app">
          <div className="mt-6 mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-kadestate-neutral-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-kadestate-neutral-600">Estimated Value</p>
                <p className="text-2xl font-bold text-kadestate-neutral-900">{property.price}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 py-4 border-b border-kadestate-neutral-300">
              <div className="flex items-center">
                <Home className="h-5 w-5 text-kadestate-neutral-500 mr-2" />
                <div>
                  <p className="text-sm text-kadestate-neutral-500">Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Square className="h-5 w-5 text-kadestate-neutral-500 mr-2" />
                <div>
                  <p className="text-sm text-kadestate-neutral-500">Size</p>
                  <p className="font-medium">{property.size}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-5 h-5 flex justify-center items-center text-kadestate-neutral-500 mr-2">
                  🛏️
                </div>
                <div>
                  <p className="text-sm text-kadestate-neutral-500">Bedrooms</p>
                  <p className="font-medium">{property.bedrooms}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-5 h-5 flex justify-center items-center text-kadestate-neutral-500 mr-2">
                  🚿
                </div>
                <div>
                  <p className="text-sm text-kadestate-neutral-500">Bathrooms</p>
                  <p className="font-medium">{property.bathrooms}</p>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="details" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="ownership">Ownership</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="animate-fade-in mt-4">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-kadestate-neutral-700 mb-6">
                  {property.description}
                </p>
                
                <h3 className="font-semibold mb-2">Features</h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-kadestate-blue mr-2"></div>
                      <span className="text-kadestate-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={handleViewVirtualTour}
                  className="w-full mb-4"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View 360° Virtual Tour
                </Button>
                <p className="text-center text-xs text-kadestate-neutral-500 mb-6">
                  Virtual tour generated with a high-end $2,500 camera for maximum quality
                </p>
              </TabsContent>
              
              <TabsContent value="ownership" className="animate-fade-in mt-4">
                <div className="bg-kadestate-neutral-200/80 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-2">Digital Ownership Record</h3>
                  <p className="text-sm text-kadestate-neutral-700 mb-3">
                    This property's ownership is securely recorded on the blockchain, eliminating the risk of fraud and disputes.
                  </p>
                  <div className="bg-white rounded p-3 border border-kadestate-neutral-300">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-kadestate-neutral-600">Owner</span>
                      <span className="text-sm font-medium">{property.owner}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-kadestate-neutral-600">Transaction ID</span>
                      <span className="text-sm font-medium">{property.blockchainId.substring(0, 8)}...</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-kadestate-neutral-600">Verified</span>
                      <span className="text-sm font-medium text-green-600">Yes ✓</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleListOnMarketplace}
                    className="w-full bg-kadestate-blue hover:bg-kadestate-blue-dark"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    List on Marketplace
                  </Button>
                  
                  <Button 
                    onClick={handleTransferProperty}
                    variant="outline"
                    className="w-full border-kadestate-blue text-kadestate-blue hover:bg-kadestate-blue/10"
                  >
                    <SendHorizontal className="h-4 w-4 mr-2" />
                    Transfer Property
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PropertyDetail;
