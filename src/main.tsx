// Importaciones de React y otros módulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importaciones de componentes propios
import Navbar from './NavBar/Components/navBar.tsx'
import MainMenu from './Header/components/Header.jsx';
import Footer from './Footer/components/Footer.jsx';  // Footer separado

import '../app-assets/css/bootstrap.min.css';
import '../app-assets/css/colors.min.css';
import '../app-assets/css/components.min.css';
import '../app-assets/css/plugins/extensions/ext-component-context-menu.min.css';

import TreePUC from './Arbol/Components/NuevoTREE.tsx'
import TreePUC2 from './Arbol/Components/TreePUC.tsx';
import DepartmentCRUD from './Department/Components/Department.tsx'


const Layout: React.FC = () => (
    <> 
        <MainMenu />  
        <Navbar />  
        <div className="content-area">
        </div>
        <Footer />  
    </>
);



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,  
        children: [
            
            {
                path: '/arbol',
                element: <TreePUC /> 
            },

            {
                path: '/arbol2',
                element: <TreePUC2 /> 
            },
            {
                path: '/department',
                element: <DepartmentCRUD /> 
            },
            
            
            
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);