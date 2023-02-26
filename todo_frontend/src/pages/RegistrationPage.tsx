import React, { useState } from 'react';
import { Box, Center, Heading, Text, Button, FormControl, FormErrorMessage, Input, Link } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useCookies } from "react-cookie";
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

function RegistrationPage() {
    const [cookies, setCookie] = useCookies(['access_token', 'expires']);
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');

    const validateName = (value: string) => { return ( !value ? 'Name cannot be empty' : null ) };
    const validateEmail = (value: string) => { return ( !value ? 'Email cannot be empty' : (
        value.indexOf('@') <= -1 ? 'Invalid email' : null ) ) };
    const validatePassword = (value: string) => { return ( !value ? 'Password cannot be empty' : (
        value.length < 8 ? 'At least 8 characters' : null )) };

    return (
        <Box bgColor={'#161920'} minH={'100vh'} maxW={'100vw'}>
            <Navbar />
            <PageTransition>
                <Center pt={'20px'}>
                    <Heading fontSize={'2rem'} textColor={'#C2C6CA'}>Register</Heading>
                </Center>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirm_password: '',
                    }}
                    onSubmit={ (values: any, actions: any) => {
                        setTimeout( async () => {
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

                            if (registerResponse.status === 200) {
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
                                }
                            }

                            actions.setSubmitting(false);
                        }, 500);
                    }}
                >
                    {(props: any) => (
                        <Box w={'30vw'} m={'20px 35vw'}>
                            <Form>
                                <Box py={'0.5rem'}>
                                    <Field name={'name'} validate={ validateName }>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={ form.errors.name && form.touched.name }>
                                                <Input {...field} placeholder={'Name'} />
                                                <FormErrorMessage>{ form.errors.name }</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Heading textColor={'red'}>
                                        { usernameError }
                                    </Heading>
                                </Box>
                                <Box py={'0.5rem'}>
                                    <Field name={'email'} validate={ validateEmail }>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={ form.errors.email && form.touched.email }>
                                                <Input {...field} placeholder={'Email'} />
                                                <FormErrorMessage>{ form.errors.email }</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Heading textColor={'red'}>
                                        { emailError }
                                    </Heading>
                                </Box>
                                <Box py={'0.5rem'}>
                                    <Field name={'password'} validate={ validatePassword }>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={ form.errors.password && form.touched.password }>
                                                <Input {...field} placeholder={'Password'} type={'password'}/>
                                                <FormErrorMessage>{ form.errors.password }</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </Box>
                                <Box py={'0.5rem'}>
                                    <Field name={'confirm_password'} validate={ validatePassword }>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={ form.errors.confirm_password && form.touched.confirm_password }>
                                                <Input {...field} placeholder={'Confirm password'} type={'password'}/>
                                                <FormErrorMessage>{ form.errors.confirm_password }</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </Box>
                                <Center>
                                    <Button variant={'solid'} bgColor={'#730295'} rounded={'0.5rem'} mt={'30px'} p={'22px 40px'}
                                        _hover={{ bgColor: '#9100BD' }} isLoading={props.isSubmitting} type={'submit'}
                                    >
                                        <Link href={'/register/'} style={{ textDecoration: 'none' }}>
                                            <Heading fontSize={'1.25rem'} fontWeight={'500'} textColor={'#C2C6CA'}>Sign up</Heading>
                                        </Link>
                                    </Button>
                                    <Text textColor={'red'}>
                                        { error }
                                    </Text>
                                </Center>
                            </Form>
                        </Box>
                    )}
                </Formik>
            </PageTransition>
        </Box>
    );
}


export default RegistrationPage;