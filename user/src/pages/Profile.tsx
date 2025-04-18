
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Building, Clock, Shield, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    navigate("/auth");
  };

  return (
    <AppLayout>
      <div className="container-app">
        <div className="pt-6 pb-4">
          <Card className="mb-8 overflow-hidden border-none">
            <div className="h-24 bg-gradient-to-r from-kadestate-blue to-kadestate-blue-light" />
            <CardContent className="px-6 pb-6 relative">
              <div className="flex items-end absolute -top-12">
                <Avatar className="h-24 w-24 rounded-xl border-4 border-white">
                  <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="pt-14 flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold mb-1">John Doe</h1>
                  <p className="text-kadestate-neutral-600">john.doe@example.com</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/edit-profile")}
                >
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4 mb-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-4 rounded-none"
                  onClick={() => navigate("/portfolio")}
                >
                  <div className="flex items-center">
                    <Building className="h-5 w-5 mr-3 text-kadestate-neutral-500" />
                    <span>My Properties</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-kadestate-neutral-400" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-4 rounded-none"
                  onClick={() => navigate("/transaction-history")}
                >
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-kadestate-neutral-500" />
                    <span>Transaction History</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-kadestate-neutral-400" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-4 rounded-none"
                  onClick={() => navigate("/security")}
                >
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-kadestate-neutral-500" />
                    <span>Security & Privacy</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-kadestate-neutral-400" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-4 rounded-none"
                  onClick={() => navigate("/settings")}
                >
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 mr-3 text-kadestate-neutral-500" />
                    <span>Settings</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-kadestate-neutral-400" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-kadestate-neutral-200/80 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <Shield className="h-5 w-5 text-kadestate-blue mt-0.5 mr-2" />
              <div>
                <p className="font-medium mb-1">Blockchain Technology</p>
                <p className="text-sm text-kadestate-neutral-600">
                  KadEstate uses blockchain technology to ensure secure, 
                  transparent, and fraud-free property transactions. Your 
                  digital ownership records are immutable and verified.
                </p>
              </div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-kadestate-neutral-300 text-kadestate-neutral-700"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
          
          <div className="text-center text-xs text-kadestate-neutral-500 mt-8">
            KadEstate v1.0.0 • © 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
