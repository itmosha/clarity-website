import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexPage from './IndexPage';
import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";
import TablesPage from "./TablesPage";
import TablePage from "./TablePage";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { extendTheme } from "@chakra-ui/react";
import { CookiesProvider } from 'react-cookie';

const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage/>,
        errorElement: <ErrorPage/>
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
    {
        path: '/register',
        element: <RegistrationPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

const theme = extendTheme({
    fonts: {
        heading: `ClashDisplay-Variable,ui-serif,Georgia,Cambria,Times New Roman,Times,serif`,
        body: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji`,
    }
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <CookiesProvider>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </CookiesProvider>
);