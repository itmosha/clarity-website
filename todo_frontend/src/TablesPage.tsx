import React, { useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';


function TablesPage() {
    const [tables, setTables] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        const getData = async () => {
            const usernameProvided = cookies.username;
            const accessTokenProvided = cookies.access_token;

            const response = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:8000/api/tables/username/${usernameProvided}/`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${accessTokenProvided}`,
                    'Username': usernameProvided,
                    'User-Id': '23',
                    'Access-Token': accessTokenProvided,
                }
            })
            console.log(response.status);
            const tables_ = await response.json();
            console.log(tables_);
        }
        getData();
    }, []);

    return (
        <Box>
            <Heading>This is tables page</Heading>
        </Box>
    );
}

export default TablesPage;