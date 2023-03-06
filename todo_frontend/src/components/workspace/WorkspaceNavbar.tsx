import React from 'react'
import { Flex, Heading, Text, Button, Link } from '@chakra-ui/react'


const WorkspaceNavbar: React.FC<{}> = () => {
    return (
        <Flex 
            bgColor='#1C1F27' 
            w='100vw'
            h='50px'
            maxH='50px'
            p='4px 15px 10px'
            borderBottom='1px solid #272B36'
        >
            <Link 
                href={`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:3000/`} 
                style={{ textDecoration: 'none' }}
            >
                <Button 
                    variant='unstyled'
                    _hover={{ bgColor: 'none' }}>
                    <Heading
                        fontSize='25px'
                        fontWeight='500'                                 
                        textColor='#C2C6CA'
                    >
                        Clarity
                    </Heading>
                </Button>
            </Link>
        </Flex>
    )
}

export default WorkspaceNavbar