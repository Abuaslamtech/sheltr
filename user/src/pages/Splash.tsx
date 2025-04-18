
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building, Shield } from "lucide-react";

const Splash = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/auth");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
      <div className="flex items-center mb-4 animate-fade-in">
        <Building className="h-10 w-10 text-kadestate-blue mr-2" />
        <h1 className="text-4xl font-bold text-kadestate-neutral-900">Stylo</h1>
      </div>
      
      <p className="text-kadestate-neutral-600 mb-8 max-w-md animate-fade-in animation-delay-200">
        The secure digital property platform for Kaduna, Nigeria
      </p>
      
      <div className="flex items-center text-kadestate-neutral-500 text-sm animate-fade-in animation-delay-400">
        <Shield className="h-4 w-4 mr-1" />
        <span>Blockchain secured property transfers</span>
      </div>
      
      {isLoading && (
        <div className="mt-12">
          <div className="w-12 h-1 bg-kadestate-neutral-200 rounded-full overflow-hidden">
            <div className="h-full bg-kadestate-blue animate-[loader_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Splash;

// Add this to your CSS
// @keyframes loader {
//   0% { width: 0%; }
//   50% { width: 100%; }
//   100% { width: 0%; }
// }
