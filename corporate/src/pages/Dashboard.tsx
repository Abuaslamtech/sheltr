import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building, 
  Home, 
  DollarSign, 
  Box,
  Plus,
  TrendingUp,
  UserCheck,
  Clock
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import { getDashboardStats, getProperties } from "@/services/mockData";
import { Property, DashboardStats } from "@/types";
import { formatCurrency, formatNumber } from "@/lib/utils";

const Dashboard = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propertiesData, statsData] = await Promise.all([
          getProperties(),
          getDashboardStats()
        ]);
        
        setProperties(propertiesData);
        setStats(statsData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout title="Dashboard">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading dashboard data...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Dashboard">
      {/* Stats Cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Properties</p>
                <p className="text-2xl font-bold">{stats?.totalProperties ?? 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <Home className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold">{stats?.activeListings ?? 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Valuation</p>
                <p className="text-2xl font-bold">{formatCurrency(stats?.totalValuation ?? 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 mr-4">
                <Box className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active 3D Tours</p>
                <p className="text-2xl font-bold">{stats?.active3DTours ?? 0}</p>
                {user?.subscriptionTier === "starter" && (
                  <p className="text-xs text-gray-500">of 5 available</p>
                )}
                {user?.subscriptionTier === "enterprise" && (
                  <p className="text-xs text-gray-500">of 20 available</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <Button asChild className="py-6 bg-realestate-teal hover:bg-realestate-teal/90">
            <Link to="/properties/upload" className="flex flex-col items-center">
              <Plus className="h-6 w-6 mb-2" />
              <span>Add New Property</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="py-6">
            <Link to="/marketplace" className="flex flex-col items-center">
              <Building className="h-6 w-6 mb-2" />
              <span>View Marketplace</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="py-6">
            <Link to="/subscription" className="flex flex-col items-center">
              <TrendingUp className="h-6 w-6 mb-2" />
              <span>Manage Subscription</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="py-6">
            <Link to="/messages" className="flex flex-col items-center">
              <UserCheck className="h-6 w-6 mb-2" />
              <span>View Inquiries</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Recent Properties */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recent Properties</h2>
          <Button asChild variant="ghost">
            <Link to="/properties">View All</Link>
          </Button>
        </div>

        {properties.length === 0 ? (
          <Card className="p-8 text-center">
            <div className="mb-4">
              <Building className="h-12 w-12 mx-auto text-gray-400" />
            </div>
            <CardTitle className="mb-2">No Properties Yet</CardTitle>
            <CardDescription className="mb-6">
              Start building your portfolio by adding your first property.
            </CardDescription>
            <Button asChild className="bg-realestate-teal hover:bg-realestate-teal/90">
              <Link to="/properties/upload">Add Property</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>

      {/* Activity Feed */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <Card>
          <CardHeader>
            <CardTitle>Activity Feed</CardTitle>
            <CardDescription>Recent actions and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Plus className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">New property added</p>
                  <p className="text-sm text-gray-500">
                    "Luxury Beachfront Villa" was added to your portfolio
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    2 days ago
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserCheck className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">New inquiry received</p>
                  <p className="text-sm text-gray-500">
                    You received a new inquiry for "Downtown Luxury Apartment"
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    3 days ago
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Box className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">3D Tour added</p>
                  <p className="text-sm text-gray-500">
                    3D Tour was successfully added to "Luxury Beachfront Villa"
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    4 days ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
