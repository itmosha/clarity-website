import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
import PropTypes, { InferProps } from 'prop-types'
import { Box } from '@chakra-ui/react'



function BasicLayout({ children }: InferProps<typeof BasicLayout.propTypes>) {
    return (
        <Box
            maxW={'100vw'}
            minH={'100vh'}
            bgColor={'#161920'}
        >
            <Navbar />
            <Box>
                <PageTransition>
                    { children }
                </PageTransition>
            </Box>
            <Footer />
        </Box>
    )
}

BasicLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default BasicLayout