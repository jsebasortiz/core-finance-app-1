import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Search as SearchIcon,
  ExitToApp as ExitToAppIcon,
  Close as CloseIcon,
  ArrowForward,
  RadioButtonChecked,
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
    { path: "/company", label: "Empresa", icon: <RadioButtonChecked /> },
    {
      path: "/economicActivity",
      label: "Actividad Económica",
      icon: <RadioButtonChecked />,
    },
    { path: "/branch", label: "Sucursal", icon: <RadioButtonChecked /> },
    { path: "/inventory", label: "Inventario", icon: <RadioButtonChecked /> },
    { path: "/category", label: "Categorías", icon: <RadioButtonChecked /> },
    {
      path: "/department",
      label: "Departamentos",
      icon: <RadioButtonChecked />,
    },
    { path: "/city", label: "Localidad", icon: <RadioButtonChecked /> },
    {
      path: "/currencyType",
      label: "Tipo de moneda",
      icon: <RadioButtonChecked />,
    },
    { path: "/arbol", label: "PUC Árbol", icon: <RadioButtonChecked /> },
    { path: "/arbol2", label: "PUC Árbol 2", icon: <RadioButtonChecked /> },
    { path: "/recursos", label: "Recursos", icon: <RadioButtonChecked /> },
    {
      path: "/ejecuciones",
      label: "Ejecuciones",
      icon: <RadioButtonChecked />,
    },
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
