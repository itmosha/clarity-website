import React, { useEffect, useRef, useState } from 'react'
import { Box, Link, Heading, Text, VStack, Button, ButtonGroup, Spacer, Flex, Divider } from '@chakra-ui/react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { GoTasklist, GoFile, GoGear, GoInfo, GoClock, GoChevronLeft } from 'react-icons/go'
import WorkspaceNavbar from '../components/workspace/WorkspaceNavbar'
import MenuTable from '../components/workspace/MenuTable'
import { tab } from '@testing-library/user-event/dist/tab'
import Table from '../components/workspace/Table'


const WorkspacePage: React.FC<{}> = () => {
    const [data, setData] = useState({tables: []});
    const [error, setError] = useState('');
    const [isTasksTabOpened, setIsTasksTabOpened] = useState(false);
    const [isNotesTabOpened, setIsNotesTabOpened] = useState(false);
    const [isTimerTabOpened, setIsTimerTabOpened] = useState(false);
    const [isInfoTabOpened, setIsInfoTabOpened] = useState(false);
    const [isSettingsTabOpened, setIsSettingsTabOpened] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'expires', 'username']);

    const { username } = useParams();

    const closeAllTabs = () => {
        setIsTasksTabOpened(false);
        setIsNotesTabOpened(false);
        setIsTimerTabOpened(false);
        setIsInfoTabOpened(false);
        setIsSettingsTabOpened(false);
    }

    useEffect(() => {
        const getData = async () => {
            const usernameProvided = cookies.username;
            const accessTokenProvided = cookies.access_token;
            
            if (username !== usernameProvided) {
                setError('Access forbidden!');
                return;
            }
            
            const response = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:8000/api/tables/username/${usernameProvided}/`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${accessTokenProvided}`,
                    'Username': usernameProvided,
                }
            })
            
            if (response.status === 200) {
                const data = await response.json();
                setData(data);
            } else {
                removeCookie('access_token');
                removeCookie('expires');
                removeCookie('username');

                setError(`Access forbidden, ${response.status}`);
            }
        }
        getData();
    }, []);

    return (
        <Box h='100vh' bgColor='#161920'>
            <WorkspaceNavbar />
            <Box>
                { error ? (
                    <Heading>{ error }</Heading>
                ) : (
                    <Flex>
                        <Flex
                            direction='column' 
                            flexFlow='column'
                            justify='space-between' 
                            w='50px'
                            h='calc(100vh - 50px)'
                            maxW='50px'
                            borderRight='1px solid #272B36'
                        >
                            <Box
                                m='0 !important'
                            >
                                <Button
                                    w='40px'
                                    h='40px'
                                    bgColor='rgba(0, 0, 0, 0)'
                                    _hover={{ bgColor: '#1C1F27' }}
                                    p='0 !important'
                                    m='5px !important'
                                    onClick={() => { closeAllTabs(); setIsTasksTabOpened(!isTasksTabOpened); }}
                                >
                                    <GoTasklist color='#C2C6CA' size='20px' />
                                </Button>
                                <Button
                                    w='40px'
                                    h='40px'
                                    bgColor='rgba(0, 0, 0, 0)'
                                    _hover={{ bgColor: '#1C1F27' }}
                                    p='0 !important'
                                    m='0px 5px !important'
                                    onClick={() => { closeAllTabs(); setIsNotesTabOpened(!isNotesTabOpened); }}
                                >
                                    <GoFile color='#C2C6CA' size='20px' />
                                </Button>
                                <Button
                                    w='40px'
                                    h='40px'
                                    bgColor='rgba(0, 0, 0, 0)'
                                    _hover={{ bgColor: '#1C1F27' }}
                                    p='0 !important'
                                    m='5px !important'
                                    onClick={() => { closeAllTabs(); setIsTimerTabOpened(!isTimerTabOpened); }}
                                >
                                    <GoClock color='#C2C6CA' size='20px' />
                                </Button>
                            </Box>
                            <Box
                                m='0 !important'
                            >
                                <Button
                                    w='40px'
                                    h='40px'
                                    bgColor='rgba(0, 0, 0, 0)'
                                    _hover={{ bgColor: '#1C1F27' }}
                                    p='0 !important'
                                    m='5px !important'
                                    onClick = {() => { closeAllTabs(); setIsInfoTabOpened(!isInfoTabOpened); }}
                                >
                                    <GoInfo color='#C2C6CA' size='20px' />
                                </Button>
                                <Button
                                    w='40px'
                                    h='40px'
                                    bgColor='rgba(0, 0, 0, 0)'
                                    _hover={{ bgColor: '#1C1F27' }}
                                    p='0 !important'
                                    m='0px 5px 5px !important'
                                    onClick={() => { closeAllTabs(); setIsSettingsTabOpened(!isSettingsTabOpened); }}
                                >
                                    <GoGear color='#C2C6CA' size='20px' />
                                </Button>
                            </Box>
                        </Flex>
                        <Box 
                            w='calc(100vw - 50px)'
                            h='calc(100vh - 50px)'
                        >
                            { isTasksTabOpened ? (
                                <Flex>   
                                    <Box
                                        w='250px'
                                        h='calc(100vh - 50px)'
                                        p='10px'
                                        textColor='#C2C6CA'
                                        borderRight='1px solid #272B36'
                                    >
                                        <Flex justify='space-between' h='24px'>
                                            <Text textTransform='uppercase'>My tasks</Text>
                                            <Button
                                                size='30px'                           
                                                p='0 !important'
                                                bgColor='rgba(0, 0, 0, 0)'
                                                _hover={{ bgColor: '#1C1F27' }}
                                                onClick={() => {
                                                    closeAllTabs();
                                                }}
                                            >
                                                <GoChevronLeft size='24px'/>
                                            </Button>
                                        </Flex>
                                        <Divider 
                                            border='1px solid #272B36' 
                                            my='10px'
                                        />
                                        <Box>
                                            { data?.tables?.map((table: any) => {
                                                return ( <MenuTable table={table} /> )
                                            })}
                                        </Box>
                                    </Box>
                                    <Flex p='10px 5px'>
                                        { data?.tables?.map((table: any) => {
                                            return ( <Table table={table} /> )
                                        })}
                                    </Flex>
                                </Flex>
                            ) : null }
                            { isNotesTabOpened ? (
                                <Heading>Notes</Heading>
                            ) : null }
                            { isTimerTabOpened ? (
                                <Heading>Timer</Heading>
                            ) : null }
                            { isInfoTabOpened ? (
                                <Heading>Info</Heading>
                            ) : null }
                            { isSettingsTabOpened ? (
                                <Heading>Settings</Heading>
                            ) : null }
                        </Box>
                    </Flex>
                )}
            </Box>
        </Box>
    )
}

export default WorkspacePage