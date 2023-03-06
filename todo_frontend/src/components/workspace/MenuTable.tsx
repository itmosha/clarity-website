import React, { useEffect, useState } from 'react'
import { Box, Text, Heading, Flex, Button, Center } from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types'
import { GoChevronLeft, GoChevronDown } from 'react-icons/go'


function MenuTable({table}: InferProps<typeof MenuTable.propTypes>) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box>
            <Flex h='25px'>
                <Center>
                    <Text
                        textColor='#C2C6CA'
                        textTransform='uppercase'
                    >
                        { table.title }
                    </Text>
                </Center>
                <Button
                    size='25px'
                    p='7px 5px 5px !important'
                    variant='unstyled'
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
                table.columns?.map((column: any) => {
                    console.log(column);
                    return (
                        <Box ml='15px'>
                            <Text
                                textColor='#C2C6CA'
                                textTransform='uppercase'
                            >
                                { column?.title }
                            </Text>
                        </Box>
                    )}
                )
            ) : null }
        </Box>
    )
}

MenuTable.propTypes = {
    table: PropTypes.any
}

export default MenuTable