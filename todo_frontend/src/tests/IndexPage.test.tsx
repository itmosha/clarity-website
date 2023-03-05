import React from 'react'
import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react';
import 'intersection-observer'
import IndexPage from '../pages/IndexPage'
import '@testing-library/jest-dom'


test('Index page is rendered', () => {
    render(
        <ChakraProvider>
            <IndexPage />
        </ChakraProvider>
    );

    const register = screen.getByText(/register/i);

    expect(register).toBeInTheDocument();
});