import React, { useEffect, useState } from 'react'
import { Box, Text, Heading, Flex, Button, Center } from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types'
import { GoChevronLeft, GoChevronDown } from 'react-icons/go'
import MenuColumn from './MenuColumn';


function MenuTable({table}: InferProps<typeof MenuTable.propTypes>) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box>
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
                            { table.title }
                        </Text>
                    </Button>
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
                        <MenuColumn column={column} />
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