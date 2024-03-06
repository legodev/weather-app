import { useState } from 'react'
import weatherIcons from '@assets/index.js'

const {  feelsIcon,
  minIcon,
  maxIcon,
  humidityIcon,
  windIcon,
  pressureIcon,
  NY,} = weatherIcons

export const useWeatherStates = () => {
  const [dataWeather, setDataWeather] = useState({
    empty: false,
    loading: false,
    message: '',
    dir: NY,
    location: 'London',
    temp: '24°C',
    feels: '21°C',
    humidity: '64%',
    min: '17°C',
    max: '26°C',
    wind: '18 km/h',
    pressure: '998 hPa',
    weather: 'clouds',
    description: 'overcast clouds',
    days: ['05/12 18:00h', '06/12 18:00h', '07/12 18:00h'],
    minmax: ['24 / 14 °C', '20 / 10 °C', '22 / 15 °C'],
    info: ['light rain', 'overcast clouds', 'clear sky'],
    foreMain: ['Rain', 'Clouds', 'Clear'],
  })

  const icons = [
    feelsIcon,
    minIcon,
    maxIcon,
    humidityIcon,
    windIcon,
    pressureIcon,
  ]
  return {
    dataWeather,
    setDataWeather,
    icons,
  }
}
