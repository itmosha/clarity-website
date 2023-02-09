import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexPage from './IndexPage';
import AboutPage from "./AboutPage";
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
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