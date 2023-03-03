
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react'
import IndexObject from './ClaritySVGBox'


const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.75 }},
    hidden: { opacity: 0, x: -50 }
}

const TopBox: React.FC<{}> = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial={'hidden'}
            animate={control}
        >
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
                <IndexObject />
            </Flex>
        </motion.div>
    )
}

export default TopBox