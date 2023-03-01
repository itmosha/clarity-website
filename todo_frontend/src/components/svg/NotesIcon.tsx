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

const NotesIcon: React.FC<{}> = () => (
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
        <motion.path
            variants={draw}
            d={'M 25 15 L 20 20 L 25 25'}
            custom={1} />
        <motion.path
            variants={draw}
            d={'M 30 15 L 35 20 L 30 25'}
            custom={2} />
        <motion.circle
            variants={draw}
            cx={'42'}
            cy={'25'}
            r={'0.5'}
            custom={3} />
        <motion.circle
            variants={draw}
            cx={'47'}
            cy={'25'}
            r={'0.5'}
            custom={4} />
        <motion.circle
            variants={draw}
            cx={'52'}
            cy={'25'}
            r={'0.5'}
            custom={5} />
        <motion.path
            variants={draw}
            d={'M 64 15 L 59 20 L 64 25'}
            custom={6} />
        <motion.path
            variants={draw}
            d={'M 68 26 L 71 14'}
            custom={7} />
        <motion.path
            variants={draw}
            d={'M 75 15 L 80 20 L 75 25'}
            custom={8} />

        <motion.path
            variants={draw}
            d={'M 38 50 V 40 L 43 45 L 48 40 V 50'}
            custom={9} 
        />
        <motion.path
            variants={draw}
            d={'M 59 40 V 50 L 56 47 L 59 50 L 62 47'}
            custom={10}
        />

        <motion.path
            variants={draw}
            d={'M 22.5 65 V 75 H 29.5'}
            custom={11}
        />
        <motion.path
            variants={draw}
            d={'M 34.5 75 L 38 65 L 41.5 75 L 39.66 72.6 H 35.76'}
            custom={12}
        />
        <motion.path
            variants={draw}
            d={'M 46.5 65 H 53.5 H 50 V 75'}
            custom={13}
        />
        <motion.path
            variants={draw}
            d={'M 65.5 65 H 58.5 V 75 H 65.5 H 58.5 V 70 H 65.5'}
            custom={14}
        />
        <motion.path
            variants={draw}
            d={'M 70.5 75 L 77.5 65 L 74 70 L 70.5 65 L 77.5 75'}
            custom={15}
        />
    </motion.svg>
)

export default NotesIcon