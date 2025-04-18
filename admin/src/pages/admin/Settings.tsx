import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CustomBadge } from "@/components/ui/custom-badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">System Settings</h1>
      
      <div className="grid gap-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure system-wide settings and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Platform Name</Label>
                  <Input id="site-name" value="Estate Nexus" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input id="admin-email" value="admin@estatenexus.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="america-new-york">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-new-york">America/New York</SelectItem>
                      <SelectItem value="america-chicago">America/Chicago</SelectItem>
                      <SelectItem value="america-denver">America/Denver</SelectItem>
                      <SelectItem value="america-los-angeles">America/Los Angeles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Content Moderation</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-approve-individual">Auto-approve Individual Listings</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically approve property listings from individual users.
                      </p>
                    </div>
                    <Switch id="auto-approve-individual" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-approve-corporate">Auto-approve Corporate Listings</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically approve property listings from corporate users.
                      </p>
                    </div>
                    <Switch id="auto-approve-corporate" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="content-filter">Content Filter</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable AI content filtering for property descriptions.
                      </p>
                    </div>
                    <Switch id="content-filter" checked={true} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage security options for the platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Require 2FA for all administrator accounts.
                    </p>
                  </div>
                  <Switch id="two-factor" checked={true} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="session-timeout">Session Timeout</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically log out inactive administrators.
                    </p>
                  </div>
                  <Switch id="session-timeout" checked={true} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeout-duration">Timeout Duration (minutes)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger id="timeout-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="120">120 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password Policy</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="minimum-length">Minimum Password Length</Label>
                    </div>
                    <Select defaultValue="8">
                      <SelectTrigger id="minimum-length" className="w-[100px]">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="16">16</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="require-special">Require Special Characters</Label>
                    </div>
                    <Switch id="require-special" checked={true} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Third-Party Integrations</CardTitle>
                <CardDescription>
                  Configure external services and APIs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Processor</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Payment Gateway</Label>
                      <p className="text-sm text-muted-foreground">
                        Manage payment processing integration.
                      </p>
                    </div>
                    <CustomBadge variant="success" className="bg-green-50 text-green-700 border-green-200">
                      Connected
                    </CustomBadge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">3D Tour Provider</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <Input id="api-key" value="•••••••••••••••••••••••••••" type="password" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Integration Status</Label>
                    </div>
                    <CustomBadge variant="success" className="bg-green-50 text-green-700 border-green-200">
                      Connected
                    </CustomBadge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Service</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email-provider">Email Provider</Label>
                    <Select defaultValue="aws-ses">
                      <SelectTrigger id="email-provider">
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aws-ses">Amazon SES</SelectItem>
                        <SelectItem value="sendgrid">SendGrid</SelectItem>
                        <SelectItem value="mailchimp">Mailchimp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure system notifications and alerts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Admin Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="new-users">New User Registrations</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts when new users register.
                      </p>
                    </div>
                    <Switch id="new-users" checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="support-tickets">Support Tickets</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for new support tickets.
                      </p>
                    </div>
                    <Switch id="support-tickets" checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="payment-issues">Payment Issues</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts for payment failures or disputes.
                      </p>
                    </div>
                    <Switch id="payment-issues" checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="property-reports">Property Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts when properties are reported.
                      </p>
                    </div>
                    <Switch id="property-reports" checked={true} />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Reports</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="report-frequency">Report Frequency</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger id="report-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="report-recipients">Report Recipients</Label>
                    <Input id="report-recipients" value="admin@estatenexus.com, reports@estatenexus.com" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
