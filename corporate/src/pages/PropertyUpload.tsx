import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building,
  Upload,
  MapPin,
  Home,
  DollarSign,
  BedDouble,
  Bath,
  SquareCode,
  CalendarClock,
  Tag,
  Box,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createProperty } from "@/services/mockData";
import { PropertyStatus, PropertyType } from "@/types";

const PropertyUpload = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "USA",
    },
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 0,
    yearBuilt: new Date().getFullYear(),
    status: "forSale" as PropertyStatus,
    type: "house" as PropertyType,
    images: [] as string[],
    hasVideo: false,
    has3DTour: false,
    features: [] as string[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    } as typeof prev));
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const features = e.target.value.split(",").map((feature) => feature.trim());
    setFormData((prev) => ({
      ...prev,
      features,
    }));
  };

  const handleImageUpload = () => {
    setFormData((prev) => ({
      ...prev,
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ],
    }));

    toast({
      title: "Images uploaded",
      description: "2 images have been successfully uploaded.",
    });
  };

  const toggleHasVideo = () => {
    setFormData((prev) => ({
      ...prev,
      hasVideo: !prev.hasVideo,
    }));
  };

  const toggleHas3DTour = () => {
    setFormData((prev) => ({
      ...prev,
      has3DTour: !prev.has3DTour,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.title || !formData.description || !formData.address.street || formData.images.length === 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and upload at least one image.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const newProperty = await createProperty(formData);
      
      toast({
        title: "Property added successfully",
        description: "Your property has been added to your portfolio.",
      });
      
      navigate("/properties");
    } catch (error) {
      console.error("Error submitting property:", error);
      
      toast({
        title: "Error adding property",
        description: "There was an error adding your property. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout title="Add New Property">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5" />
                  Basic Information
                </CardTitle>
                <CardDescription>Enter the basic details about your property</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Property Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Luxury Beachfront Villa"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your property in detail..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Listing Status *</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => handleSelectChange("status", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="forSale">For Sale</SelectItem>
                        <SelectItem value="forRent">For Rent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Property Type *</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => handleSelectChange("type", value as PropertyType)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Location Information
                </CardTitle>
                <CardDescription>Enter the address and location details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="address.street">Street Address *</Label>
                  <Input
                    id="address.street"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    placeholder="e.g. 123 Main Street"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address.city">City *</Label>
                    <Input
                      id="address.city"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      placeholder="e.g. New York"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address.state">State *</Label>
                    <Input
                      id="address.state"
                      name="address.state"
                      value={formData.address.state}
                      onChange={handleInputChange}
                      placeholder="e.g. NY"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address.zip">ZIP Code *</Label>
                    <Input
                      id="address.zip"
                      name="address.zip"
                      value={formData.address.zip}
                      onChange={handleInputChange}
                      placeholder="e.g. 10001"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-5 w-5" />
                  Property Details
                </CardTitle>
                <CardDescription>Enter the specifications of your property</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">
                      {formData.status === "forSale" ? "Sale Price *" : "Monthly Rent *"}
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price || ""}
                        onChange={handleNumberChange}
                        placeholder="e.g. 500000"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yearBuilt">Year Built</Label>
                    <div className="relative">
                      <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        id="yearBuilt"
                        name="yearBuilt"
                        type="number"
                        value={formData.yearBuilt || ""}
                        onChange={handleNumberChange}
                        placeholder="e.g. 2010"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <div className="relative">
                      <BedDouble className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        id="bedrooms"
                        name="bedrooms"
                        type="number"
                        value={formData.bedrooms || ""}
                        onChange={handleNumberChange}
                        placeholder="e.g. 3"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <div className="relative">
                      <Bath className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        id="bathrooms"
                        name="bathrooms"
                        type="number"
                        value={formData.bathrooms || ""}
                        onChange={handleNumberChange}
                        placeholder="e.g. 2"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="squareFeet">Square Feet</Label>
                    <div className="relative">
                      <SquareCode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        id="squareFeet"
                        name="squareFeet"
                        type="number"
                        value={formData.squareFeet || ""}
                        onChange={handleNumberChange}
                        placeholder="e.g. 2000"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features">Features (comma separated)</Label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input
                      id="features"
                      value={formData.features.join(", ")}
                      onChange={handleFeaturesChange}
                      placeholder="e.g. Fireplace, Pool, Garden, Garage"
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  Media Upload
                </CardTitle>
                <CardDescription>Upload images, videos, and 3D tours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-2 block">Images *</Label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    {formData.images.length > 0 ? (
                      <div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {formData.images.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={image}
                                alt={`Property ${index + 1}`}
                                className="h-40 w-full object-cover rounded-md"
                              />
                              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                Image {index + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleImageUpload}
                        >
                          Upload More Images
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">
                          Drag and drop image files or
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-2"
                          onClick={handleImageUpload}
                        >
                          Browse Files
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Label className="mb-2 block">Video Tour</Label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      {formData.hasVideo ? (
                        <div>
                          <div className="bg-blue-50 p-4 rounded-md mb-2">
                            <p className="text-sm text-blue-700">Video uploaded successfully</p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={toggleHasVideo}
                          >
                            Remove Video
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Upload className="mx-auto h-8 w-8 text-gray-400" />
                          <p className="mt-2 text-xs text-gray-500">Upload a video tour</p>
                          <Button
                            type="button"
                            variant="outline"
                            className="mt-2"
                            size="sm"
                            onClick={toggleHasVideo}
                          >
                            Add Video
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <Label className="mb-2 block">3D Tour</Label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      {formData.has3DTour ? (
                        <div>
                          <div className="bg-purple-50 p-4 rounded-md mb-2">
                            <div className="flex items-center">
                              <Box className="h-5 w-5 text-purple-600 mr-2" />
                              <p className="text-sm text-purple-700">3D tour added</p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={toggleHas3DTour}
                          >
                            Remove 3D Tour
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Box className="mx-auto h-8 w-8 text-gray-400" />
                          <p className="mt-2 text-xs text-gray-500">Add a 3D virtual tour</p>
                          <Button
                            type="button"
                            variant="outline"
                            className="mt-2"
                            size="sm"
                            onClick={toggleHas3DTour}
                          >
                            Add 3D Tour
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/properties")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-realestate-teal hover:bg-realestate-teal/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Add Property"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default PropertyUpload;
