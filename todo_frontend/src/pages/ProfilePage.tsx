import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import BasicLayout from '../components/BasicLayout'
import PageTransition from '../components/PageTransition'
import { useParams } from 'react-router-dom'


const ProfilePage: React.FC<{}> = () => {
    
    const { username } = useParams();

    return (
        <BasicLayout>
            <PageTransition>
                <Box minH={'80vh'}>
                    <Heading>This is { username }'s profile</Heading>
                </Box>
            </PageTransition>
        </BasicLayout>
    );
}

export default ProfilePage;