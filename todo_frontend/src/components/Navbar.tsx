import React from 'react';
import {Box, Center, Flex, Heading, Text, Link, Avatar, Button, ButtonGroup } from '@chakra-ui/react';


function Navbar() {
    return (
        <Box p={'0 !important'} m={'0 !important'}>
            <Flex justify={'space-between'} w={'100vw'} p={'14px 3vw'}>
                <Button variant={'unstyled'} _hover={{ bgColor: 'none' }} rounded={'full'}>
                        <Link href={'/'} style={{ textDecoration: 'none' }}>
                            <Heading fontSize={'2rem'} fontWeight='800' textColor={'#C2C6CA'}>Clarity</Heading>
                        </Link>
                </Button>
                <Flex>
                    <ButtonGroup gap={'10px'}>
                        <Button variant={'ghost'} _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }} rounded={'full'}>
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <Text fontSize={'0.9rem'} textColor={'#5E6172'} textTransform={'uppercase'}>About</Text>
                            </Link>
                        </Button>
                        <Button variant={'ghost'} _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }} rounded={'full'}>
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <Text fontSize={'0.9rem'} textColor={'#5E6172'} textTransform={'uppercase'}>Log out</Text>
                            </Link>
                        </Button>
                        <Button variant={'ghost'} _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }} rounded={'full'}>
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <Text fontSize={'0.9rem'} textColor={'#5E6172'} textTransform={'uppercase'}>My account</Text>
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;