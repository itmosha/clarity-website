import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Flex } from '@chakra-ui/react'
import IndexPageCard from './Card'


const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.75 }},
    hidden: { opacity: 0, x: -50}
}

const CardsBox: React.FC<{}> = () => {
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

        </motion.div>
    )
}

export default CardsBox