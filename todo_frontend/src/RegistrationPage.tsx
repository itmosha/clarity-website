import React from 'react';
import { Box, Center, Heading, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

function RegistrationPage() {

    const validateName = (value: string) => { return ( !value ? 'Name cannot be empty' : null ) };
    const validateEmail = (value: string) => { return ( !value ? 'Email cannot be empty' : (
        value.indexOf('@') <= -1 ? 'Invalid email' : null ) ) };
    const validatePassword = (value: string) => { return ( !value ? 'Password cannot be empty' : (
        value.length < 8 ? 'At least 8 characters' : null )) };

    return (
        <Box>
            <Center pt={'20px'}>
                <Heading>Sign up</Heading>
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
                        const response = await fetch('http://127.0.0.1:8000/api/register/', {
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

                        if (response.status === 200) {
                            const responseJson = await response.json();

                            // login and redirect user

                        } else if (response.status === 400) {
                            // handle user already exists
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
                                <Button w={'10vw'} mt={'10px'} colorScheme={'blue'} isLoading={ props.isSubmitting } type={'submit'}>
                                    Sign up
                                </Button>
                            </Center>
                        </Form>
                    </Box>
                )}
            </Formik>
        </Box>
    );
}

export default RegistrationPage;