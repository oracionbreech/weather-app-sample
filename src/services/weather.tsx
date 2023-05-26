

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getWeatherByCity = async (city: string) => {
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${WEATHER_API_KEY}`)
    return (await data.json())
}