import React from 'react';
import {Box, Heading, Text, Flex, VStack, Center} from '@chakra-ui/react';
import Navbar from "./components/Navbar";

function IndexPage() {
    return (
        <Box bgColor={'#e5e7eb'} minH={'100vh'} maxW={'100vw'} pt={'10px'}>
            <Navbar />
            <Flex p={'5vh 5vw'} justify={'space-between'}>
                <VStack align={'start'}>
                    <Flex>
                        <Heading>Welcome to </Heading>
                        <Heading textColor={'#662C91'} ml={'0.5rem'}>Clarity</Heading>
                        <Heading>.</Heading>
                    </Flex>
                    <Box maxW={'50vw'}>
                        <Text>Clarity is made to help you shape your ideas and bring them to life.
                            Gain unmatched perspicacity by structuring your tasks and constantly analyzing your productivity.</Text>
                    </Box>
                </VStack>
                <VStack border={'2px solid black'} boxShadow={'2px 2px 0px 1px rgba(0, 0, 0, 1)'} w={'30vw'} rounded={'1rem'} minH={'50vh'} align={'start'}>
                    <Heading p={'10px 20px 0px'}>Brand new paradigm.</Heading>
                    <Text px={'20px'} pb={'30px'}>We offer a unique system with many powerful tools to maximise your progress.</Text>
                    <Flex bgColor={'#F6AA8E'} h={'3rem'} roundedRight={'full'}
                         border={'2px solid black'}
                         cursor={'pointer'}
                         borderLeft={'none'}
                         pl={'20px'}
                         pr={'30px'}
                    >
                        <Center>
                            <Heading fontSize={'1.25rem'} fontWeight={'700'}>Fully customizable</Heading>
                        </Center>
                    </Flex>
                    <Flex bgColor={'#F17F55'} w={'12vw'} h={'3rem'} roundedRight={'full'}
                          border={'2px solid black'}
                          cursor={'pointer'}
                          borderLeft={'none'}
                          pl={'20px'}
                          pr={'30px'}
                    >
                        <Center>
                            <Heading fontSize={'1.25rem'} fontWeight={'700'}>Task linking</Heading>
                        </Center>
                    </Flex>
                    <Flex bgColor={'#ED541D'} h={'3rem'} roundedRight={'full'}
                          border={'2px solid black'}
                          cursor={'pointer'}
                          borderLeft={'none'}
                          pl={'20px'}
                          pr={'30px'}
                    >
                        <Center>
                            <Heading fontSize={'1.25rem'} fontWeight={'700'}>Great visualization</Heading>
                        </Center>
                    </Flex>
                </VStack>
            </Flex>
        </Box>
    );
}

export default IndexPage;
