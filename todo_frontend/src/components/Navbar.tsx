import React from 'react';
import { Box, Flex, Heading, Text, Link, Button, ButtonGroup } from '@chakra-ui/react';


function Navbar() {
    return (
        <Box 
            p={'0px 0px 40px 0px !important'} 
            m={'0 !important'} 
            bgGradient={'linear(to-t, #161920, #101314, #101314)'} 
        >
            <Flex 
                w={'100vw'} 
                p={'14px 3vw'}
                justify={'space-between'} 
            >
                <Button variant={'unstyled'} _hover={{ bgColor: 'none' }}>
                        <Link href={'/'} style={{ textDecoration: 'none' }}>
                            <Heading
                                fontSize={'2rem'} 
                                fontWeight={'500'} 
                                textColor={'#C2C6CA'}
                            >
                                Clarity
                            </Heading>
                        </Link>
                </Button>
                <Flex>
                    <ButtonGroup gap={'10px'}>
                        <Button 
                            variant={'ghost'} 
                            rounded={'.5rem'} 
                            _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }} 
                        >
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <Text 
                                    fontSize={'0.9rem'} 
                                    textColor={'#5E6172'} 
                                    textTransform={'uppercase'}
                                >
                                    About
                                </Text>
                            </Link>
                        </Button>
                        <Button 
                            variant={'ghost'}
                            rounded={'.5rem'}
                             _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }}
                        >
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <Text 
                                    fontSize={'0.9rem'} 
                                    textColor={'#5E6172'} 
                                    textTransform={'uppercase'}
                                >
                                    Log out
                                </Text>
                            </Link>
                        </Button>
                        <Button 
                            variant={'ghost'} 
                            rounded={'.5rem'}
                            _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }}
                        >
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <Text 
                                    fontSize={'0.9rem'} 
                                    textColor={'#5E6172'} 
                                    textTransform={'uppercase'}
                                >
                                    My account
                                </Text>
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;