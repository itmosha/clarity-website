import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const TablePage: React.FC<{}> = () => {
    const { table_title } = useParams()

    return (
        <Box>
            <Heading>This is table { table_title } </Heading>
        </Box>
    )
}

export default TablePage