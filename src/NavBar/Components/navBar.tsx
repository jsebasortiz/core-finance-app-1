import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Search as SearchIcon,
  ExitToApp as ExitToAppIcon,
  Close as CloseIcon,
  ArrowForward,
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
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../../Header/components/Header";

const MainMenu: React.FC = () => {
  const [searchText, setSearchText] = useState<string>(""); // Estado para la búsqueda
  const [showSearch, setShowSearch] = useState<boolean>(false); // Estado para mostrar/ocultar la barra de búsqueda
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false); // Estado para controlar si el menú está colapsado
  const [favorites, setFavorites] = useState<string[]>([]); // Estado para manejar los favoritos
  const [showFavorites, setShowFavorites] = useState<boolean>(false); // Mostrar solo favoritos o todos los elementos

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

  const toggleFavorite = (label: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(label)
        ? prevFavorites.filter((item) => item !== label)
        : [...prevFavorites, label]
    );
  };

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
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

  // Filtrar menú según búsqueda y si está mostrando favoritos
  const filteredMenu = menuOptions.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const displayedMenu = showFavorites
    ? filteredMenu.filter((option) => favorites.includes(option.label))
    : filteredMenu;

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
            <Button
              variant="link"
              className="nav-link"
              onClick={toggleShowFavorites}
              style={{ color: "red" }}
            >
              {showFavorites ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "red" }} />
              )}
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
              {displayedMenu.length > 0 ? (
                displayedMenu.map((option, index) => (
                  <li
                    className="nav-item d-flex align-items-center"
                    key={index}
                  >
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

                    {/* Solo mostrar el botón de favoritos si el menú NO está colapsado */}
                    {!isMenuCollapsed && (
                      <Button
                        variant="link"
                        className="nav-link"
                        onClick={() => toggleFavorite(option.label)}
                      >
                        {favorites.includes(option.label) ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </Button>
                    )}
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
