import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react'


const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.90 }
}

const ClarityBringsOrder: React.FC<{}> = () => {
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
        
        </motion.div>
    )
}

export default ClarityBringsOrder