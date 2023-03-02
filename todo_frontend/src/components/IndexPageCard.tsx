import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'


type IndexPageCardProps = {
    title: string,
    description: string
}

const IndexPageCard: React.FC<IndexPageCardProps> = ({ title, description }) => {
    return (
        <Box 
            w={'26vw'} 
            p={'15px 25px'} 
            rounded={'0.5rem'} 
            bgColor={'#1C1F27'} 
            textAlign={'start'} 
            cursor={'pointer'}
            boxShadow={'0 12px 20px 3px rgba(0, 0, 0, .3)'}
            _hover={{ transform: 'scale(1.05)' }}
            transition={'ease .5s'}
        >
            <Heading 
                pb={'10px'}
                fontSize={'1.5rem'} 
                fontWeight={'500'}
                textColor={'#C2C6CA'} 
            >
                { title }
            </Heading>
            <Text textColor={'#5E6172'} lineHeight={'1.35'}>
                { description }
            </Text>
        </Box>
    )
}

export default IndexPageCard