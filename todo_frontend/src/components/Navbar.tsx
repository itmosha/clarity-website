import React from 'react';
import {Box, Center, Flex, Heading, Text, Link, Avatar, Button } from '@chakra-ui/react';
import { motion } from "framer-motion";
import '../buttons.css';

// HEADER COLOR #2F3640

function Navbar() {
    return (
        <Box p={'0 !important'} m={'0 !important'}>
            <Flex justify={'space-between'} p={'7px 7px 2px'} w={'100vw'} bgColor={'#2F3640'}>
                <button className='clarity-main-button'>
                        <Link href={'/'} style={{ textDecoration: 'none' }}>
                            <Heading fontSize={'1.5rem'} fontWeight='500' textDecoration={'none'} textColor={'white'}>Clarity</Heading>
                        </Link>
                </button>
            </Flex>
            <Box w={'100vw'} h={'auto'}>
                <motion.svg viewBox={'0 0 1000 39'} stroke={'#2F3640'}>
                    <motion.path fill={'#2F3640'}
                        d={
                            'M 0 0 L 1000 0 L 1000 11 L 990 4 L 970 10 L 950 3 L 935 9  L 925 1 L 900 8' + 
                                  'L 880  1 L 870  12 L 850 1 L 835 9  L 825 1 L 810 11 L 805 3 L 780 9' +
                                  'L 770  0 L 760  8  L 740 2 L 720 11 L 710 3 L 700 8  L 690 1 L 670 10' + 
                                  'L 660  4 L 645  9  L 640 3 L 620 10 L 600 1 L 590 8  L 575 1 L 560 11' + 
                                  'L 550  4 L 535  9  L 520 1 L 510 7  L 505 2 L 485 9  L 470 3 L 460 10' + 
                                  'L 450  2 L 430  8  L 420 1 L 400 8  L 390 2 L 375 9  L 365 3 L 357 8' + 
                                  'L 345  2 L 325  10 L 315 1 L 300 9  L 285 2 L 275 9  L 260 0 L 250 6' + 
                                  'L 235  1 L 225  9  L 215 1 L 190 9  L 180 1 L 165 9  L 155 2 L 145 10' + 
                                  'L 125  2 L 110  9  L 100 2 L 90  10 L 65  3 L 50 10  L 40  3 L 30  12' +
                                  'L 15   6 L 0 12    Z'
                        }
                    />
                </motion.svg>
            </Box>
        </Box>
    );
}

export default Navbar;