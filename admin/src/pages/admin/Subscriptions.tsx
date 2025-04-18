
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, DollarSign, Users, ArrowUpDown, Download, PieChart } from "lucide-react";
import { subscriptionMockData } from "@/services/adminMockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartPieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";

const Subscriptions = () => {
  // Mock data for charts
  const subscriptionGrowthData = [
    { month: "Jan", basic: 640, premium: 420, professional: 95, enterprise: 75 },
    { month: "Feb", basic: 680, premium: 440, professional: 100, enterprise: 80 },
    { month: "Mar", basic: 720, premium: 460, professional: 110, enterprise: 85 },
    { month: "Apr", basic: 730, premium: 480, professional: 115, enterprise: 88 },
    { month: "May", basic: 750, premium: 500, professional: 118, enterprise: 90 },
    { month: "Jun", basic: 760, premium: 510, professional: 120, enterprise: 92 },
    { month: "Jul", basic: 770, premium: 520, professional: 122, enterprise: 94 },
    { month: "Aug", basic: 780, premium: 530, professional: 123, enterprise: 95 },
    { month: "Sep", basic: 765, premium: 535, professional: 121, enterprise: 96 },
    { month: "Oct", basic: 768, premium: 542, professional: 124, enterprise: 98 },
    { month: "Nov", basic: 768, premium: 542, professional: 124, enterprise: 98 },
    { month: "Dec", basic: 768, premium: 542, professional: 124, enterprise: 98 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 23450 },
    { month: "Feb", revenue: 24780 },
    { month: "Mar", revenue: 26450 },
    { month: "Apr", revenue: 27890 },
    { month: "May", revenue: 29340 },
    { month: "Jun", revenue: 30450 },
    { month: "Jul", revenue: 31780 },
    { month: "Aug", revenue: 32680 },
    { month: "Sep", revenue: 33450 },
    { month: "Oct", revenue: 34620 },
    { month: "Nov", revenue: 35780 },
    { month: "Dec", revenue: 36920 },
  ];

  const subscriptionDistribution = [
    { name: "Basic", value: 768, color: "#8B5CF6" },
    { name: "Premium", value: 542, color: "#6E59A5" },
    { name: "Professional", value: 124, color: "#10B981" },
    { name: "Enterprise", value: 98, color: "#3B82F6" },
  ];

  const totalActiveSubscriptions = subscriptionDistribution.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const monthlyRecurringRevenue = subscriptionMockData.reduce(
    (sum, plan) => sum + plan.monthlyPrice * plan.activeUsers,
    0
  );

  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">Subscription Management</h1>

      <div className="grid gap-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalActiveSubscriptions.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Across all subscription tiers
              </div>
            </CardContent>
          </Card>

          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${monthlyRecurringRevenue.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Monthly recurring revenue
              </div>
            </CardContent>
          </Card>

          <Card className="admin-stat-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Revenue Per User</CardTitle>
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${(monthlyRecurringRevenue / totalActiveSubscriptions).toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500">+$1.25</span> from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Subscription Growth</CardTitle>
              <CardDescription>
                Monthly active subscriptions by plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={subscriptionGrowthData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="basic"
                      name="Basic Plan"
                      stroke="#8B5CF6"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="premium"
                      name="Premium Plan"
                      stroke="#6E59A5"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="professional"
                      name="Professional Plan"
                      stroke="#10B981"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="enterprise"
                      name="Enterprise Plan"
                      stroke="#3B82F6"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Subscription Distribution</CardTitle>
              <CardDescription>
                Active users by plan
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartPieChart>
                    <Pie
                      data={subscriptionDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {subscriptionDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, 'Active Users']} />
                    <Legend />
                  </RechartPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
            <CardDescription>Subscription revenue over the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={revenueData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => ['$' + value.toLocaleString(), 'Revenue']} />
                  <Legend />
                  <Bar dataKey="revenue" name="Monthly Revenue" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Plans */}
        <h2 className="admin-section-title mt-6">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {subscriptionMockData.map((plan) => (
            <Card key={plan.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{plan.plan}</CardTitle>
                  <Badge variant="outline" className="capitalize">
                    {plan.userType}
                  </Badge>
                </div>
                <CardDescription>
                  <span className="text-2xl font-bold">
                    ${plan.monthlyPrice.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">
                    <Users className="h-3.5 w-3.5 mr-1" />
                    {plan.activeUsers.toLocaleString()} active users
                  </Badge>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Edit Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
