import { useState } from 'react'
import weatherIcons from '@assets/index.js'

const {  feelsIcon,
  minIcon,
  maxIcon,
  humidityIcon,
  windIcon,
  pressureIcon,
} = weatherIcons

export const useWeatherStates = () => {
  const [dataWeather, setDataWeather] = useState({
    empty: false,
    loading: false,
    message: '',
    dir: '',
    location: '',
    temp: '',
    feels: '',
    humidity: '',
    min: '',
    max: '',
    wind: '',
    pressure: '',
    weather: '',
    description: '',
    days: [],
    minmax: [],
    info: [],
    foreMain: [],
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
