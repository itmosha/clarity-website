import React from 'react';
import {Box, Heading, Text, Flex, VStack, Center, Button, Link, Image} from '@chakra-ui/react';
import Navbar from "./components/Navbar";
import IndexLinksBar from "./components/IndexLinksBar";
import { motion } from 'framer-motion';
// BG #161920 
// ITEMS #1C1F27

function IndexPage() {
    return (
        <Box minH={'100vh'} w={'100vw'} bgColor={'#161920'}>
            <Navbar />
            <Box px={'9vw'}>
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
                                <Heading fontSize={'1.25rem'} textColor={'#C2C6CA'} textTransform={'uppercase'}>Try it</Heading>
                            </Link>
                        </Button>
                    </Box>
                    <Box>
                        <motion.svg viewBox={'0 0 400 300'}>
                            <motion.path
                                stroke={'#730295'}
                                fill={'#730295'}
                                d={'M 0 0 L 400 0 L 400 300 L 0 300 Z'}
                                />
                        </motion.svg>
                    </Box>
                </Flex>
                <Flex w={'82vw'} boxShadow={'0px 0px 30px 10px rgba(0, 0, 0, .2)'} bgColor={'rgba(0, 0, 0, .2)'} rounded={'0.5rem'}>
                    <Box textAlign={'center'} p={'10px'} bgColor={'#1C1F27'} rounded={'0.5rem'} w={'26vw'}>
                        <Heading textColor={'#C2C6CA'} fontSize={'1.5rem'} fontWeight={'500'}
                            >Fully customizable</Heading>
                    </Box>
                    <Box textAlign={'center'} p={'10px'} bgColor={'#1C1F27'} mx={'2vw'} rounded={'0.5rem'} w={'26vw'}>
                        <Heading textColor={'#C2C6CA'} fontSize={'1.5rem'} fontWeight={'500'}
                            >Task linking</Heading>
                    </Box>
                    <Box textAlign={'center'} p={'10px'} bgColor={'#1C1F27'} rounded={'0.5rem'} w={'26vw'}>
                        <Heading textColor={'#C2C6CA'} fontSize={'1.5rem'} fontWeight={'500'}
                        >Great visualization</Heading>
                    </Box>
                </Flex>
                <Box w={'82vw'} textAlign={'center'} mt={'8vh'} p={'0!important'}>
                    <Flex w={'fit-content'}>
                        <Heading textColor={'#730295'} fontWeight={'500'}>Brand new</Heading>
                        <Heading textColor={'#C2C6CA'} fontWeight={'500'} ml={'0.5rem'}>paradigm.</Heading>
                    </Flex>
                    <Text textColor={'#5E6172'} mt={'5px'}>
                        We offer a unique system with many powerful tools to maximise your progress.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default IndexPage;
