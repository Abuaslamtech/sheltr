
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, FileCheck, AlertCircle } from "lucide-react";

const Marketplace = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">Marketplace Management</h1>
      
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500">+12</span> from last week
              </p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground mt-1">
                Need review before publishing
              </p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Reported Listings</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-red-500">+1</span> from last week
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Marketplace Overview</CardTitle>
            <CardDescription>
              Manage public listings and quality control for the marketplace.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Marketplace management functionality coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Marketplace;
