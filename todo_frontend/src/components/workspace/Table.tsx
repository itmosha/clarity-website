import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types'


function Table({table}: InferProps<typeof Table.propTypes>) {
    return (
        <Box 
            w='300px'
            h='fit-content'
            bgColor='#1C1F27' 
            mx='5px' 
            p='5px 10px'
            textAlign='center'
            rounded='0.5rem'
            boxShadow={'5px 5px 10px 3px rgba(0, 0, 0, .3)'}
        >
            <Heading 
                fontWeight='500'
                fontSize='1.5rem'
                textColor='#C2C6CA'
            >
                { table.title }
            </Heading>
        </Box>
    )
}

Table.propTypes = {
    table: PropTypes.any
}

export default Table