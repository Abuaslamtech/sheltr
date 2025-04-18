import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomBadge } from "@/components/ui/custom-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search, MoreHorizontal, Download, Building2, CheckCircle, AlertCircle, Camera
} from "lucide-react";
import { propertyMockData } from "@/services/adminMockData";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listingType, setListingType] = useState("all");
  const [ownerType, setOwnerType] = useState("all");
  const [verificationStatus, setVerificationStatus] = useState("all");
  
  const filteredProperties = propertyMockData.filter(property => {
    const searchMatch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        property.owner.toLowerCase().includes(searchTerm.toLowerCase());
    
    const listingTypeMatch = listingType === 'all' || property.listingType === listingType;
    
    const ownerTypeMatch = ownerType === 'all' || property.ownerType === ownerType;
    
    const verificationMatch = verificationStatus === 'all' || property.verificationStatus === verificationStatus;
    
    return searchMatch && listingTypeMatch && ownerTypeMatch && verificationMatch;
  });

  const formatPrice = (price: number, listingType: string) => {
    return listingType === 'rent' 
      ? `$${price.toLocaleString()}/mo`
      : `$${price.toLocaleString()}`;
  };

  const getVerificationBadgeVariant = (status: string) => {
    switch (status) {
      case "verified":
        return "success";
      case "pending":
        return "warning";
      case "rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">Property Management</h1>

      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search properties..."
                className="pl-8 w-full md:w-[250px] bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={listingType} onValueChange={setListingType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Listing Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Listing Type</SelectLabel>
                    <SelectItem value="all">All Listings</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={ownerType} onValueChange={setOwnerType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Owner Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Owner Type</SelectLabel>
                    <SelectItem value="all">All Owners</SelectItem>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={verificationStatus} onValueChange={setVerificationStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Verification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Verification Status</SelectLabel>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{propertyMockData.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-admin-primary">{propertyMockData.filter(p => p.ownerType === 'individual').length}</span> Individual, <span className="text-admin-secondary">{propertyMockData.filter(p => p.ownerType === 'corporate').length}</span> Corporate
              </p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Verification Status</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {propertyMockData.filter(p => p.verificationStatus === 'verified').length} Verified
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-yellow-500">{propertyMockData.filter(p => p.verificationStatus === 'pending').length}</span> Pending Verification
              </p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">3D Tours</CardTitle>
              <Camera className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {propertyMockData.filter(p => p.has3DTour).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((propertyMockData.filter(p => p.has3DTour).length / propertyMockData.length) * 100)}% of all properties
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Properties</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-background">
                  <Building2 className="h-3.5 w-3.5 mr-1" />
                  {filteredProperties.length} properties
                </Badge>
              </div>
            </div>
            <CardDescription>
              Manage and monitor property listings across the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Property</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Verification</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{property.title}</div>
                          <div className="text-xs text-muted-foreground">{property.address}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div>{property.owner}</div>
                          <Badge variant="outline" className="capitalize mt-1">
                            {property.ownerType}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={property.listingType === 'rent' ? 'secondary' : 'default'} className="capitalize">
                          For {property.listingType}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {formatPrice(property.price, property.listingType)}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <span>{property.bedrooms} bed</span>
                          {property.bedrooms > 0 && <span> • </span>}
                          <span>{property.bathrooms} bath</span>
                          {property.has3DTour && (
                            <>
                              <span> • </span>
                              <span className="flex items-center text-admin-primary">
                                <Camera className="h-3.5 w-3.5 mr-1" />
                                3D Tour
                              </span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <CustomBadge 
                          variant={getVerificationBadgeVariant(property.verificationStatus)}
                          className="capitalize"
                        >
                          {property.verificationStatus}
                        </CustomBadge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit property</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {property.verificationStatus === 'pending' && (
                              <>
                                <DropdownMenuItem>Verify property</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Reject property</DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuItem className="text-destructive">Remove listing</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10">
                      <div className="flex flex-col items-center justify-center">
                        <Building2 className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No properties found with the current filters</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Properties;
