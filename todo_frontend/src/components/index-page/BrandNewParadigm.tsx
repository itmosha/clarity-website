import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'


const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.90 }
}

const BrandNewParadigm: React.FC<{}> = () => {
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
        </motion.div>
    )
}

export default BrandNewParadigm