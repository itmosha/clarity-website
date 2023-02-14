import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from "framer-motion";

function IndexDrawing() {
    return (
        <Box w={'auto'} maxW={'auto'} h={'auto'}>
            <motion.svg viewBox={'0 0 710 210'} xmlns="http://www.w3.org/2000/svg"
                        stroke={'black'} stroke-width={'3px'} stroke-linecap={'round'} stroke-linejoin={'round'}>
                <motion.path
                    variants={draw} initial={'hidden'} animate={'visible'} overflow={'visible'}
                    transition={{
                        default: { duration: 7, ease: 'easeInOut' },
                    }}
                    d={ 'M 700 200 H 680' +
                        'V 170 L 670 160 L 660 170 V 200 H 650 ' +
                        'V 140 H 620 V 200 H 610' +
                        'V 160 L 585 145 V 200 H 575' +
                        'V 140 H 565 V 90 H 555 V 60 L 555 90 H 545 V 110 H 535 V 150 H 515 V 200 H 505' +
                        'V 130 L 495 120 V 100 H 485 V 120 L 475 130 V 200 H 465' +
                        'V 160 H 455 V 30 L 455 60 L 420 100 V 140 H 410 V 200 H 400' +
                        'V 160 H 390 V 110 H 380 V 100 H 370 V 110 H 360 V 140 H 350 V 170 H 340 V 200 H 330' +
                        'V 90 L 310 70 V 40 V 70 L 290 90 V 200 H 280' +
                        'V 130 H 265 V 120 H 250 V 200 H 240' +
                        'V 100 H 230 V 85 H 220 V 70 H 210 V 85 H 200 V 100 H 190 V 200 H 180' +
                        'V 130 L 165 115 V 80 V 140 L 150 155 V 170 H 140 V 200 H 130' +
                        'V 130 H 110 V 150 H 100 V 200 H 90' +
                        'V 130 L 70 150 V 180 H 60 V 200 H 50' +
                        'V 170 H 30 V 200 H 10' +
                        'V 10 H 700 Z'
                }
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