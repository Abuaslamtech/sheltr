
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="flex items-center mb-4">
        <Building className="h-8 w-8 text-kadestate-blue mr-2" />
        <h1 className="text-3xl font-bold text-kadestate-neutral-900">KadEstate</h1>
      </div>
      
      <div className="text-center max-w-md mb-8">
        <h1 className="text-6xl font-bold mb-4 text-kadestate-neutral-900">404</h1>
        <p className="text-xl text-kadestate-neutral-700 mb-6">
          Oops! This page does not exist
        </p>
        <p className="text-kadestate-neutral-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          className="flex items-center mx-auto"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
