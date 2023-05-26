import { Cloud } from '@mui/icons-material'
import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Layout = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar >
                    <Icon >
                        <Cloud />
                    </Icon>
                    <Typography variant='h6' component={'div'} width={'auto'} sx={{ marginLeft: '1rem', flexGrow: '1' }}>
                        Weather Forecast
                    </Typography>
                    <Button color="error">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Layout