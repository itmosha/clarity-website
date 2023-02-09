import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';


function TablePage() {
    const { tableID } = useParams();

    return (
        <Box>
            <Heading>This is table { tableID } </Heading>
        </Box>
    );
}

export default TablePage;