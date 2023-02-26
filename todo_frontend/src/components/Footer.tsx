import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { Box, Flex, Heading, Text, Link, VStack, Icon } from '@chakra-ui/react';


function Footer() {
    return (
        <Box
            w={'100vw'}
            borderTop={'3px solid #1C1F27'}
            bgColor={'#101314'}
            p={'20px 0px !important'}
            textAlign={'center'}
        >
            <Flex 
                justify={'space-between'}
                p={'14px 3vw'}
            >
                <VStack align={'start'}>
                    <Link href={'/'} style={{ textDecoration: 'none' }}>
                        <Heading
                            fontSize={'2rem'}
                            fontWeight={'500'}
                            textColor={'#C2C6CA'}
                        >
                            Clarity
                        </Heading>
                    </Link>
                    <Heading textColor={'#5E6172'} fontSize={'1rem'} fontWeight={'500'}>
                        &copy; { new Date().getFullYear() } Clarity
                    </Heading>
                </VStack>
                <Flex>
                    <VStack px={'20px'} align={'start'}>
                        <Text
                            fontSize={'1.25rem'}
                            fontWeight={'500'}
                            textColor={'#83869C'}
                            textTransform={'uppercase'}
                        >
                            Information
                        </Text>
                        <Link mt={'5px !important'} style={{ textDecoration: 'none' }} href={'/about/'}>
                            <Text textColor={'#5E6172'}>
                            About
                            </Text>
                        </Link>
                        <Link mt={'0px !important'} style={{ textDecoration: 'none' }} href={'/terms/'}>
                            <Text textColor={'#5E6172'}>
                                Terms of use
                            </Text>
                        </Link>
                    </VStack>
                </Flex>
            </Flex>
            <Heading textColor={'#5E6172'} fontSize={'1.5rem'} fontWeight={'500'} py={'10px'}>
                Built by Sergey Balkunov.
            </Heading>
            <Flex w={'100vw'} justifyContent={'center'} gap={'5px'}>
                <Link href={'/'}>
                    <Icon className='icon-home' as={AiFillHome} boxSize={'30px'} cursor={'pointer'} />
                </Link>
                <Link href={'https://t.me/itmosha'} isExternal>
                    <Icon className='icon-telegram' as={RiTelegramFill} boxSize={'30px'} cursor={'pointer'} />
                </Link>
                <Link href={'https://github.com/itmosha'} isExternal>
                    <Icon className='icon-github' as={AiFillGithub} boxSize={'30px'} cursor={'pointer'} />
                </Link>
            </Flex>
        </Box>
    );
}

export default Footer;