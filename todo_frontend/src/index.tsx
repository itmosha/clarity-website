import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexPage from './IndexPage';
import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";
import TablesPage from "./TablesPage";
import TablePage from "./TablePage";
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/tables',
        element: <TablesPage />,
    },
    {
        path: 'tables/:tableID',
        element: <TablePage />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);