import React from 'react';
import { Box, Center, Heading, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useCookies } from "react-cookie";

function LoginPage() {
    const [cookies, setCookie] = useCookies(['access_token', 'expires', 'username']);

    return (
        <Box>
            <Center pt={'20px'}>
                <Heading>Sign in</Heading>
            </Center>
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

                            window.location.replace(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}:3000/`);
                        } else if (loginResponse.status === 400) {
                            const loginResponseJson = await loginResponse.json();
                            console.log('LOG IN ERROR:');
                            console.log(JSON.stringify(loginResponseJson));
                        }

                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {(props: any) => (
                    <Box w={'30vw'} m={'20px 35vw'}>
                        <Form>
                            <Box py={'0.5rem'}>
                                <Field name={'name'}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={ form.errors.name && form.touched.name }>
                                            <Input {...field} placeholder={'Name'} />
                                            <FormErrorMessage>{ form.errors.name }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Field name={'password'}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={ form.errors.password && form.touched.password }>
                                            <Input {...field} placeholder={'Password'} type={'password'}/>
                                            <FormErrorMessage>{ form.errors.password }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Center>
                                <Button w={'10vw'} mt={'10px'} colorScheme={'blue'} isLoading={ props.isSubmitting } type={'submit'}>
                                    Sign in
                                </Button>
                            </Center>
                        </Form>
                    </Box>
                )}
            </Formik>
        </Box>
    );
}

export default LoginPage;
