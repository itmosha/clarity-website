import React from 'react';
import {Box, Heading, Text, Flex, VStack, Center, Button, Link, Image} from '@chakra-ui/react';
import Navbar from "./components/Navbar";
import Layout from './components/Layout';

function IndexPage() {
    return (
        <Box minH={'100vh'} bgColor={'#161920'}>
            <Navbar />
            <Box px={'9vw'}>
                <Layout>
                <Flex my={'5vh'} minH={'50vh'}>
                    <Box w={'45vw'}>
                        <Flex>
                            <Heading textColor={'#C2C6CA'} fontWeight={'500'}>Welcome to</Heading>
                            <Heading textColor={'#730295'} fontWeight={'500'} pl={'0.5rem'}>Clarity</Heading>
                            <Heading textColor={'#C2C6CA'}>.</Heading>
                        </Flex>
                        <Text textColor={'#5E6172'} mt={'10px'}>
                            Clarity is made to help you shape your ideas and bring them to life.
                        </Text>
                        <Text textColor={'#5E6172'}>
                            Gain unmatched perspicacity by structuring your tasks and constantly analyzing your productivity.
                        </Text>
                        <Button variant={'solid'} bgColor={'#730295'} rounded={'0.5rem'} mt={'30px'} p={'22px 40px'}
                            _hover={{ bgColor: '#9100BD' }}
                        >
                            <Link href={'/register/'} style={{ textDecoration: 'none' }}>
                                <Heading fontSize={'1.25rem'} textColor={'#C2C6CA'} textTransform={'uppercase'} fontWeight={'500'}>Try it</Heading>
                            </Link>
                        </Button>
                    </Box>
                </Flex>
                <Flex rounded={'0.5rem'}>
                    <Box textAlign={'center'} p={'14px'} bgColor={'#1C1F27'} rounded={'0.5rem'} w={'26vw'} minH={'30vh'}
                        boxShadow={'0 12px 20px 3px rgba(0, 0, 0, .3)'}
                        _hover={{ transform: 'scale(1.05)' }}
                        transition={'ease .5s'}
                        cursor={'pointer'}
                    >
                        <Heading textColor={'#C2C6CA'} fontSize={'1.5rem'} fontWeight={'500'}
                            >Fully customizable</Heading>
                    </Box>
                    <Box textAlign={'center'} p={'14px'} bgColor={'#1C1F27'} mx={'2vw'} rounded={'0.5rem'} w={'26vw'} minH={'30vh'}
                        boxShadow={'0 12px 20px 3px rgba(0, 0, 0, .3)'}
                        _hover={{ transform: 'scale(1.05)' }}
                        transition={'ease .5s'}
                        cursor={'pointer'}
                    >
                        <Heading textColor={'#C2C6CA'} fontSize={'1.5rem'} fontWeight={'500'}
                            >Task linking</Heading>
                    </Box>
                    <Box textAlign={'center'} p={'14px'} bgColor={'#1C1F27'} rounded={'0.5rem'} w={'26vw'} minH={'30vh'}
                        boxShadow={'0 12px 20px 3px rgba(0, 0, 0, .3)'}
                        _hover={{ transform: 'scale(1.05)' }}
                        transition={'ease .5s'}
                        cursor={'pointer'}
                    >
                        <Heading textColor={'#C2C6CA'} fontSize={'1.5rem'} fontWeight={'500'}
                        >Great visualization</Heading>
                    </Box>
                </Flex>
                <Box w={'82vw'} textAlign={'center'} mt={'10vh'} p={'0!important'}>
                    <Flex justifyContent={'center'}>
                        <Flex>
                            <Heading textColor={'#730295'} fontWeight={'500'}>Brand new</Heading>
                            <Heading textColor={'#C2C6CA'} fontWeight={'500'} ml={'0.5rem'}>paradigm.</Heading>
                        </Flex>
                    </Flex>
                    <Text textColor={'#5E6172'} mt={'5px'}>
                        We offer a unique system with many powerful tools to maximise your progress.
                    </Text>
                </Box>
                </Layout>
            </Box>
        </Box>
    );
}

export default IndexPage;
