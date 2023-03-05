import React, { useEffect, useState } from 'react'
import { Box, Link, Heading, Text } from '@chakra-ui/react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import WorkspaceNavbar from '../components/workspace/WorkspaceNavbar'


const WorkspacePage: React.FC<{}> = () => {
    const [data, setData] = useState({tables: []});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'expires', 'username']);

    const { username } = useParams();

    useEffect(() => {
        const getData = async () => {
            const usernameProvided = cookies.username;
            const accessTokenProvided = cookies.access_token;
            
            if (username !== usernameProvided) {
                setError('Access forbidden!');
                return;
            }
            
            const response = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:8000/api/tables/username/${usernameProvided}/`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${accessTokenProvided}`,
                    'Username': usernameProvided,
                }
            })
            
            if (response.status === 200) {
                const data = await response.json();
                setData(data);
            } else {
                removeCookie('access_token');
                removeCookie('expires');
                removeCookie('username');

                setError(`Access forbidden, ${response.status}`);
            }
        }
        getData();
    }, []);

    return (
        <Box minH={'100vh'} bgColor={'#161920'}>
            <WorkspaceNavbar />
            <Box>
                { error === '' ? (
                    <Box>
                        { data?.tables?.map((table: any) => {
                            return (
                                <Box>
                                    <Link href={`${table.username}/${table.slug}`}>
                                        <Heading>
                                            { table.title }
                                        </Heading>
                                    </Link>
                                    <Text>{ table.description }</Text>
                                </Box>
                            )
                        }) }
                    </Box>
                ) : <Heading>{ error }</Heading> }
            </Box>
        </Box>
    )
}

export default WorkspacePage