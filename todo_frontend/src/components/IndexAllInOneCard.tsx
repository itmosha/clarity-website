import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';


type AllInOneCardProps = {
    heading: string,
    description: string
}

const IndexAllInOneCard: React.FC<AllInOneCardProps> = (props) => {
    const { heading, description } = props;

    return (
        <Box px={'20px'} w={'25vw'}>
            <Heading fontWeight={'500'} fontSize={'1.75rem'} textColor={'#C2C6CA'}>{ heading }</Heading>
            <Text textColor={'#5E6172'}>{ description }</Text>
        </Box>
    );
}

export default IndexAllInOneCard;