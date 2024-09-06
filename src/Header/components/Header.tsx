
import { NavLink } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBell, FaEnvelope, FaComment, FaCalendarAlt, FaCheckSquare } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import ThemeToggle from "./ChangeTopic";  

const Header: React.FC = () => {
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
                        <li className="nav-item d-none d-lg-block">
                            <NavLink className="nav-link" to="app-email.html" title="Email">
                                <FaEnvelope />
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <NavLink className="nav-link" to="app-chat.html" title="Chat">
                                <FaComment />
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <NavLink className="nav-link" to="app-calendar.html" title="Calendar">
                                <FaCalendarAlt />
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <NavLink className="nav-link" to="app-todo.html" title="Todo">
                                <FaCheckSquare />
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link bookmark-star">
                                <i className="ficon text-warning" data-feather="star"></i>
                                <div className="bookmark-input search-input">
                                    <div className="bookmark-input-icon">
                                        <FaSearch />
                                    </div>
                                    <input className="form-control input" type="text" placeholder="Bookmark" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="nav navbar-nav align-items-center ms-auto">
                    <li className="nav-item dropdown dropdown-language">
                        <a className="nav-link dropdown-toggle" id="dropdown-flag" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="flag-icon flag-icon-us"></i>
                            <span className="selected-language">English</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-flag">
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
                    <ThemeToggle />  {/* Aquí está el toggle de tema */}
                    <li className="nav-item nav-search">
                        <a className="nav-link nav-link-search">
                            <FaSearch />
                        </a>
                        <div className="search-input">
                            <div className="search-input-icon">
                                <FaSearch />
                            </div>
                            <input className="form-control input" type="text" placeholder="Explore Vuexy..." />
                            <div className="search-input-close">
                                <i className="ficon" data-feather="x"></i>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown dropdown-cart me-25">
                        <a className="nav-link" href="#" data-bs-toggle="dropdown">
                            <FaShoppingCart />
                            <span className="badge rounded-pill bg-primary badge-up cart-item-count">6</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
                            <li className="dropdown-menu-header">
                                <div className="dropdown-header d-flex">
                                    <h4 className="notification-title mb-0 me-auto">My Cart</h4>
                                    <div className="badge rounded-pill badge-light-primary">4 Items</div>
                                </div>
                            </li>
                            {/* Cart items go here */}
                            <li className="dropdown-menu-footer">
                                <div className="d-flex justify-content-between mb-1">
                                    <h6 className="fw-bolder mb-0">Total:</h6>
                                    <h6 className="text-primary fw-bolder mb-0">$10,999.00</h6>
                                </div>
                                <NavLink className="btn btn-primary w-100" to="app-ecommerce-checkout.html">Checkout</NavLink>
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
                                    <h4 className="notification-title mb-0 me-auto">Notifications</h4>
                                    <div className="badge rounded-pill badge-light-primary">6 New</div>
                                </div>
                            </li>
                            {/* Notification items go here */}
                            <li className="dropdown-menu-footer">
                                <NavLink className="btn btn-primary w-100" to="#">Read all notifications</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown dropdown-user">
                        <a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="user-nav d-sm-flex d-none">
                                <span className="user-name fw-bolder">John Doe</span>
                                <span className="user-status">Admin</span>
                            </div>
                            <span className="avatar">
                                <img className="round" src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40" />
                                <span className="avatar-status-online"></span>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
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
                            <NavLink className="dropdown-item" to="page-account-settings-account.html">
                                <i className="me-50" data-feather="settings"></i> Settings
                            </NavLink>
                            <NavLink className="dropdown-item" to="page-pricing.html">
                                <i className="me-50" data-feather="credit-card"></i> Pricing
                            </NavLink>
                            <NavLink className="dropdown-item" to="page-faq.html">
                                <i className="me-50" data-feather="help-circle"></i> FAQ
                            </NavLink>
                            <NavLink className="dropdown-item" to="auth-login-cover.html">
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
