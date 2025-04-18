
import AuthForm from "@/components/auth/AuthForm";
import { Building } from "lucide-react";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-md mb-10">
        <div className="flex items-center justify-center mb-8">
          <Building className="h-8 w-8 text-kadestate-blue mr-2" />
          <h1 className="text-3xl font-bold text-kadestate-neutral-900">Stylo</h1>
        </div>
        
        <h2 className="text-2xl font-semibold text-center mb-2">Welcome</h2>
        <p className="text-kadestate-neutral-600 text-center mb-8">
          Login or create an account to access your digital property portfolio
        </p>
        
        <AuthForm />
      </div>
      
      <div className="mt-8 text-center text-sm text-kadestate-neutral-500">
        <p>© 2025 KadEstate. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Auth;
