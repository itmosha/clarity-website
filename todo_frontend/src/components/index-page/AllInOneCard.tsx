import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Box, Heading, Text } from '@chakra-ui/react'


function IndexAllInOneCard({heading, description}: InferProps<typeof IndexAllInOneCard.propTypes>) {

    return (
        <Box px={'60px'} w={'25vw'}>
            <Heading fontWeight={'500'} fontSize={'1.75rem'} textColor={'#C2C6CA'}>{ heading }</Heading>
            <Text textColor={'#5E6172'} mt={'5px'}>{ description }</Text>
        </Box>
    );
}

IndexAllInOneCard.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default IndexAllInOneCard;