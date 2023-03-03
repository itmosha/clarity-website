import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'


const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
    hidden: { opacity: 0, scale: 0.90 }
}

const AllInOne: React.FC<{}> = () => {
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
                m={'1vh 9vw 7vh 9vw !important'}
                textAlign={'center'}
            >
                <Flex justify={'center'}>
                    <Heading textColor={'#730295'} fontWeight={'500'}>All</Heading>
                    <Heading textColor={'#C2C6CA'} fontWeight={'500'} pl={'0.5rem'}>in one.</Heading>
                </Flex>
                <Text textColor={'#5E6172'}>Everything you need is available in a single app. </Text>
            </Box>
        </motion.div>
    )
}

export default AllInOne