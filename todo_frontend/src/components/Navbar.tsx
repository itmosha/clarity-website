import React from 'react';
import { Box, Center, Flex, Heading, Link } from '@chakra-ui/react';

function Navbar() {
    return (
        <Box
            p={'10px'}
            border={'2px solid black'}
            rounded={'1rem'}
            boxShadow={'2px 2px 0px 1px rgba(0, 0, 0, 1)'}
        >
            <Flex px={'10px'} justify={'space-between'}>
                <Center>
                    <Link href={'/'} style={{ textDecoration: 'none' }}>
                        <Heading fontSize={'1.5rem'} textDecoration={'none'}>ToDo</Heading>
                    </Link>
                </Center>
                <Center>
                    <Heading fontSize={'1.25rem'}>My account</Heading>
                </Center>
            </Flex>
        </Box>
    );
}

export default Navbar;