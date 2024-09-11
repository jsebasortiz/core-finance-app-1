import React, { Dispatch, SetStateAction, useState } from "react";
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
import "./NavBar.css";

// Definimos la interfaz para las props que va a recibir el componente
interface MainMenuProps {
  isMenuCollapsed: boolean;
  setIsMenuCollapsed: Dispatch<SetStateAction<boolean>>;
}

const MainMenu: React.FC<MainMenuProps> = ({
  isMenuCollapsed,
  setIsMenuCollapsed,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Estado para controlar el término de búsqueda

  // Función para alternar el estado del menú
  const handleToggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  // Funciones para manejar hover en el menú
  const handleMouseEnter = () => {
    if (isMenuCollapsed) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isMenuCollapsed) {
      setIsHovered(false);
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
    {
      path: "/department",
      label: "Departamentos (DEPS)",
      icon: <DepartmentIcon />,
    },
    { path: "/city", label: "Localidad (LCD)", icon: <CityIcon /> },
    {
      path: "/currencyType",
      label: "Tipo de moneda (TDM)",
      icon: <CurrencyIcon />,
    },
    { path: "/arbol", label: "PUC Árbol (ARB)", icon: <PucArbolIcon /> },
    { path: "/arbol2", label: "PUC Árbol 2 (ARB2)", icon: <PucArbol2Icon /> },
    { path: "/recursos", label: "Recursos (RCS)", icon: <ResourcesIcon /> },
    {
      path: "/ejecuciones",
      label: "Ejecuciones (EJS)",
      icon: <ExecutionIcon />,
    },
  ];

  // Filtrar opciones del menú basado en el término de búsqueda
  const filteredMenuOptions = menuOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header isMenuCollapsed={false} />
      {/* Barra lateral */}
      <div
        className={`vertical-layout vertical-menu-modern ${
          isMenuCollapsed
            ? isHovered
              ? "menu-hovered"
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
              {/* Botón para ocultar/mostrar el menú */}
              <li className="nav-item nav-toggle">
                <a
                  className="nav-link modern-nav-toggle pe-0"
                  onClick={handleToggleMenu}
                >
                  {isMenuCollapsed ? (
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
                      className="feather feather-x d-block text-primary toggle-icon font-medium-4"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  )}
                </a>
              </li>
            </ul>
          </div>

          {/* Campo de búsqueda */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm} // Agregar el valor del término de búsqueda
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el estado del término de búsqueda
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div className="main-menu-content">
            <ul className="navigation navigation-main">
              {filteredMenuOptions.map((option, index) => (
                <li className="nav-item d-flex align-items-center" key={index}>
                  <Link
                    to={option.path}
                    className="d-flex align-items-center"
                    style={{ textDecoration: "none", color: "inherit" }}
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
