import React from 'react'
import { motion } from 'framer-motion'


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.25;
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

const TodoIcon: React.FC<{}> = () => (
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
        <motion.path variants={draw} d={'M 15 5 H 85 V 95 H 15 Z'} custom={1}/>
        <motion.path variants={draw} d={'M 40 20 H 72'} custom={2}/>
        <motion.path variants={draw}
                d={'M 40 35 H 72'}
                custom={3}
            />
            <motion.path
                variants={draw}
                d={'M 40 50 H 72'}
                custom={4}
            />
            <motion.path 
                variants={draw}
                d={'M 25 17 L 29 23 L 34 15'}
                custom={5}
            />
            <motion.path
                variants={draw}
                d={'M 25 32 L 29 38 L 34 30'}
                custom={6}
            />
            <motion.path
                variants={draw}
                d={'M 25 47 L 29 53 L 34 45'}
                custom={7}
            />
        </motion.svg>
)

export default TodoIcon;