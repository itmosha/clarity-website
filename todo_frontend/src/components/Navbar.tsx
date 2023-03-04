import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Text, Link, Button, ButtonGroup } from '@chakra-ui/react'
import { useCookies } from 'react-cookie'


const Navbar: React.FC<{}> = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'expires', 'username']);
    const [loggedIn, setLoggedIn] = useState(false);

    const performLogout = async () => {
        const usernameProvided = cookies.username;
        const accessTokenProvided = cookies.access_token;

        const response = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:8000/api/logout/`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${accessTokenProvided}`,
                'Username': usernameProvided,
            }
        })

        if (response.status === 204) {
            console.log('LOGOUT: OK');
            window.location.reload();
        } else {
            console.log(`LOGOUT: ERROR, status ${response.status}`);
        }

        removeCookie('access_token');
        removeCookie('expires');
        removeCookie('username');
    }

    useEffect(() => {
        const usernameProvided = cookies.username;
        const accessTokenProvided = cookies.access_token;

        if (usernameProvided && accessTokenProvided) {
            setLoggedIn(true);
        }
    }, []);

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
                <Link href={'/'} style={{ textDecoration: 'none' }}>
                    <Button variant={'unstyled'} _hover={{ bgColor: 'none' }}>
                                <Heading
                                    fontSize={'2rem'} 
                                    fontWeight={'500'} 
                                    textColor={'#C2C6CA'}
                                >
                                    Clarity
                                </Heading>
                    </Button>
                </Link>
                <Flex>
                    <ButtonGroup>
                        <Link href={'/about/'} style={{ textDecoration: 'none' }}>
                            <Button 
                                variant={'ghost'} 
                                rounded={'.5rem'} 
                                _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }} 
                            >
                                    <Text 
                                        fontSize={'0.9rem'} 
                                        textColor={'#5E6172'} 
                                        textTransform={'uppercase'}
                                    >
                                        About
                                    </Text>
                            </Button>
                        </Link>
                        { loggedIn ? (
                            <Box m={'0 !important'}>
                                <Button 
                                    ml={'20px'}
                                    variant={'ghost'}
                                    rounded={'.5rem'}
                                    _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }}
                                    onClick={() => performLogout() }
                                >
                                        <Text 
                                            fontSize={'0.9rem'} 
                                            textColor={'#5E6172'} 
                                            textTransform={'uppercase'}
                                        >
                                            Log out
                                        </Text>
                                    </Button>
                                <Link href={'/'} style={{ textDecoration: 'none' }} ml={'20px'}>
                                    <Button 
                                        variant={'ghost'} 
                                        rounded={'.5rem'}
                                        _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }}
                                    >
                                            <Text 
                                                fontSize={'0.9rem'} 
                                                textColor={'#5E6172'} 
                                                textTransform={'uppercase'}
                                            >
                                                My account
                                            </Text>
                                    </Button>
                                </Link>
                            </Box>
                        ) : (
                            <Box m={'0 !important'}>
                                <Link href={'/login/'} style={{ textDecoration: 'none' }} ml={'20px'}>
                                    <Button 
                                        variant={'ghost'}
                                        rounded={'.5rem'}
                                        _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }}
                                    >
                                            <Text 
                                                fontSize={'0.9rem'} 
                                                textColor={'#5E6172'} 
                                                textTransform={'uppercase'}
                                            >
                                                Log in
                                            </Text>
                                    </Button>
                                </Link>
                                <Link href={'/register/'} style={{ textDecoration: 'none' }} ml={'20px'}>
                                    <Button 
                                        variant={'ghost'} 
                                        rounded={'.5rem'}
                                        _hover={{ bgColor: 'rgba(78, 71, 89, .3)' }}
                                    >
                                            <Text 
                                                fontSize={'0.9rem'} 
                                                textColor={'#5E6172'} 
                                                textTransform={'uppercase'}
                                            >
                                                Register
                                            </Text>
                                    </Button>
                                </Link>
                            </Box>
                        )}
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar