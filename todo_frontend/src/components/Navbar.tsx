import React from 'react';
import {Box, Center, Flex, Heading, Link, Avatar, Button, Circle, Square} from '@chakra-ui/react';

function Navbar() {
    return (
        <Box
            mx={'10px'}
            p={'10px 25px'}
            border={'2px solid black'}
            rounded={'1rem'}
            boxShadow={'2px 2px 0px 1px rgba(0, 0, 0, 1)'}
        >
            <Flex justify={'space-between'}>
                <Center>
                    <Link href={'/'} style={{ textDecoration: 'none' }}>
                        <Heading fontSize={'2rem'} textDecoration={'none'}>Clarity</Heading>
                    </Link>
                </Center>
                <Flex>
                    <Center position={'relative'}>
                        <Avatar
                            _hover={{ transform: 'translate(2px, 2px)', transition: 'ease .25s' }}
                            transform={'translate(0px, 0px)'}
                            transition={'ease .25s'}
                            cursor={'pointer'}
                            bg={'#19B3A6'} boxSize={'2.5rem'} border={'2px solid black'}
                            zIndex={'1000'}
                        />
                        <Circle size={'2.5rem'} bgColor={'black'} position={'absolute'} zIndex={'0'} left={'2px'} top={'2px'}/>
                    </Center>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;