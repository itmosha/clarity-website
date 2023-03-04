import React, { useEffect, useState } from 'react'
import { Box, Heading, Link } from '@chakra-ui/react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'


const TablesPage: React.FC<{}> = () => {
    const [data, setData] = useState({tables: []})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [cookies, setCookie] = useCookies()

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
                setError(`Unable to fetch data :(, ${response.status}`);
            }
        }
        getData();
    }, []);

    return (
        <Box>
            <Heading>This is tables page</Heading>
            <Box>
                { error === '' ? (
                    <Box>
                        { data?.tables?.map((table: any) => { 
                            return <Link href={`${table.username}/${table.title}`}>{ table.title }</Link> 
                        }) }
                    </Box>
                ) : <Heading>{ error }</Heading> }
            </Box>
        </Box>
    )
}

export default TablesPage