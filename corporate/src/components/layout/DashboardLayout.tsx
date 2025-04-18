
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Building, 
  Home, 
  Plus, 
  Store, 
  CreditCard, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X, 
  User 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-realestate-navy text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto lg:h-screen",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-realestate-teal" />
            <span className="ml-2 text-xl font-bold">EstatePortfolio</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-md lg:hidden focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6">
          <div className="px-4 py-2">
            <div className="text-xs uppercase tracking-wider text-gray-400">
              Main
            </div>
            <div className="mt-3 space-y-1">
              <Link 
                to="/dashboard" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-700"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link 
                to="/properties" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-700"
              >
                <Building className="mr-3 h-5 w-5" />
                Properties
              </Link>
              <Link 
                to="/properties/upload" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-700"
              >
                <Plus className="mr-3 h-5 w-5" />
                Add Property
              </Link>
              <Link 
                to="/marketplace" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-700"
              >
                <Store className="mr-3 h-5 w-5" />
                Marketplace
              </Link>
              <Link 
                to="/subscription" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-700"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Subscription
              </Link>
              <Link 
                to="/messages" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-700"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Messages
              </Link>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-0 w-full border-t border-gray-700 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-realestate-teal flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-400">{user?.companyName}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 flex items-center w-full px-4 py-2 text-sm rounded-md hover:bg-gray-700"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-1 rounded-md lg:hidden focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="ml-4 text-2xl font-bold text-gray-800">{title}</h1>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-sm text-gray-700">
                {user?.subscriptionTier === "starter" ? "Starter Plan" : "Enterprise Plan"}
              </span>
              <Button asChild variant="outline" size="sm">
                <Link to="/subscription">
                  Upgrade
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
