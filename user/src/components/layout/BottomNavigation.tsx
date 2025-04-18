
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Building, Store, MessageSquare, User } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Building, label: "Portfolio", path: "/portfolio" },
    { icon: Store, label: "Marketplace", path: "/marketplace" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: User, label: "Profile", path: "/profile" },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-kadestate-neutral-300 bg-white flex justify-around items-center h-16 z-10">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`bottom-nav-item ${isActive ? "active" : ""}`}
          >
            <item.icon className="bottom-nav-item-icon" />
            <span className="bottom-nav-item-text">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
