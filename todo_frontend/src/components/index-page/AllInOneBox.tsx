import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Flex, Divider } from '@chakra-ui/react'
import IndexAllInOneCard from './AllInOneCard'
import TodoIcon from '../svg/TodoIcon'
import NotesIcon from '../svg/NotesIcon'
import TimeIcon from '../svg/TimeIcon'


const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.75 }},
    hidden: { opacity: 0, x: 50}
}

const AllInOneBox: React.FC<{}> = () => {
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
                
                m={'5vh 9vw 10vh 9vw !important'}
                p={'20px 30px'}
                bgColor={'#1C1F27'} 
                rounded={'0.5rem'}
                boxShadow={'0 12px 20px 3px rgba(0, 0, 0, .3)'}
                textAlign={'center'}
            >
                <Flex justify={'center'}>
                    <Box>
                        <IndexAllInOneCard heading='Todo' description='Conveniently store your tasks and manage them.' />
                        <Flex justify={'center'} py={'20px'}>
                            <Box w={'10vw'}>
                                <TodoIcon />
                            </Box>
                        </Flex>
                    </Box>
                    <Divider orientation={'vertical'} my={'10px'} height={'auto'} borderColor={'#83869C'}/>
                    <Box>
                        <IndexAllInOneCard heading='Notes editor' description='Create and edit your notes in any format you want.' />
                        <Flex justify='center' py='20px'>
                            <Box w='10vw'>
                                <NotesIcon />
                            </Box>
                        </Flex>
                    </Box>
                    <Divider orientation={'vertical'} my={'10px'} height={'auto'} borderColor={'#83869C'}/>
                    <Box>
                        <IndexAllInOneCard heading='Time tracker' description='Track your work time to precisely analyze your workflow.' />
                        <Flex justify='center' py='20px'>
                            <Box w='10vw'>
                                <TimeIcon />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </motion.div>
    )
}

export default AllInOneBox