import React from 'react';
import IndexPageCard from '../components/IndexPageCard';
import BasicLayout from '../components/BasicLayout';
import { EmblaOptionsType } from 'embla-carousel-react';
import { Box, Heading, Text, Flex, Button, Link, Image, UnorderedList, ListItem, Divider } from '@chakra-ui/react';
import IndexAllInOneCard from '../components/IndexAllInOneCard';


const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function IndexPage() {
    return (
        <BasicLayout>
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
                                Try it
                            </Heading>
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <Image src={'crystal.png'} h={'44vh'}/>
                </Box>
            </Flex>
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
            <Box
                m={'5vh 9vw 10vh 9vw !important'}
                p={'20px 30px'}
                bgColor={'#1C1F27'} 
                rounded={'0.5rem'}
                boxShadow={'0 12px 20px 3px rgba(0, 0, 0, .3)'}
                textAlign={'center'}
            >
                <Flex justify={'center'}>
                    <IndexAllInOneCard heading='Todo' description='description' />
                    <Divider orientation={'vertical'} my={'10px'} height={'12vh'} borderColor={'#83869C'}/>
                    <IndexAllInOneCard heading='Markdown editor' description='description' />
                    <Divider orientation={'vertical'} my={'10px'} height={'12vh'} borderColor={'#83869C'}/>
                    <IndexAllInOneCard heading='Time tracker' description='description' />
                </Flex>
            </Box>
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
        </BasicLayout>
    );
}

export default IndexPage;
