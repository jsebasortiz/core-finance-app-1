import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "./NavBar/Components/navBar.tsx";
import Header from "./Header/components/Header.tsx";
import Footer from "./Footer/components/Footer.js";
const Layout: React.FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <>
      {/* Renderiza solo un Header */}
      <Header isMenuCollapsed={isMenuCollapsed} />
      <MainMenu
        isMenuCollapsed={isMenuCollapsed}
        setIsMenuCollapsed={setIsMenuCollapsed}
      />
      <div
        className={`app-content ${
          isMenuCollapsed ? "menu-collapsed" : "menu-expanded"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
