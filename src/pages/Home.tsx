import { useAuth0 } from '@auth0/auth0-react';
import { Search } from '@mui/icons-material';
import { Box, Button, Container, FormControl, Input, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import { getWeatherByCity } from '../services/weather';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { user } = useAuth0()
    const [city, setCity] = React.useState('');

    const navigate = useNavigate();

    const getWeather = async () => {
        navigate(`/weather?city=${city}`)
    }

    return (
        <Container>
            <Box justifyContent={'center'}>
                <Typography textAlign={'center'} marginTop={'5%'}>
                    {user?.nickname}
                </Typography>
                <Typography textAlign={'center'}>
                    https://github.com/{user?.nickname}
                </Typography>

                <Box justifyContent={'center'} display={'flex'} marginTop={'1%'}>
                    <FormControl variant="outlined">
                        <Input
                            error={city.length === 0}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            }
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='City'
                        />
                    </FormControl>
                </Box>

                <Box justifyContent={'center'} display={'flex'} marginTop={'1%'}>
                    <Button disabled={city.length === 0} onClick={getWeather} variant="contained" sx={{
                        marginTop: '2rem'
                    }}>Display Weather</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Home