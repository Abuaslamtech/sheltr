
import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface AppLayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
}

const AppLayout = ({ children, hideNavigation = false }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-kadestate-neutral-100 flex flex-col">
      <main className="flex-1 pb-16">
        {children}
      </main>
      {!hideNavigation && <BottomNavigation />}
    </div>
  );
};

export default AppLayout;
