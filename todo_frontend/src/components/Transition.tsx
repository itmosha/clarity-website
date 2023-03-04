import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types'



function Transition({ children, transitionType }: InferProps<typeof Transition.propTypes>) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const variants = {
        visible: { 
            opacity: 1, 
            scale: 1,
            x: 0,
            transition: { 
                duration: transitionType === 'scale' ? 0.5 : 0.75 
            }
        },
        hidden: { 
            opacity: 0, 
            scale: transitionType === 'scale' ? 0.90 : 1,
            x: transitionType === 'scale' ? 0 : ( transitionType === 'from-left' ? -50 : 50 )
        }
    }

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
            { children }
        </motion.div>
    )
}

Transition.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    transitionType: PropTypes.string.isRequired
}

export default Transition