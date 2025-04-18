
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Users, 
  Home, 
  Building2, 
  CreditCard, 
  TicketCheck, 
  Settings, 
  LogOut,
  DollarSign,
  Flag,
  Box
} from "lucide-react";

export const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const mainMenuItems = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: Users,
    },
    {
      title: "Properties",
      url: "/admin/properties",
      icon: Building2,
    },
    {
      title: "Subscriptions",
      url: "/admin/subscriptions",
      icon: CreditCard,
    },
    {
      title: "Marketplace",
      url: "/admin/marketplace",
      icon: Box,
    },
    {
      title: "Payments",
      url: "/admin/payments",
      icon: DollarSign,
    },
    {
      title: "Support",
      url: "/admin/support",
      icon: TicketCheck,
    },
    {
      title: "Reports",
      url: "/admin/reports",
      icon: Flag,
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings,
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center p-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-admin-primary" />
          <div>
            <h1 className="text-lg font-bold">Estate Nexus</h1>
            <p className="text-xs text-muted-foreground">Admin Portal</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={
                      (item.url === "/admin"
                        ? currentPath === "/admin"
                        : currentPath.startsWith(item.url))
                        ? "bg-muted text-foreground"
                        : ""
                    }
                  >
                    <Link to={item.url} className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="h-5 w-5 mr-3" />
                    <span>Back to Site</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/logout" className="flex items-center">
                    <LogOut className="h-5 w-5 mr-3" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
