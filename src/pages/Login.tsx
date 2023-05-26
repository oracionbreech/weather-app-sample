import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

    const {
        loginWithRedirect,
    } = useAuth0();

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1
        }}>
            <Box width={'50%'} marginTop={'10%'} paddingRight={'10rem'}>
                <Typography width={'100%'}>
                    Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city
                </Typography>

                <Button variant="contained" sx={{
                    marginTop: '2rem'
                }} onClick={() => loginWithRedirect()}>Login</Button>
            </Box>
        </Container>
    )
}

export default Login