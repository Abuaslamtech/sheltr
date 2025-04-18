
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, User, CheckCircle2, Search, Shield, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const TransferProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [recipient, setRecipient] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  
  // Mock property data
  const property = {
    id: Number(id),
    title: "Modern Apartment",
    location: "Barnawa, Kaduna",
    value: "₦15,500,000",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=400",
  };
  
  const handleSearch = () => {
    if (recipient.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a recipient username",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would search the database
    setTimeout(() => {
      setStep(2);
    }, 1000);
  };
  
  const handleVerify = () => {
    if (verificationCode.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would verify the code
    if (verificationCode === "123456") {
      setStep(3);
    } else {
      toast({
        title: "Invalid Code",
        description: "The verification code you entered is incorrect",
        variant: "destructive",
      });
    }
  };
  
  const handleConfirm = () => {
    // In a real app, this would complete the transfer
    toast({
      title: "Transfer Complete",
      description: "Property has been transferred successfully",
    });
    
    setTimeout(() => {
      navigate("/portfolio");
    }, 2000);
  };

  return (
    <AppLayout>
      <div className="container-app">
        <div className="pt-6 pb-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          
          <h1 className="text-2xl font-bold mb-2">Transfer Property</h1>
          <p className="text-kadestate-neutral-600 mb-6">
            Securely transfer ownership of your property using blockchain technology
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step >= 1 ? "bg-kadestate-blue text-white" : "bg-kadestate-neutral-300 text-kadestate-neutral-600"
              }`}>
                1
              </div>
              <div className={`h-1 w-10 ${
                step >= 2 ? "bg-kadestate-blue" : "bg-kadestate-neutral-300"
              }`}></div>
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step >= 2 ? "bg-kadestate-blue text-white" : "bg-kadestate-neutral-300 text-kadestate-neutral-600"
              }`}>
                2
              </div>
              <div className={`h-1 w-10 ${
                step >= 3 ? "bg-kadestate-blue" : "bg-kadestate-neutral-300"
              }`}></div>
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step >= 3 ? "bg-kadestate-blue text-white" : "bg-kadestate-neutral-300 text-kadestate-neutral-600"
              }`}>
                3
              </div>
            </div>
            <div className="text-sm text-kadestate-neutral-600">
              Step {step} of 3
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-kadestate-neutral-300 overflow-hidden mb-6">
            <div className="p-4 border-b border-kadestate-neutral-300">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-md overflow-hidden mr-3">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{property.title}</h3>
                  <p className="text-sm text-kadestate-neutral-600">{property.location}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <span className="text-kadestate-neutral-600">Estimated Value</span>
                <span className="font-semibold">{property.value}</span>
              </div>
            </div>
          </div>
          
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Find Recipient</h2>
              
              <div className="mb-6">
                <Label htmlFor="recipient" className="mb-2 block">Enter KadEstate Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-kadestate-neutral-500" />
                  <Input 
                    id="recipient" 
                    placeholder="e.g. john_doe" 
                    className="pl-10" 
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                className="w-full"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4 mr-2" />
                Search User
              </Button>
            </div>
          )}
          
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Verify Transfer</h2>
              
              <div className="bg-kadestate-neutral-200/80 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-kadestate-blue mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium mb-1">Security Verification</p>
                    <p className="text-sm text-kadestate-neutral-600">
                      We've sent a 6-digit verification code to your email. 
                      Enter the code below to continue with the transfer.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="code" className="mb-2 block">Enter Verification Code</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-kadestate-neutral-500" />
                  <Input 
                    id="code" 
                    placeholder="123456" 
                    className="pl-10" 
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>
                <p className="text-sm text-kadestate-neutral-500 mt-2">
                  Use code 123456 for this demo
                </p>
              </div>
              
              <Button 
                className="w-full"
                onClick={handleVerify}
              >
                Verify & Continue
              </Button>
            </div>
          )}
          
          {step === 3 && (
            <div className="animate-fade-in">
              <div className="flex flex-col items-center justify-center text-center mb-8">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Ready to Transfer</h2>
                <p className="text-kadestate-neutral-600">
                  You're about to transfer ownership of this property to <strong>{recipient}</strong>
                </p>
              </div>
              
              <div className="bg-kadestate-neutral-200/80 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-kadestate-blue mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium mb-1">Blockchain Security</p>
                    <p className="text-sm text-kadestate-neutral-600">
                      This transfer will be securely recorded on the blockchain,
                      providing an immutable record of ownership that eliminates
                      fraud and land disputes.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-kadestate-blue hover:bg-kadestate-blue-dark mb-4"
                onClick={handleConfirm}
              >
                Confirm Transfer
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default TransferProperty;
