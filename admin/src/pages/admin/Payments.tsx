
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, FileText } from "lucide-react";

const Payments = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">Payment Management</h1>
      
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$58,720</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500">+6.3%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,534</div>
              <p className="text-xs text-muted-foreground mt-1">
                Past 30 days
              </p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Payment Disputes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">
                Needs resolution
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Payment Management</CardTitle>
            <CardDescription>
              Monitor transactions and handle payment-related issues.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Payment management functionality coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payments;
