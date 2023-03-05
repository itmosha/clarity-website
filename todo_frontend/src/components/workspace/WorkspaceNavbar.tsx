import React from 'react'
import { Flex, Heading, Text, Button, Link } from '@chakra-ui/react'


const WorkspaceNavbar: React.FC<{}> = () => {
    return (
        <Flex 
            bgColor={'#1C1F27'} 
            w={'100vw'}
            p={'5px 1vw 10px'}
            borderBottom={'2px solid #272B36'}
        >
            <Link href={'/'} style={{ textDecoration: 'none' }}>
                <Button variant={'unstyled'} _hover={{ bgColor: 'none' }}>
                    <Heading
                        fontSize={'2rem'} 
                        fontWeight={'500'}                                 
                        textColor={'#C2C6CA'}
                    >
                        Clarity
                    </Heading>
                </Button>
            </Link>
        </Flex>
    )
}

export default WorkspaceNavbar