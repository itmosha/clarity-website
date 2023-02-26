import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import { Box } from '@chakra-ui/react';


const BasicLayout = ({children}: any) => {
    return (
        <Box
            maxW={'100vw'}
            minH={'100vh'}
            bgColor={'#161920'}
        >
            <Navbar />
            <Box>
                <PageTransition>
                    { children }
                </PageTransition>
            </Box>
            <Footer />
        </Box>
    );
}

export default BasicLayout;