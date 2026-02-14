import React from "react";
import Navbar from "./Navbar";
import { AppScreen } from "../types";

interface LayoutProps {
  children: React.ReactNode;
  showNav: boolean;
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showNav,
  activeScreen,
  onNavigate,
}) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {showNav && (
        <Navbar activeScreen={activeScreen} onNavigate={onNavigate} />
      )}

      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};

export default Layout;
