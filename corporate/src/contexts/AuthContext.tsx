
import React, { createContext, useContext, useState, useEffect } from "react";

// Define types
interface User {
  id: string;
  name: string;
  email: string;
  companyName: string;
  subscriptionTier: "starter" | "enterprise" | null;
  role: "individual" | "enterprise";
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for demonstration purposes
const MOCK_USER: User = {
  id: "1",
  name: "John Smith",
  email: "john@realestate.com",
  companyName: "Smith Real Estate",
  subscriptionTier: "starter",
  role: "enterprise"
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // This would normally be an API call
      // For demo, we'll use the mock user
      setUser(MOCK_USER);
      localStorage.setItem("user", JSON.stringify(MOCK_USER));
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
