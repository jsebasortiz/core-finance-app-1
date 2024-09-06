import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaCircle, FaCog, FaSignOutAlt, FaSearch,FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../Header/components/Header';

const MainMenu: React.FC = () => {
    const [menuFixed, setMenuFixed] = useState<boolean>(false);

    const handleToggle = () => {
        setMenuFixed(prevState => !prevState);
        console.log('Menu Fixed:', !menuFixed); 
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
                                    {/* Imagen del logo, con tamaño ajustado */}
                                    <img src="./app-assets/images/ico/R2.png" alt="Logo" height="40" />
                                </span>
                                <h2 className="brand-text" style={{ color: 'red' }}>Univalle</h2>
                            </a>
                        </li>

                        <li className="nav-item nav-toggle">
                            <a className="nav-link modern-nav-toggle pe-0" onClick={handleToggle}>
                                {menuFixed ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-4">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle d-none d-xl-block collapse-toggle-icon font-medium-4">
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                )}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="shadow-bottom"></div>
                <div className="main-menu-content">
                    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                        <li className="navigation-header">
                            <span>Configuración</span>
                            <i data-feather="more-horizontal"></i>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center" href="#">
                                <FaCog />
                                <span className="menu-title text-truncate">Configuración</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <Link to="/company" className="d-flex align-items-center">
                                        <FaCircle />
                                        <span className="menu-item text-truncate">Empresa</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/economicActivity" className="d-flex align-items-center">
                                        <FaCircle />
                                        <span className="menu-item text-truncate">Actividad Economica</span>
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
                        </li>
                        <li className="navigation-header">
                            <span>Consultas</span>
                            <i data-feather="more-horizontal"></i>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center" href="#">
                                <FaSearch />
                                <span className="menu-title text-truncate">Consultas</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <Link to="/category" className="d-flex align-items-center">
                                        <FaCircle />
                                        <span className="menu-item text-truncate">Categorias</span>
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
                                        <span className="menu-item text-truncate">Tipo de moneda</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="navigation-header">
                            <span>Terceros</span>
                            <i data-feather="more-horizontal"></i>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center" href="#">
                                <FaUsers />
                                <span className="menu-title text-truncate">Terceros</span>
                            </a>
                            <ul className="menu-content">
                                <li>
                                    <Link to="/arbol" className="d-flex align-items-center">
                                        <FaCircle />
                                        <span className="menu-item text-truncate">PUC Arbol</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/arbol2" className="d-flex align-items-center">
                                        <FaCircle />
                                        <span className="menu-item text-truncate">PUC ARBOL 2</span>
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
                        </li>
                    </ul>
                </div>
                <div className="navbar-footer">
                    <ul className="nav navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item">
                            <Button variant="link" className="nav-link" onClick={() => console.log('Cerrar sesión')}>
                                <FaSignOutAlt />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MainMenu;
