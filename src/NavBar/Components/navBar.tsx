import React, { useState } from 'react';
import { FaCircle, FaCog, FaSearch, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../Header/components/Header';

const MainMenu: React.FC = () => {
    const [menuFixed, setMenuFixed] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleToggle = () => {
        setMenuFixed(!menuFixed);
    };

    const handleSubmenuToggle = (menu: string) => {
        setActiveMenu(prevMenu => prevMenu === menu ? null : menu);
    };

    return (
        <>
            <Header />
            <div className={`main-menu menu-light menu-accordion menu-shadow ${menuFixed ? 'menu-fixed' : 'menu-closed'}`} data-scroll-to-active="true">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item me-auto">
                            <a className="navbar-brand" href="#">
                                <span className="brand-logo">
                                    <img src="./app-assets/images/ico/R2.png" alt="Logo" height="40" />
                                </span>
                                <h2 className="brand-text" style={{ color: 'red' }}>Univalle</h2>
                            </a>
                        </li>
                        <li className="nav-item nav-toggle">
                            <a className="nav-link modern-nav-toggle pe-0" onClick={handleToggle}>
                                {menuFixed ? 'X' : '☰'}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="main-menu-content">
                    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                        {/* Configuración */}
                        <li className="navigation-header">
                            <span>Configuración</span>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center" onClick={() => handleSubmenuToggle('config')}>
                                <FaCog />
                                <span className="menu-title text-truncate">Configuración</span>
                                <span className="arrow">{activeMenu === 'config' ? '▼' : '▶'}</span>
                            </a>
                            {activeMenu === 'config' && (
                                <ul className="subMenu">
                                    <li>
                                        <Link to="/company" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Empresa</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/economicActivity" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Actividad Económica</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branch" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Sucursal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/inventory" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Inventario</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Consultas */}
                        <li className="navigation-header">
                            <span>Consultas</span>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center" onClick={() => handleSubmenuToggle('consultas')}>
                                <FaSearch />
                                <span className="menu-title text-truncate">Consultas</span>
                                <span className="arrow">{activeMenu === 'consultas' ? '▼' : '▶'}</span>
                            </a>
                            {activeMenu === 'consultas' && (
                                <ul className="subMenu">
                                    <li>
                                        <Link to="/category" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Categorías</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/department" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Departamentos</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/city" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Localidad</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/currencyType" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Tipo de Moneda</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Terceros */}
                        <li className="navigation-header">
                            <span>Terceros</span>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center" onClick={() => handleSubmenuToggle('terceros')}>
                                <FaUsers />
                                <span className="menu-title text-truncate">Terceros</span>
                                <span className="arrow">{activeMenu === 'terceros' ? '▼' : '▶'}</span>
                            </a>
                            {activeMenu === 'terceros' && (
                                <ul className="subMenu">
                                    <li>
                                        <Link to="/arbol" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">PUC Árbol</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/arbol2" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">PUC Árbol 2</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/recursos" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Recursos</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ejecuciones" className="d-flex align-items-center">
                                            <FaCircle />
                                            <span className="menu-item text-truncate">Ejecuciones</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MainMenu;
