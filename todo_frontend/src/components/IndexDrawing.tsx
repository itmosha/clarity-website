import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from "framer-motion";

function IndexDrawing() {
    return (
        <Box w={'auto'} maxW={'auto'} h={'300px'}>
            <motion.svg viewBox={'0 0 700 160'} xmlns="http://www.w3.org/2000/svg"
                        stroke={'black'} stroke-width={'3px'} stroke-linecap={'round'} stroke-linejoin={'round'}>
                <motion.path
                    variants={draw} initial={'hidden'} animate={'visible'} overflow={'visible'}
                    transition={{
                        default: { duration: 1, ease: 'easeInOut' },
                    }}
                    d={'M 10 10 H 700 V 300 h -20'}
                />
            </motion.svg>
        </Box>
    );
};

const draw = {
    hidden: { pathLength: 0, opacity: 1, fill: 'rgba(255, 255, 255, 0)' },
    visible: { pathLength: 1, opacity: 1, fill: 'rgba(255, 255, 255, 0)' }
};

export default IndexDrawing;