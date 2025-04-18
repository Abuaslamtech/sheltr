
import React from "react";
import { 
  Users, 
  Building2, 
  CreditCard, 
  Camera, 
  TrendingUp, 
  DollarSign 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardStats } from "@/services/adminMockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area
} from "recharts";

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">Admin Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="admin-stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-admin-primary">{dashboardStats.individualUsers.toLocaleString()}</span> Individual, <span className="text-admin-secondary">{dashboardStats.corporateUsers.toLocaleString()}</span> Corporate
            </p>
          </CardContent>
        </Card>
        
        <Card className="admin-stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.activeSubscriptions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+24</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="admin-stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Property Uploads</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.propertyUploads.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+56</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="admin-stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">3D Tour Requests</CardTitle>
            <Camera className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.tourRequests.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+13</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="admin-stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${dashboardStats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+$2,480</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="admin-stat-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.monthlySales.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+7</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={dashboardStats.userGrowth}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="individual" 
                    name="Individual Users" 
                    stackId="1" 
                    stroke="#8B5CF6" 
                    fill="#8B5CF6" 
                    fillOpacity={0.6} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="corporate" 
                    name="Corporate Users" 
                    stackId="1" 
                    stroke="#6E59A5" 
                    fill="#6E59A5" 
                    fillOpacity={0.6} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={dashboardStats.revenueData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => ['$' + value.toLocaleString(), 'Revenue']} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    name="Revenue"
                    stroke="#10B981"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 mb-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Property Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dashboardStats.propertyData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="uploads" name="Property Uploads" fill="#8B5CF6" />
                  <Bar dataKey="tours" name="3D Tour Requests" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-md border p-4">
                <Building2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">New Property Listed</p>
                  <p className="text-sm text-muted-foreground">
                    Acme Real Estate added "Luxury Downtown Condo" to their listings.
                  </p>
                  <p className="text-xs text-muted-foreground">10 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-md border p-4">
                <Users className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">New User Registration</p>
                  <p className="text-sm text-muted-foreground">
                    Sarah Johnson registered an individual account.
                  </p>
                  <p className="text-xs text-muted-foreground">45 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-md border p-4">
                <CreditCard className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Subscription Upgrade</p>
                  <p className="text-sm text-muted-foreground">
                    John Smith upgraded from Basic to Premium subscription.
                  </p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">API Health</p>
                  <p className="text-sm text-muted-foreground">All systems operational</p>
                </div>
                <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Payment Processor</p>
                  <p className="text-sm text-muted-foreground">Connected and processing</p>
                </div>
                <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">3D Tour Provider</p>
                  <p className="text-sm text-muted-foreground">Connected and operational</p>
                </div>
                <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Support System</p>
                  <p className="text-sm text-muted-foreground">Active with 3 open tickets</p>
                </div>
                <div className="flex h-2 w-2 rounded-full bg-yellow-500"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Database Status</p>
                  <p className="text-sm text-muted-foreground">Running optimally</p>
                </div>
                <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
