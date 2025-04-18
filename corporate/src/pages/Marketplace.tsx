
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Store, Search, Filter, MapPin, SlidersHorizontal } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "@/components/PropertyCard";
import { getProperties } from "@/services/mockData";
import { Property, PropertyStatus, PropertyType } from "@/types";

const Marketplace = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<PropertyStatus[]>([]);
  const [typeFilter, setTypeFilter] = useState<PropertyType[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [bedroomsFilter, setBedroomsFilter] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState("newest");
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

    // Apply price range filter
    result = result.filter(
      (property) => property.price >= priceRange.min && property.price <= priceRange.max
    );

    // Apply bedrooms filter
    if (bedroomsFilter !== null) {
      result = result.filter((property) => property.bedrooms >= bedroomsFilter);
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "price_low_high":
          return a.price - b.price;
        case "price_high_low":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFilteredProperties(result);
  }, [searchTerm, statusFilter, typeFilter, priceRange, bedroomsFilter, sortOption, properties]);

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

  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setPriceRange((prev) => ({ ...prev, min: value }));
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setPriceRange((prev) => ({ ...prev, max: value }));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter([]);
    setTypeFilter([]);
    setPriceRange({ min: 0, max: 10000000 });
    setBedroomsFilter(null);
    setSortOption("newest");
  };

  if (isLoading) {
    return (
      <DashboardLayout title="Marketplace">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading marketplace properties...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Marketplace">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            <Store className="mr-2 h-6 w-6" />
            Property Marketplace
          </h1>
          <p className="text-gray-500">
            Browse all available properties from our network of professionals
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-4 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </h2>
              {(searchTerm || statusFilter.length > 0 || typeFilter.length > 0 || bedroomsFilter !== null) && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <Label>Property Status</Label>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant={statusFilter.includes("forSale") ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleStatusFilter("forSale")}
                    className={statusFilter.includes("forSale") ? "bg-realestate-forsale hover:bg-realestate-forsale/90" : ""}
                  >
                    For Sale
                  </Button>
                  <Button
                    variant={statusFilter.includes("forRent") ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleStatusFilter("forRent")}
                    className={statusFilter.includes("forRent") ? "bg-realestate-forrent hover:bg-realestate-forrent/90" : ""}
                  >
                    For Rent
                  </Button>
                </div>
              </div>

              <div>
                <Label>Property Type</Label>
                <div className="mt-2 space-y-2">
                  <CheckboxItem
                    label="House"
                    checked={typeFilter.includes("house")}
                    onChange={() => toggleTypeFilter("house")}
                  />
                  <CheckboxItem
                    label="Apartment"
                    checked={typeFilter.includes("apartment")}
                    onChange={() => toggleTypeFilter("apartment")}
                  />
                  <CheckboxItem
                    label="Condo"
                    checked={typeFilter.includes("condo")}
                    onChange={() => toggleTypeFilter("condo")}
                  />
                  <CheckboxItem
                    label="Commercial"
                    checked={typeFilter.includes("commercial")}
                    onChange={() => toggleTypeFilter("commercial")}
                  />
                </div>
              </div>

              <div>
                <Label>Price Range</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min || ""}
                      onChange={handlePriceMinChange}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max || ""}
                      onChange={handlePriceMaxChange}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label>Bedrooms</Label>
                <Select
                  value={bedroomsFilter?.toString() || ""}
                  onValueChange={(value) => setBedroomsFilter(value ? parseInt(value) : null)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Sort */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by location, title, or description..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10"
              />
            </div>
            <div className="w-full sm:w-48">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price_low_high">Price: Low to High</SelectItem>
                  <SelectItem value="price_high_low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-gray-500">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </div>

          {/* Property Cards */}
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <Store className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="text-lg font-medium mt-4 mb-2">No properties found</h3>
              <p className="text-gray-500 mb-6">
                No properties match your current filters. Try adjusting your search criteria.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

// Helper components
const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm font-medium">{children}</div>
);

const CheckboxItem = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-realestate-teal rounded border-gray-300 focus:ring-realestate-teal"
    />
    <label className="ml-2 text-sm">{label}</label>
  </div>
);

export default Marketplace;
