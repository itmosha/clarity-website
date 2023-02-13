import React from 'react';
import { Box, Flex, Heading, Center } from '@chakra-ui/react';


function IndexLinksBar() {
    return (
        <Box bgGradient={'linear(to-t, #E5E7EB, #F7B8A1, #F7B8A1)'} h={'20vh'} my={'10vh'} borderTop={'2px solid black'} position={'relative'}>
            <Flex position={'absolute'} p={'0!important'} m={'0!important'} bgColor={'#e5e7eb'} w={'36vw'} left={'32vw'} bottom={'17vh'}
                  boxShadow={'2px 2px 0px 1px rgba(0, 0, 0, 1)'} border={'2px solid black'} rounded={'1rem'}
            >
                <Center w={'12vw'} p={'10px'} cursor={'pointer'} borderRight={'2px solid black'}>
                    <Heading fontSize={'1rem'}>My workspace</Heading>
                </Center>
                <Center w={'12vw'} p={'10px'} cursor={'pointer'} >
                    <Heading fontSize={'1rem'}>Plugins</Heading>
                </Center>
                <Center w={'12vw'} p={'10px'} cursor={'pointer'} borderLeft={'2px solid black'}>
                    <Heading fontSize={'1rem'}>Feedback</Heading>
                </Center>
            </Flex>
        </Box>
    );
};

export default IndexLinksBar;