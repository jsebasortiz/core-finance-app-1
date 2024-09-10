import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  ExitToApp as ExitToAppIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
  Store as StoreIcon,
  Inventory as InventoryIcon,
  Category as CategoryIcon,
  Apartment as DepartmentIcon,
  LocationCity as CityIcon,
  MonetizationOn as CurrencyIcon,
  AccountTree as PucArbolIcon,
  AccountTreeOutlined as PucArbol2Icon,
  Build as ResourcesIcon,
  PlaylistAddCheck as ExecutionIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../../Header/components/Header";

const MainMenu: React.FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(true); // Estado para controlar si el menú está colapsado
  const [isHovered, setIsHovered] = useState<boolean>(false); // Estado para manejar hover sobre el menú
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false); // Estado para manejar si el menú está fijado

  // Función para alternar entre colapsar, fijar y expandir el menú permanentemente
  const handleToggleMenu = () => {
    if (isMenuFixed) {
      setIsMenuFixed(false); // Ya no está fijado
      setIsMenuCollapsed(true); // Colapsamos el menú
    } else {
      setIsMenuFixed(true); // Fijamos el menú
      setIsMenuCollapsed(false); // Expandimos el menú
    }
  };

  // Funciones para manejar hover en el menú
  const handleMouseEnter = () => {
    if (isMenuCollapsed && !isMenuFixed) {
      setIsHovered(true); // Expandir el menú al pasar el cursor cuando está colapsado
    }
  };

  const handleMouseLeave = () => {
    if (isMenuCollapsed && !isMenuFixed) {
      setIsHovered(false); // Volver a colapsar el menú cuando el cursor sale
    }
  };

  // Opciones del menú
  const menuOptions = [
    { path: "/company", label: "Empresa", icon: <BusinessIcon /> },
    {
      path: "/economicActivity",
      label: "Actividad Económica",
      icon: <WorkIcon />,
    },
    { path: "/branch", label: "Sucursal (SUC)", icon: <StoreIcon /> },
    { path: "/inventory", label: "Inventario (IVT)", icon: <InventoryIcon /> },
    { path: "/category", label: "Categorías (CAT)", icon: <CategoryIcon /> },
    { path: "/department", label: "Departamentos (DEPS)", icon: <DepartmentIcon /> },
    { path: "/city", label: "Localidad (LCD)", icon: <CityIcon /> },
    { path: "/currencyType", label: "Tipo de moneda (TDM)", icon: <CurrencyIcon /> },
    { path: "/arbol", label: "PUC Árbol (ARB)", icon: <PucArbolIcon /> },
    { path: "/arbol2", label: "PUC Árbol 2 (ARB2)", icon: <PucArbol2Icon /> },
    { path: "/recursos", label: "Recursos (RCS)", icon: <ResourcesIcon /> },
    { path: "/ejecuciones", label: "Ejecuciones (EJS)", icon: <ExecutionIcon /> },
  ];

  return (
    <>
      <Header />

      {/* Barra lateral */}
      <div
        className={`vertical-layout vertical-menu-modern ${
          isMenuCollapsed
            ? isHovered
              ? "menu-hovered" // Expandir temporalmente cuando el cursor está sobre el menú colapsado
              : "menu-collapsed"
            : "menu-expanded"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="main-menu menu-light menu-accordion menu-shadow"
          data-scroll-to-active="true"
        >
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item me-auto">
                <a className="navbar-brand" href="#">
                  <span className="brand-logo">
                    <img
                      src="./app-assets/images/ico/R2.png"
                      alt="Logo"
                      height="40"
                    />
                  </span>
                  {(!isMenuCollapsed || isHovered) && (
                    <h2 className="brand-text" style={{ color: "red" }}>
                      Univalle
                    </h2>
                  )}
                </a>
              </li>

              {/* Botón para ocultar/mostrar/fijar el menú */}
              <li className="nav-item nav-toggle">
                <a
                  className="nav-link modern-nav-toggle pe-0"
                  onClick={handleToggleMenu}
                >
                  {isMenuFixed ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x d-block text-primary toggle-icon font-medium-4"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : isMenuCollapsed ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-circle d-block text-secondary toggle-icon font-medium-4"
                      style={{ color: "gray" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-circle d-block text-secondary toggle-icon font-medium-4"
                      style={{ color: "gray" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  )}
                </a>
              </li>
            </ul>
          </div>
          <div className="shadow-bottom"></div>

          <div className="main-menu-content">
            <ul
              className="navigation navigation-main"
              id="main-menu-navigation"
              data-menu="menu-navigation"
            >
              {menuOptions.map((option, index) => (
                <li className="nav-item d-flex align-items-center" key={index}>
                  <Link
                    to={option.path}
                    className="d-flex align-items-center"
                    style={{ textDecoration: "none", color: "inherit" }} // Elimina el subrayado
                  >
                    {option.icon}
                    {(!isMenuCollapsed || isHovered) && (
                      <span className="menu-item text-truncate">
                        {option.label}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-footer">
            <ul className="nav navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item">
                <Button
                  variant="link"
                  className="nav-link"
                  onClick={() => console.log("Cerrar sesión")}
                >
                  <ExitToAppIcon />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
