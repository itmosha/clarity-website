import React, { useState, useEffect } from 'react'
import BasicLayout from '../components/BasicLayout'
import Transition from '../components/Transition'
import { Flex, Box, Heading, Text, Link, Button, Divider } from '@chakra-ui/react'
import IndexObject from '../components/index-page/ClaritySVGBox'
import AllInOneCard from '../components/index-page/AllInOneCard'
import TodoIcon from '../components/svg/TodoIcon'
import NotesIcon from '../components/svg/NotesIcon'
import TimeIcon from '../components/svg/TimeIcon'
import IndexPageCard from '../components/index-page/Card'
import { useCookies } from 'react-cookie'


const IndexPage: React.FC<{}> = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cookies, setCookie] = useCookies(['access_token', 'username']);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const accessTokenProvided = cookies.access_token;
        const usernameProvided = cookies.username;

        if (accessTokenProvided && usernameProvided) {
            setIsLoggedIn(true);
            setUsername(usernameProvided);
        }
    }, []);

    return (
        <BasicLayout>
            <Transition transitionType='from-left'>
                <Flex
                    minH={'30vh'} 
                    m={'3vh 9vw 0vh 9vw'} 
                    px={'5vw'} 
                    justify={'space-between'} 
                >
                    <Box w={'45vw'}>
                        <Flex mt={'6vh'}>
                            <Heading 
                                textColor={'#C2C6CA'} 
                                fontWeight={'500'}
                            >
                                Welcome to
                            </Heading>
                            <Heading 
                                pl={'0.5rem'}
                                textColor={'#730295'} 
                                fontWeight={'500'}
                            >
                                Clarity
                            </Heading>
                            <Heading 
                                textColor={'#C2C6CA'}
                                fontWeight={'500'}
                            >
                                .
                            </Heading>
                        </Flex>
                        <Text textColor={'#5E6172'} mt={'10px'} lineHeight={'1.35'}>
                            Clarity is made to help you shape your ideas and bring them to life.
                        </Text>
                        <Text textColor={'#5E6172'} lineHeight={'1.35'}>
                            Gain unmatched perspicacity by structuring your tasks and constantly analyzing your productivity.
                        </Text>
                        <Link href={isLoggedIn ? `/${username}/` : '/register/'} style={{ textDecoration: 'none' }}>
                            <Button 
                                p={'22px 40px'}
                                mt={'30px'} 
                                rounded={'0.5rem'} 
                                variant={'solid'} 
                                bgColor={'#730295'} 
                                _hover={{ bgColor: '#9100BD' }}
                            >
                                <Heading 
                                    fontSize={'1.25rem'} 
                                    fontWeight={'500'}
                                    textColor={'#C2C6CA'} 
                                >
                                    { isLoggedIn ? 'My workspace' : 'Try it' }
                                </Heading>
                            </Button>
                        </Link>
                    </Box>
                    <IndexObject />
                </Flex>
            </Transition>
            <Transition transitionType='scale'>
                <Box
                    m={'1vh 9vw 7vh 9vw !important'}
                    textAlign={'center'}
                >
                    <Flex justify={'center'}>
                        <Heading textColor={'#730295'} fontWeight={'500'}>All</Heading>
                        <Heading textColor={'#C2C6CA'} fontWeight={'500'} pl={'0.5rem'}>in one.</Heading>
                    </Flex>
                    <Text textColor={'#5E6172'}>Everything you need is available in a single app. </Text>
                </Box>
            </Transition>
            <Transition transitionType='from-right'>
                <Box
                    m={'5vh 9vw 10vh 9vw !important'}
                    p={'20px 30px'}
                    bgColor={'#1C1F27'} 
                    rounded={'0.5rem'}
                    boxShadow={'0 12px 20px 3px rgba(0, 0, 0, .3)'}
                    textAlign={'center'}
                >
                    <Flex justify={'center'}>
                        <Box>
                            <AllInOneCard heading='Todo' description='Conveniently store your tasks and manage them.' />
                            <Flex justify={'center'} py={'20px'}>
                                <Box w={'10vw'}>
                                    <TodoIcon />
                                </Box>
                            </Flex>
                        </Box>
                        <Divider orientation={'vertical'} my={'10px'} height={'auto'} borderColor={'#83869C'}/>
                        <Box>
                            <AllInOneCard heading='Notes editor' description='Create and edit your notes in any format you want.' />
                            <Flex justify='center' py='20px'>
                                <Box w='10vw'>
                                    <NotesIcon />
                                </Box>
                            </Flex>
                        </Box>
                        <Divider orientation={'vertical'} my={'10px'} height={'auto'} borderColor={'#83869C'}/>
                        <Box>
                            <AllInOneCard heading='Time tracker' description='Track your work time to precisely analyze your workflow.' />
                            <Flex justify='center' py='20px'>
                                <Box w='10vw'>
                                    <TimeIcon />
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Transition>
            <Transition transitionType='scale'>
                <Box 
                    mx={'9vw'}
                    maxW={'82vw'} 
                    p={'0 !important'}
                    my={'10vh'} 
                    textAlign={'center'} 
                >
                    <Flex justifyContent={'center'}>
                        <Flex>
                            <Heading 
                                fontWeight={'500'}
                                textColor={'#730295'} 
                            >
                                Brand new
                            </Heading>
                            <Heading 
                                ml={'0.5rem'}
                                fontWeight={'500'} 
                                textColor={'#C2C6CA'}
                            >
                                paradigm.
                            </Heading>
                        </Flex>
                    </Flex>
                    <Text textColor={'#5E6172'} mt={'5px'}>
                        We offer a unique system with many powerful tools to maximise your progress.
                    </Text>
                </Box>
            </Transition>
            <Transition transitionType='from-left'>
                <Flex gap={'2vw'} my={'10vh'} mx={'9vw'}>
                    <IndexPageCard 
                        title={'Full customization.'} 
                        description={'Clarity provides many ways to flexibly adjust your workspace.'} 
                    />
                    <IndexPageCard
                        title={'Powerful vusialization.'}
                        description={'Collecting statistics of your works and building graphical representations helps you keep track of your achievements.'}
                    />
                    <IndexPageCard
                        title={'Task linking.'}
                        description={'Strong linking system ensures convenient navigating through your data.'}
                    />
                </Flex>
            </Transition>
            <Transition transitionType='scale'>
                <Box mx={'9vw'} my={'10vh'} textAlign={'center'}>
                    <Flex pb={'10px'} w={'82vw'} justify={'center'}>
                        <Heading 
                            textColor={'#730295'} 
                            fontWeight={'500'}                            
                            fontSize={'1.75rem'}
                        >
                            Clarity
                        </Heading>
                        <Heading 
                            pl={'0.5rem'}
                            textColor={'#C2C6CA'} 
                            fontWeight={'500'}
                            fontSize={'1.75rem'}
                        >
                            
                            brings order to your projects and daily affairs. 
                        </Heading>
                    </Flex>
                    <Text textColor={'#5E6172'}>
                        Join our community and start your journey today.
                    </Text>
                    <Link href={'/register/'} style={{ textDecoration: 'none' }}>
                        <Button 
                            p={'22px 40px'}
                            mt={'30px'} 
                            rounded={'0.5rem'} 
                            variant={'solid'} 
                            bgColor={'#730295'} 
                            _hover={{ bgColor: '#9100BD' }}
                        >
                            <Heading 
                                fontSize={'1.25rem'} 
                                fontWeight={'500'}
                                textColor={'#C2C6CA'} 
                            >
                                Try Clarity
                            </Heading>
                        </Button>
                    </Link>
                </Box>
            </Transition>
        </BasicLayout>
    )
}

export default IndexPage
