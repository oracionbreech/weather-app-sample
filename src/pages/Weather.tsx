import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getWeatherByCity } from '../services/weather';
import { weatherConditions } from '../constants/weather-conditions';
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet';

const Weather = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const cityParam = params.get('city');
  const [error, setError] = React.useState<string | null>(null);
  const [weather, setWeather] = React.useState(null)

  const getWeather = async (city: string) => {
    try {
      const weatherData = await getWeatherByCity(city)

      if (weatherData.error) {
        setError(weatherData.error.message || 'Error occurred fetching weather data')
      }

      if (weatherData.location) {
        setWeather(weatherData)
      }

    } catch (error: any) {
      setError('Error occured getting weather data')
    }
  }

  React.useEffect(() => {
    if (cityParam && cityParam.length > 0) {
      getWeather(cityParam)
    } else {
      navigate('/')
    } 
  }, [cityParam])


  const WeatherTable = (weather: any) => {

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });

    const weatherDate = dateFormatter.format(new Date(weather.current.last_updated_epoch * 1000))
    const temperatureInFahrenheit = weather.current.temp_f
    const weatherDescription = weatherConditions.find(condition => condition.code === weather.current.condition.code)?.day || "Unknown"

    const weatherMain = weather.current.condition.text

    const humidity = weather.current.humidity;
    const pressure = weather.current.pressure_mb;

    const country = weather.location.country
    const city = weather.location.name
    const weatherLocation = `${city}, ${country}`

    return <TableContainer component={Paper} sx={{ marginTop: '5%' }}>
      <Typography variant='h4'>
        {weatherLocation}
      </Typography>
      <Table sx={{ marginTop: '1rem' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell align="left">Temp(F)</TableCell>
            {!isTabletOrMobile && <>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Main</TableCell>
              <TableCell align="right">Pressure</TableCell>
              <TableCell align="right">Humidity</TableCell>
            </>}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {weatherDate}
            </TableCell>
            <TableCell align="left">{temperatureInFahrenheit}</TableCell>
            {!isTabletOrMobile && <>
              <TableCell align="left">{weatherDescription}</TableCell>
              <TableCell align="right">{weatherMain}</TableCell>
              <TableCell align="right">{pressure}</TableCell>
              <TableCell align="right">{humidity}</TableCell>
            </>}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  }


  return (
    <Container sx={{
      flexGrow: 1
    }}>
      <Helmet>
        <title>
          Weather App | Weather
        </title>
      </Helmet>
      {error && <Typography textAlign={'center'} marginTop={'10%'}>
        {error}
      </Typography>}
      {!error && weather && WeatherTable(weather)}
      {!error && weather && <Box justifyContent={'end'} display={'flex'}>
        <Button onClick={() =>  navigate('/')}>Back</Button>
      </Box>}
    </Container>
  )
}

export default Weather