import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Search as SearchIcon,
  ExitToApp as ExitToAppIcon,
  Close as CloseIcon,
  ArrowForward,
  Business as BusinessIcon, // Empresa
  Work as WorkIcon, // Actividad Económica
  Store as StoreIcon, // Sucursal
  Inventory as InventoryIcon, // Inventario
  Category as CategoryIcon, // Categorías
  Apartment as DepartmentIcon, // Departamentos
  LocationCity as CityIcon, // Localidad
  MonetizationOn as CurrencyIcon, // Tipo de moneda
  AccountTree as PucArbolIcon, // PUC Árbol
  AccountTreeOutlined as PucArbol2Icon, // PUC Árbol 2
  Build as ResourcesIcon, // Recursos
  PlaylistAddCheck as ExecutionIcon, // Ejecuciones
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../../Header/components/Header";

const MainMenu: React.FC = () => {
  const [searchText, setSearchText] = useState<string>(""); // Estado para la búsqueda
  const [showSearch, setShowSearch] = useState<boolean>(false); // Estado para mostrar/ocultar la barra de búsqueda
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false); // Estado para controlar si el menú está colapsado

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Expande el menú al hacer clic en el botón de búsqueda
  const handleToggleSearch = () => {
    setShowSearch((prevShowSearch) => !prevShowSearch);
    if (isMenuCollapsed) {
      setIsMenuCollapsed(false); // Asegura que el menú se expanda al buscar
    }
  };

  const handleToggleMenu = () => {
    setIsMenuCollapsed((prevIsMenuCollapsed) => !prevIsMenuCollapsed);
  };

  const menuOptions = [
    { path: "/company", label: "Empresa", icon: <BusinessIcon /> },
    {
      path: "/economicActivity",
      label: "Actividad Económica",
      icon: <WorkIcon />,
    },
    { path: "/branch", label: "Sucursal", icon: <StoreIcon /> },
    { path: "/inventory", label: "Inventario", icon: <InventoryIcon /> },
    { path: "/category", label: "Categorías", icon: <CategoryIcon /> },
    { path: "/department", label: "Departamentos", icon: <DepartmentIcon /> },
    { path: "/city", label: "Localidad", icon: <CityIcon /> },
    { path: "/currencyType", label: "Tipo de moneda", icon: <CurrencyIcon /> },
    { path: "/arbol", label: "PUC Árbol", icon: <PucArbolIcon /> },
    { path: "/arbol2", label: "PUC Árbol 2", icon: <PucArbol2Icon /> },
    { path: "/recursos", label: "Recursos", icon: <ResourcesIcon /> },
    { path: "/ejecuciones", label: "Ejecuciones", icon: <ExecutionIcon /> },
  ];

  const filteredMenu = menuOptions.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Header />

      {/* Barra lateral */}
      <div
        className={`vertical-layout vertical-menu-modern ${
          isMenuCollapsed ? "menu-collapsed" : "menu-expanded"
        }`}
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
                  {!isMenuCollapsed && (
                    <h2 className="brand-text" style={{ color: "red" }}>
                      Univalle
                    </h2>
                  )}
                </a>
              </li>
            </ul>
          </div>
          <div className="shadow-bottom"></div>

          {/* Botones de búsqueda y colapsar/expandir */}
          <div
            className="search-toggle"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="link"
              className="nav-link"
              onClick={handleToggleSearch}
              style={{ color: "red" }}
            >
              <SearchIcon style={{ color: "red" }} />
            </Button>
            <Button
              variant="link"
              className="nav-link"
              onClick={handleToggleMenu}
              style={{ color: "red" }}
            >
              {isMenuCollapsed ? <ArrowForward /> : <CloseIcon />}
            </Button>
          </div>

          {/* Campo de búsqueda */}
          {showSearch && (
            <div className="search-input" style={{ textAlign: "center" }}>
              <input
                className="form-control input"
                type="text"
                placeholder="Buscar en el menú..."
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
          )}

          <div className="main-menu-content">
            <ul
              className="navigation navigation-main"
              id="main-menu-navigation"
              data-menu="menu-navigation"
            >
              {filteredMenu.length > 0 ? (
                filteredMenu.map((option, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      to={option.path}
                      className="d-flex align-items-center"
                    >
                      {option.icon}
                      {!isMenuCollapsed && (
                        <span className="menu-item text-truncate">
                          {option.label}
                        </span>
                      )}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="nav-item">
                  <span className="menu-item text-truncate">
                    No se encontraron resultados
                  </span>
                </li>
              )}
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
