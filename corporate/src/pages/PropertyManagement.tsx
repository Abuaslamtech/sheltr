
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, Building } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import PropertyCard from "@/components/PropertyCard";
import { getProperties } from "@/services/mockData";
import { Property, PropertyStatus, PropertyType } from "@/types";

const PropertyManagement = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<PropertyStatus[]>([]);
  const [typeFilter, setTypeFilter] = useState<PropertyType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let result = properties;

    // Apply search term
    if (searchTerm) {
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.address.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter.length > 0) {
      result = result.filter((property) => statusFilter.includes(property.status));
    }

    // Apply type filter
    if (typeFilter.length > 0) {
      result = result.filter((property) => typeFilter.includes(property.type));
    }

    setFilteredProperties(result);
  }, [searchTerm, statusFilter, typeFilter, properties]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleStatusFilter = (status: PropertyStatus) => {
    setStatusFilter((current) => {
      if (current.includes(status)) {
        return current.filter((s) => s !== status);
      } else {
        return [...current, status];
      }
    });
  };

  const toggleTypeFilter = (type: PropertyType) => {
    setTypeFilter((current) => {
      if (current.includes(type)) {
        return current.filter((t) => t !== type);
      } else {
        return [...current, type];
      }
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter([]);
    setTypeFilter([]);
  };

  if (isLoading) {
    return (
      <DashboardLayout title="Property Management">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading properties...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Property Management">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Your Properties</h1>
          <p className="text-gray-500">
            {filteredProperties.length} of {properties.length} properties displayed
          </p>
        </div>
        <Button asChild className="bg-realestate-teal hover:bg-realestate-teal/90">
          <Link to="/properties/upload">
            <Plus className="mr-2 h-4 w-4" /> Add Property
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search properties..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" /> Status
                {statusFilter.length > 0 && (
                  <Badge className="ml-2 bg-realestate-teal">{statusFilter.length}</Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={statusFilter.includes("forSale")}
                onCheckedChange={() => toggleStatusFilter("forSale")}
              >
                For Sale
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={statusFilter.includes("forRent")}
                onCheckedChange={() => toggleStatusFilter("forRent")}
              >
                For Rent
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" /> Type
                {typeFilter.length > 0 && (
                  <Badge className="ml-2 bg-realestate-teal">{typeFilter.length}</Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={typeFilter.includes("house")}
                onCheckedChange={() => toggleTypeFilter("house")}
              >
                House
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={typeFilter.includes("apartment")}
                onCheckedChange={() => toggleTypeFilter("apartment")}
              >
                Apartment
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={typeFilter.includes("condo")}
                onCheckedChange={() => toggleTypeFilter("condo")}
              >
                Condo
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={typeFilter.includes("commercial")}
                onCheckedChange={() => toggleTypeFilter("commercial")}
              >
                Commercial
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {(searchTerm || statusFilter.length > 0 || typeFilter.length > 0) && (
            <Button variant="ghost" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Property Cards */}
      {filteredProperties.length === 0 ? (
        <Card className="p-8 text-center">
          <div className="mb-4">
            <Building className="h-12 w-12 mx-auto text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No properties found</h3>
          <p className="text-gray-500 mb-6">
            {properties.length === 0
              ? "Start building your portfolio by adding your first property."
              : "No properties match your current filters. Try adjusting your search criteria."}
          </p>
          {properties.length === 0 ? (
            <Button asChild className="bg-realestate-teal hover:bg-realestate-teal/90">
              <Link to="/properties/upload">Add Property</Link>
            </Button>
          ) : (
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}

      {/* Subscription Tier Information */}
      {user?.subscriptionTier === "starter" && (
        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md">
          <div className="flex items-center">
            <div className="mr-4">
              <Badge variant="outline" className="border-blue-500 text-blue-600">
                Starter Plan
              </Badge>
            </div>
            <p className="text-blue-700 text-sm">
              You are using {properties.length} of 20 available property slots.{" "}
              <Link to="/subscription" className="font-medium underline">
                Upgrade to Enterprise
              </Link>{" "}
              for unlimited properties.
            </p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default PropertyManagement;
