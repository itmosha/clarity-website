import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/react';
import Navbar from "./components/Navbar";

function IndexPage() {
    return (
        <Box bgColor={'#e5e7eb'} minH={'100vh'} maxW={'100vw'} p={'10px'}>
            <Navbar />
        </Box>
    );
}

export default IndexPage;
