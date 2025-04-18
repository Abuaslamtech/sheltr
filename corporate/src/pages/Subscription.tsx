import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CreditCard, 
  Check, 
  Building, 
  Box, 
  BarChart, 
  MailCheck, 
  Store, 
  Shield, 
  Zap
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSubscriptionTiers } from "@/services/mockData";
import { SubscriptionTier } from "@/types";

const Subscription = () => {
  const { user } = useAuth();
  const [tiers, setTiers] = useState<SubscriptionTier[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSubscriptionTiers();
        setTiers(data);
      } catch (error) {
        console.error("Error fetching subscription tiers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpgrade = async (tierId: string) => {
    if (user?.subscriptionTier === tierId) {
      toast({
        title: "Already subscribed",
        description: `You're already on the ${tierId} plan.`,
      });
      return;
    }

    setIsUpgrading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Subscription updated",
        description: `You've successfully upgraded to the ${tierId} plan.`,
      });
      
      // In a real app, this would update the user's subscription in the backend
      // and then refresh the auth context
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Error upgrading subscription:", error);
      
      toast({
        title: "Upgrade failed",
        description: "There was an error upgrading your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpgrading(false);
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout title="Subscription">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading subscription details...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Manage Subscription">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold flex items-center">
            <CreditCard className="mr-2 h-6 w-6" />
            Subscription Plans
          </h1>
          <p className="text-gray-500">
            Choose the right plan for your real estate business
          </p>
        </div>

        {/* Current Subscription Info */}
        {user?.subscriptionTier && (
          <div className="mb-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-800">
                  Current Plan: {user.subscriptionTier === "starter" ? "Starter" : "Enterprise"}
                </h2>
                <p className="text-blue-600">
                  Your subscription renews on May 15, 2025
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {tiers.map((tier) => {
            const isCurrentTier = user?.subscriptionTier === tier.id;
            
            return (
              <div
                key={tier.id}
                className={`bg-white rounded-lg overflow-hidden shadow-md ${
                  isCurrentTier ? "border-2 border-realestate-teal" : ""
                }`}
              >
                {isCurrentTier && (
                  <div className="bg-realestate-teal text-white py-1 px-4 text-center">
                    <span className="text-sm font-medium">Your Current Plan</span>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold">{tier.name}</h2>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    {tier.id === "starter"
                      ? "Perfect for small agencies and individual agents"
                      : "For established agencies and property management companies"}
                  </p>

                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Includes:</h3>
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    {isCurrentTier ? (
                      <Button disabled className="w-full bg-gray-200 text-gray-600 cursor-not-allowed">
                        Current Plan
                      </Button>
                    ) : (
                      <Button
                        className="w-full bg-realestate-teal hover:bg-realestate-teal/90"
                        onClick={() => handleUpgrade(tier.id)}
                        disabled={isUpgrading}
                      >
                        {isUpgrading ? "Processing..." : "Upgrade to " + tier.name}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Add-on Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <Box className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg">3D Tour Creation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional 3D tour creation service for your properties
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold">$149</span>
                <span className="text-sm text-gray-500">per property</span>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Get Started
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <BarChart className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg">Advanced Analytics</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Detailed performance metrics and market analysis tools
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold">$79</span>
                <span className="text-sm text-gray-500">per month</span>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Get Started
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <MailCheck className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">Email Marketing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated property newsletters and client communication tools
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold">$59</span>
                <span className="text-sm text-gray-500">per month</span>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
