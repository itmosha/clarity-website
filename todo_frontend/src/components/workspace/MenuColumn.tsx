import React, { useState } from 'react'
import { Box, Text, Button, Flex, Center, Menu } from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function MenuColumn({column}: InferProps<typeof MenuColumn.propTypes>) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box ml='15px'>
            <Flex h='25px'>
                <Center>
                    <Button 
                        size='25px'
                        variant='unstyled'
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <Text
                            textColor='#C2C6CA'
                            textTransform='uppercase'
                        >
                            { column.title }
                        </Text>
                    </Button>
                </Center>
                <Button
                    size='25px'
                    p='7px 5px 5px !important'
                    variant='unstyled'
                    cursor='auto'
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    { isExpanded ? (
                        <GoChevronDown 
                            size='15px' 
                            color='#5E6172'    
                        />
                    ) : (
                        <GoChevronLeft
                            size='15px'
                            color='#5E6172'
                        />
                    )}
                </Button>
            </Flex>
            { isExpanded ? (
                column.tasks?.map((task: any) => {
                    return (
                        <Box ml='15px'>
                            <Text
                                textColor='#C2C6CA'
                            >
                                { task?.title }
                            </Text>
                        </Box>
                    )}
                )
            ) : null }
        </Box>
    )
}

MenuColumn.propTypes = {
    column: PropTypes.any
}

export default MenuColumn