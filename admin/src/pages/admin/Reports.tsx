
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, FileText, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">Reports</h1>
      
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Available Reports</h2>
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            <span>Export All</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>User Activity</CardTitle>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Analyze user engagement and activity patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Generate</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Revenue</CardTitle>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Financial performance and revenue streams
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Generate</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Property Insights</CardTitle>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Listing performance and property analytics
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Generate</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Support Metrics</CardTitle>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Response times and ticket resolutions
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Generate</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>3D Tours</CardTitle>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                3D tour usage and engagement metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Generate</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>System Performance</CardTitle>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                System health and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Generate</span>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
            <CardDescription>
              Set up automatic report generation and email delivery
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Scheduled reports functionality coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
