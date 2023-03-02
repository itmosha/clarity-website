import React from 'react'
import { motion } from 'framer-motion'


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.05;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 3, bounce: 0 },
                opacity: { delay, duration: 0.05 }
            }
        }
    }
}

const TimeIcon: React.FC<{}> = () => (
    <motion.svg
        viewBox={'0 0 100 100'}
        initial={'hidden'}
        animate={'visible'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2px'
        stroke='#5E6172'
        fill='none'
    >
        <motion.circle variants={draw} cx={'50'} cy={'52'} r={'33'} custom={1} /> 
        <motion.path variants={draw} d={'M 50 19 V 9 H 45 H 55'} custom={2} />
        <motion.path variants={draw} d={'M 16 33 L 24 22'} custom={3} />
        <motion.path variants={draw} d={'M 76 22 L 84 33'} custom={4} />
        <motion.path variants={draw} d={'M 28 77 L 22 85'} custom={5} />
        <motion.path variants={draw} d={'M 72 77 L 78 85'} custom={6} />
        <motion.path variants={draw} d={'M 50 52 V 27'} custom={7} />
        <motion.path variants={draw} d={'M 50 52 L 63 66'} custom={8} />
    </motion.svg>
)

export default TimeIcon