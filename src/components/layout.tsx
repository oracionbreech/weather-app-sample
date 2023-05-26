import React from 'react'
import { Cloud } from '@mui/icons-material'
import { AppBar, Box, Button, CircularProgress, Container, Icon, Toolbar, Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Layout = () => {
    const navigate = useNavigate()

    const {
        isAuthenticated, isLoading, logout
    } = useAuth0();

    React.useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            navigate('/login')
        }
    }, [isAuthenticated, isLoading])


    if (isLoading) {
        return <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress />
        </Container>
    }

    return (
        <>
            <Box>
                <AppBar variant='elevation' position='relative'>
                    <Toolbar >
                        <Icon >
                            <Cloud />
                        </Icon>
                        <Typography variant='h6' component={'div'} width={'auto'} sx={{ marginLeft: '1rem', flexGrow: '1' }}>
                            Weather Forecast
                        </Typography>
                        {isAuthenticated ? <Button color="error" onClick={() =>  logout()}>Logout</Button> : <></>}
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    )
}

export default Layout