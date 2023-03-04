import React, { useState } from 'react'
import { Box, Center, Heading, Text, Button, Flex, Divider, FormControl, FormErrorMessage, Input, Link } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useCookies } from "react-cookie"
import PageTransition from '../components/PageTransition'


const RegistrationPage: React.FC<{}> = () => {
    const [cookies, setCookie] = useCookies(['access_token', 'expires', 'username']);
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');

    const validateName = (value: string) => { return ( !value ? 'Name cannot be empty' : null ) }
    const validateEmail = (value: string) => { return ( !value ? 'Email cannot be empty' : (
        value.indexOf('@') <= -1 ? 'Invalid email' : null ) ) }
    const validatePassword = (value: string) => { return ( !value ? 'Password cannot be empty' : (
        value.length < 8 ? 'At least 8 characters' : null )) }

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
            <PageTransition>
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
                        <Heading fontWeight={'500'} textColor={'#C2C6CA'}>Sign up</Heading>
                    </Flex>
                    <Divider 
                        orientation='horizontal' 
                        borderColor='#83869C'
                        m={'20px auto 35px'}
                        w={'50px'}
                    />
                    { error === '' ? null : (
                        <Box mx={'20px'}>
                            <Text textColor={'red'} fontWeight='300' p='5px'>
                                { error }
                            </Text>
                        </Box>
                    )}
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirm_password: '',
                        }}
                        onSubmit={ (values: any, actions: any) => {
                            setTimeout( async () => {

                                if (values.password !== values.confirm_password) {
                                    setError('Passwords do not match.');
                                    actions.setSubmitting(false);
                                    return;
                                }
                                const registerResponse = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:8000/api/register/`, {
                                    method: 'POST',
                                    mode: 'cors',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        'username': values.name,
                                        'email': values.email,
                                        'password': values.password
                                    })
                                });

                                if (registerResponse.status === 201) {
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
                                        setUsernameError('');
                                        setEmailError('');

                                        const loginJson = await loginResponse.json();
                                        let expires = new Date();

                                        expires.setTime(loginJson.expiry);
                                        setCookie('access_token', loginJson.token, { path: '/', expires });
                                        setCookie('expires', loginJson.expiry, { path: '/', expires });
                                        setCookie('username', values.name, { path: '/', expires });
                                        
                                        window.location.replace(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:3000/`);
                                    } else if (loginResponse.status === 400) {
                                        // Handle login errors
                                    }
                                } else if (registerResponse.status === 400) {
                                    const registerResponseJson = await registerResponse.json();
                                    const error = registerResponseJson['message'];
                                    
                                    if (error) {
                                        if (error === 'username') {
                                            setEmailError('');
                                            setUsernameError('This name is already taken');
                                        } else if (error === 'email') {
                                            setEmailError('This email is already taken');
                                            setUsernameError('');
                                        }
                                    } else {
                                        setError('Unknown error');
                                        setEmailError('');
                                        setUsernameError('');
                                    }
                                }

                                actions.setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {(props: any) => (
                            <Box>
                                <Form>
                                    <Box py={'0.5rem'} mx={'20px'}>
                                        <Field name={'name'} validate={ validateName }>
                                            {({ field, form }: any) => (
                                                <FormControl isInvalid={ form.errors.name && form.touched.name }>
                                                    <Input {...field} placeholder={'Name'} textColor={'#C2C6CA'}/>
                                                    <FormErrorMessage>{ form.errors.name }</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        { usernameError === '' ? null : (
                                            <Text textColor={'red'} fontWeight='300' p='5px'>
                                                { usernameError }
                                            </Text>            
                                        )}
                                    </Box>
                                    <Box py={'0.5rem'} mx={'20px'}>
                                        <Field name={'email'} validate={ validateEmail }>
                                            {({ field, form }: any) => (
                                                <FormControl isInvalid={ form.errors.email && form.touched.email }>
                                                    <Input {...field} placeholder={'Email'} textColor={'#C2C6CA'}/>
                                                    <FormErrorMessage>{ form.errors.email }</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        { emailError === '' ? null : (
                                            <Text textColor={'red'} fontWeight='300' p='5px'>
                                                { emailError }
                                            </Text>            
                                        )}
                                    </Box>
                                    <Box py={'0.5rem'} mx={'20px'}>
                                        <Field name={'password'} validate={ validatePassword }>
                                            {({ field, form }: any) => (
                                                <FormControl isInvalid={ form.errors.password && form.touched.password }>
                                                    <Input {...field} placeholder={'Password'} type={'password'} textColor={'#C2C6CA'}/>
                                                    <FormErrorMessage>{ form.errors.password }</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Box>
                                    <Box py={'0.5rem'} mx={'20px'}>
                                        <Field name={'confirm_password'} validate={ validatePassword }>
                                            {({ field, form }: any) => (
                                                <FormControl isInvalid={ form.errors.confirm_password && form.touched.confirm_password }>
                                                    <Input {...field} placeholder={'Confirm password'} type={'password'} textColor={'#C2C6CA'}/>
                                                    <FormErrorMessage>{ form.errors.confirm_password }</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Box>
                                    <Center>
                                        <Button 
                                            variant={'solid'} 
                                            bgColor={'#730295'} 
                                            rounded={'0.5rem'} 
                                            m={'20px auto 10px'} 
                                            p={'20px 30px'}
                                            _hover={{ bgColor: '#9100BD' }} 
                                            isLoading={props.isSubmitting} 
                                            type={'submit'}
                                        >
                                            <Link href={'/register/'} style={{ textDecoration: 'none' }}>
                                                <Heading fontSize={'1.25rem'} fontWeight={'500'} textColor={'#C2C6CA'}>Sign up</Heading>
                                            </Link>
                                        </Button>
                                    </Center>
                                </Form>
                            </Box>
                        )}
                    </Formik>
                </Box>
            </PageTransition>
        </Box>
    )
}

export default RegistrationPage