import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // Importa Outlet para renderizar las rutas secundarias
import MainMenu from "./NavBar/Components/navBar.tsx";

import Footer from "./Footer/components/Footer.js";

const Layout: React.FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false); // Estado para el menú colapsado

  return (
    <>
      <MainMenu
        isMenuCollapsed={isMenuCollapsed}
        setIsMenuCollapsed={setIsMenuCollapsed}
      />

      {/* Aquí aplicamos las clases dinámicamente al contenido principal */}
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
