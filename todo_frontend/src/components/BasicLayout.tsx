import React from 'react'
import Navbar from './Navbar';
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
            <Box px={'9vw'}>
                <PageTransition>
                    { children }
                </PageTransition>
            </Box>
        </Box>
    );
}

export default BasicLayout;