import React from 'react';
import { Outlet } from 'react-router-dom'; // Importa Outlet para renderizar las rutas secundarias
import Navbar from './NavBar/Components/navBar.tsx';
import MainMenu from './Header/components/Header.js';
import Footer from './Footer/components/Footer.js';

const Layout: React.FC = () => (
    <>
        <MainMenu />  
        <Navbar />  
        {/* Aquí Outlet renderiza los componentes de las rutas secundarias */}
        <Outlet />  
        <Footer />  
    </>
);

export default Layout;
