import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaBell,
  FaEnvelope,
  FaComment,
  FaCalendarAlt,
  FaCheckSquare,
} from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ThemeToggle from "./ChangeTopic";

const Header: React.FC = () => {
  // Estado para controlar la visibilidad del campo de búsqueda
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  // Estado para almacenar el texto de búsqueda
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Función para alternar la visibilidad del campo de búsqueda
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // Lista de opciones del menú
  const menuOptions = [
    { label: "Email", icon: <FaEnvelope />, link: "app-email.html" },
    { label: "Chat", icon: <FaComment />, link: "app-chat.html" },
    { label: "Calendar", icon: <FaCalendarAlt />, link: "app-calendar.html" },
    { label: "Todo", icon: <FaCheckSquare />, link: "app-todo.html" },
  ];

  // Filtrar opciones basadas en el texto de búsqueda
  const filteredOptions = menuOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
      <div className="navbar-container d-flex content">
        <div className="bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav d-xl-none">
            <li className="nav-item">
              <NavLink className="nav-link menu-toggle" to="#">
                <MdMenu />
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav bookmark-icons">
            {filteredOptions.map((option) => (
              <li className="nav-item d-none d-lg-block" key={option.label}>
                <NavLink
                  className="nav-link"
                  to={option.link}
                  title={option.label}
                >
                  {option.icon}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link bookmark-star">
                <i className="ficon text-warning" data-feather="star"></i>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link bookmark-search" onClick={toggleSearch}>
                <FaSearch />
              </a>
              <div
                className={`bookmark-input ${
                  searchVisible ? "d-block" : "d-none"
                }`}
              >
                <div className="bookmark-input-icon">
                  <FaSearch />
                </div>
                <input
                  className="form-control input"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </li>
          </ul>
        </div>
        <ul className="nav navbar-nav align-items-center ms-auto">
          <li className="nav-item dropdown dropdown-language">
            <a
              className="nav-link dropdown-toggle"
              id="dropdown-flag"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="flag-icon flag-icon-us"></i>
              <span className="selected-language">English</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdown-flag"
            >
              <NavLink className="dropdown-item" to="#" data-language="en">
                <i className="flag-icon flag-icon-us"></i> English
              </NavLink>
              <NavLink className="dropdown-item" to="#" data-language="fr">
                <i className="flag-icon flag-icon-fr"></i> French
              </NavLink>
              <NavLink className="dropdown-item" to="#" data-language="de">
                <i className="flag-icon flag-icon-de"></i> German
              </NavLink>
              <NavLink className="dropdown-item" to="#" data-language="pt">
                <i className="flag-icon flag-icon-pt"></i> Portuguese
              </NavLink>
            </div>
          </li>
          <ThemeToggle /> {/* Aquí está el toggle de tema */}
          <li className="nav-item dropdown dropdown-cart me-25">
            <a className="nav-link" href="#" data-bs-toggle="dropdown">
              <FaShoppingCart />
              <span className="badge rounded-pill bg-primary badge-up cart-item-count">
                6
              </span>
            </a>
            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
              <li className="dropdown-menu-header">
                <div className="dropdown-header d-flex">
                  <h4 className="notification-title mb-0 me-auto">My Cart</h4>
                  <div className="badge rounded-pill badge-light-primary">
                    4 Items
                  </div>
                </div>
              </li>
              {/* Cart items go here */}
              <li className="dropdown-menu-footer">
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="fw-bolder mb-0">Total:</h6>
                  <h6 className="text-primary fw-bolder mb-0">$10,999.00</h6>
                </div>
                <NavLink
                  className="btn btn-primary w-100"
                  to="app-ecommerce-checkout.html"
                >
                  Checkout
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown dropdown-notification me-25">
            <a className="nav-link" href="#" data-bs-toggle="dropdown">
              <FaBell />
              <span className="badge rounded-pill bg-danger badge-up">5</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
              <li className="dropdown-menu-header">
                <div className="dropdown-header d-flex">
                  <h4 className="notification-title mb-0 me-auto">
                    Notifications
                  </h4>
                  <div className="badge rounded-pill badge-light-primary">
                    6 New
                  </div>
                </div>
              </li>
              {/* Notification items go here */}
              <li className="dropdown-menu-footer">
                <NavLink className="btn btn-primary w-100" to="#">
                  Read all notifications
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown dropdown-user">
            <a
              className="nav-link dropdown-toggle dropdown-user-link"
              id="dropdown-user"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="user-nav d-sm-flex d-none">
                <span className="user-name fw-bolder">John Doe</span>
                <span className="user-status">Admin</span>
              </div>
              <span className="avatar">
                <img
                  className="round"
                  src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
                  alt="avatar"
                  height="40"
                  width="40"
                />
                <span className="avatar-status-online"></span>
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdown-user"
            >
              <NavLink className="dropdown-item" to="page-profile.html">
                <i className="me-50" data-feather="user"></i> Profile
              </NavLink>
              <NavLink className="dropdown-item" to="app-email.html">
                <i className="me-50" data-feather="mail"></i> Inbox
              </NavLink>
              <NavLink className="dropdown-item" to="app-todo.html">
                <i className="me-50" data-feather="check-square"></i> Task
              </NavLink>
              <NavLink className="dropdown-item" to="app-chat.html">
                <i className="me-50" data-feather="message-square"></i> Chats
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink
                className="dropdown-item"
                to="page-account-settings-account.html"
              >
                <i className="me-50" data-feather="settings"></i> Settings
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                <i className="me-50" data-feather="power"></i> Logout
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
