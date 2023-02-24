import React from 'react';
import {Box, Heading, Text, Flex, VStack, Center} from '@chakra-ui/react';
import Navbar from "./components/Navbar";
import IndexLinksBar from "./components/IndexLinksBar";

function IndexPage() {
    return (
        <Box minH={'100vh'} maxW={'100vw'} bgColor={'#1A2026'}>
        <Navbar />
            {/* <Flex p={'5vh 5vw'} justify={'space-between'}> */}
                {/* <VStack align={'start'}>
                    <Flex>
                        <Heading textColor={'white'}>Welcome to </Heading>
                        <Heading textColor={'#CBE724'} ml={'0.5rem'}>Clarity</Heading>
                        <Heading textColor={'white'}>.</Heading>
                    </Flex>
                    <Box maxW={'50vw'} textColor={'white'}>
                        <Text>
                            Clarity is made to help you shape your ideas and bring them to life.
                            Gain unmatched perspicacity by structuring your tasks and constantly analyzing your productivity.
                        </Text>
                    </Box>
                </VStack> */}
                {/* <VStack w={'30vw'} rounded={'1rem'} minH={'50vh'} align={'start'} backdropFilter={'auto'} backdropBlur={'10px'}>
                    <Heading p={'10px 20px 0px'} textColor={'white'}>Brand new paradigm.</Heading>
                    <Text px={'20px'} pb={'30px'} textColor={'white'}>We offer a unique system with many powerful tools to maximise your progress.</Text>
                    <Flex bgColor={'#F6AA8E'} w={'16vw'} h={'3rem'} roundedRight={'full'}
                          _hover={{ width: '25vw', transition: 'ease .5s' }}
                          transition={'width .5s ease'}
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
                          _hover={{ width: '25vw', transition: 'ease .5s' }}
                          transition={'width .5s ease'}
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
                    <Flex bgColor={'#ED541D'} width={'17vw'} h={'3rem'} roundedRight={'full'}
                          _hover={{ width: '25vw', transition: 'ease .5s' }}
                          transition={'width .5s ease'}
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
                </VStack> */}
            {/* </Flex> */}
            {/* <IndexLinksBar /> */}
        </Box>
    );
}

export default IndexPage;
