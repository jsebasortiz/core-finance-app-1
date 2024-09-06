import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body.dark-mode {
    background-color: #121212;
    color: #ffffff;
  }

  body.dark-mode .nav-link {
    color: #ffffff;
  }

  body.dark-mode table {
    background-color: #1f1f1f;
    color: #ffffff;
    border-color: #333333;
  }

  body.dark-mode th, 
  body.dark-mode td {
    border-color: #333333;
  }

  body.dark-mode th {
    background-color: #2a2a2a;
  }

  body.dark-mode tr:nth-child(even) {
    background-color: #2a2a2a;
  }

  body.dark-mode tr:nth-child(odd) {
    background-color: #1f1f1f;
  }

  body.dark-mode a {
    color: #ffffff;
  }

  body.dark-mode .header-navbar {
    background-color: #333333;
    border-bottom: 1px solid #444444;
  }

  body.dark-mode .dropdown-menu {
    background-color: #333333;
    color: #ffffff;
    border-color: #444444;
  }

  body.dark-mode .btn-primary {
    background-color: #1a73e8;
    border-color: #1a73e8;
  }

  body.dark-mode .btn-primary:hover {
    background-color: #135aba;
    border-color: #135aba;
  }
`;


const NavLinkStyled = styled.a`
  cursor: pointer;
`;

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Carga la preferencia del tema desde localStorage al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
  };

  return (
    <>
      <GlobalStyle />
      <li className="nav-item d-none d-lg-block">
        <NavLinkStyled className="nav-link nav-link-style" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </NavLinkStyled>
      </li>
    </>
  );
};

export default ThemeToggle;
