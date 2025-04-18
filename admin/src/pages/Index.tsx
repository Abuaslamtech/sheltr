
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-12 w-12 text-admin-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Estate Nexus</h1>
          <p className="text-xl text-gray-600 mb-8">Digital Property Portfolio Management Platform</p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-admin-primary" />
                <span>Admin Module</span>
              </CardTitle>
              <CardDescription>
                Access the comprehensive administrative dashboard for managing users, properties, subscriptions and more.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Link to="/admin">
                <Button size="lg" className="gap-2">
                  <span>Access Admin Panel</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
