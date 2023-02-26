import React from 'react';
import PageTransition from './components/PageTransition';
import Navbar from "./components/Navbar";
import IndexPageCard from './components/IndexPageCard';
import { Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';

function IndexPage() {
    return (
        <Box minH={'100vh'} bgColor={'#161920'}>
            <Navbar />
            <Box px={'9vw'}>
                <PageTransition>
                    <Flex my={'5vh'} minH={'50vh'}>
                        <Box w={'45vw'}>
                            <Flex>
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
                            <Text textColor={'#5E6172'} mt={'10px'}>
                                Clarity is made to help you shape your ideas and bring them to life.
                            </Text>
                            <Text textColor={'#5E6172'}>
                                Gain unmatched perspicacity by structuring your tasks and constantly analyzing your productivity.
                            </Text>
                            <Button 
                                p={'22px 40px'}
                                mt={'30px'} 
                                rounded={'0.5rem'} 
                                variant={'solid'} 
                                bgColor={'#730295'} 
                                _hover={{ bgColor: '#9100BD' }}
                            >
                                <Link href={'/register/'} style={{ textDecoration: 'none' }}>
                                    <Heading 
                                        fontSize={'1.25rem'} 
                                        fontWeight={'500'}
                                        textColor={'#C2C6CA'} 
                                        textTransform={'uppercase'} 
                                    >
                                        Try it
                                    </Heading>
                                </Link>
                            </Button>
                        </Box>
                    </Flex>
                    <Flex rounded={'0.5rem'} gap={'2vw'}>
                        <IndexPageCard 
                            title={'Fully customizable'} 
                            description={'No description for now'} 
                        />
                        <IndexPageCard
                            title={'Task linking'}
                            description={'No description for now'}
                        />
                        <IndexPageCard
                            title={'Powerful vusialization'}
                            description={'No description for now'}
                        />
                    </Flex>
                    <Box 
                        maxW={'82vw'} 
                        p={'0 !important'}
                        mt={'10vh'} 
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
                </PageTransition>
            </Box>
        </Box>
    );
}

export default IndexPage;
