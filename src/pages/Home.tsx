import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <Container>
            <Box justifyContent={'center'}>
                <Typography textAlign={'center'} marginTop={'5%'}>
                    John Smith
                </Typography>
                <Typography textAlign={'center'}>
                    https://github.com/smithjohn
                </Typography>

                <Box justifyContent={'center'} display={'flex'} marginTop={'1%'}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Box>
            </Box>
        </Container>
    )
}

export default Home