import React, { useState } from 'react'
import { Box, Center, Heading, Text, Button, FormControl, FormErrorMessage, Input, Flex, Divider, Link } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useCookies } from "react-cookie"


const LoginPage: React.FC<{}> = () => {
    const [cookies, setCookie] = useCookies(['access_token', 'expires', 'username'])
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [nonFieldError, setNonFieldError] = useState(null);

    return (
        <Box 
            minH={'100vh'}
            bgGradient={'linear(to-l, #5E017A, #730295)'}
        >
            <Flex p={'14px 3vw 30px'}>
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
            <Box
                bgColor={'#1C1F27'}
                w={'30vw'}
                h={'fit-content'}
                m={'auto'}
                p={'20px'}
                rounded={'0.5rem'}
                boxShadow={'5px 12px 20px 3px rgba(0, 0, 0, .5)'}
            >
                <Flex pt={'20px'} justify='center'>
                    <Heading fontWeight={'500'} textColor={'#C2C6CA'}>Log</Heading>
                    <Heading fontWeight={'500'} textColor={'#C2C6CA'} ml={'0.5rem'}>in</Heading>
                </Flex>
                <Divider 
                    orientation='horizontal' 
                    borderColor='#83869C'
                    m={'20px auto 35px'}
                    w={'50px'}
                />
                <Box mx={'20px'}>
                    { nonFieldError ? (
                        <Text textColor={'red'} fontWeight='300' p='5px'>
                            { nonFieldError }
                        </Text>
                    ) : null }
                </Box>
                <Formik
                    initialValues={{
                        name: '',
                        password: ''
                    }}
                    onSubmit={ (values: any, actions: any) => {
                        setTimeout( async () => {
                            const loginResponse = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:8000/api/login/`, {
                                method: 'POST',
                                mode: 'cors',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    'username': values.name,
                                    'password': values.password
                                })
                            });

                            if (loginResponse.status === 200) {
                                const loginJson = await loginResponse.json();
                                let expires = new Date();

                                expires.setTime(loginJson.expiry);
                                setCookie('access_token', loginJson.token, { path: '/', expires });
                                setCookie('expires', loginJson.expiry, { path: '/', expires });
                                setCookie('username', values.name, { path: '/', expires });

                                window.location.replace(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:3000/${values.name}/`);
                            } else if (loginResponse.status === 400) {
                                const loginResponseJson = await loginResponse.json();

                                
                                setUsernameError(loginResponseJson['username'] ? loginResponseJson['username'] : null);
                                setPasswordError(loginResponseJson['password'] ? loginResponseJson['password'] : null);
                                setNonFieldError(loginResponseJson['non_field_errors'] ? loginResponseJson['non_field_errors'] : null);
                            }

                            actions.setSubmitting(false);
                        }, 500);
                    }}
                >
                    {(props: any) => (
                        <Box>
                            <Form>
                                <Box py={'0.5rem'} mx={'20px'}>
                                    <Field name={'name'}>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={ form.errors.name && form.touched.name }>
                                                <Input {...field} placeholder={'Name'} textColor={'#C2C6CA'} />
                                                <FormErrorMessage>{ form.errors.name }</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    { usernameError ? (
                                        <Text textColor={'red'} fontWeight='300' p='5px'>
                                            { usernameError }
                                        </Text>
                                    ) : null }
                                </Box>
                                <Box py={'0.5rem'} mx={'20px'}>
                                    <Field name={'password'}>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={ form.errors.password && form.touched.password }>
                                                <Input {...field} placeholder={'Password'} type={'password'} textColor={'#C2C6CA'} />
                                                <FormErrorMessage>{ form.errors.password }</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    { passwordError ? (
                                        <Text textColor={'red'} fontWeight='300' p='5px'>
                                            { passwordError }
                                        </Text>
                                    ) : null }
                                </Box>
                                <Center>
                                    <Button 
                                        p={'20px 30px'}
                                        m={'20px auto 10px'} 
                                        rounded={'0.5rem'}
                                        variant={'solid'}
                                        isLoading={ props.isSubmitting } 
                                        type={'submit'}
                                        bgColor={'#730295'}
                                        _hover={{ bgColor: '#9100BD' }}
                                    >
                                        <Heading 
                                            fontSize={'1.25rem'} 
                                            fontWeight={'500'}
                                            textColor={'#C2C6CA'} 
                                        >
                                            Log in
                                        </Heading>
                                    </Button>
                                </Center>
                            </Form>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default LoginPage
