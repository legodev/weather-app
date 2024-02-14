import { useState } from 'react'
import scatteredIcon from '../assets/scattered-clouds.png'

// Usar un objeto complejo para no tener que importarlo todo de 1 en 1

export const useWeatherStates = () => {
  const [empty, setEmpty] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dir, setDir] = useState('/assets/NY.jpg')
  const [wicon, setWicon] = useState(scatteredIcon)
  const [iconOne, setIconOne] = useState(scatteredIcon)
  const [iconTwo, setIconTwo] = useState(scatteredIcon)
  const [iconThree, setIconThree] = useState(scatteredIcon)
  const [location, setLocation] = useState('London')
  const [temp, setTemp] = useState('24°C')
  const [feels, setFeels] = useState('21°C')
  const [humidity, setHumidity] = useState('64%')
  const [min, setMin] = useState('17°C')
  const [max, setMax] = useState('26°C')
  const [wind, setWind] = useState('18 km/h')
  const [pressure, setPressure] = useState('998 hPa')
  const [weather, setWeather] = useState('Clouds')
  const [description, setDescription] = useState('Overcast Clouds')
  const [days, setDays] = useState([
    '05/12 18:00h',
    '06/12 18:00h',
    '07/12 18:00h'
  ])
  const [minmax, setMinmax] = useState([
    '24 / 14 °C',
    '20 / 10 °C',
    '22 / 15 °C'
  ])
  const [info, setInfo] = useState([
    'Light Rain',
    'Overcast Clouds',
    'Clear Sky'
  ])
  const [foreMain, setForeMain] = useState(['Rain', 'Clouds', 'Clear'])

  return {
    empty,
    setEmpty,
    loading,
    setLoading,
    message,
    setMessage,
    dir,
    setDir,
    wicon,
    setWicon,
    iconOne,
    setIconOne,
    iconTwo,
    setIconTwo,
    iconThree,
    setIconThree,
    location,
    setLocation,
    temp,
    setTemp,
    feels,
    setFeels,
    humidity,
    setHumidity,
    min,
    setMin,
    max,
    setMax,
    wind,
    setWind,
    pressure,
    setPressure,
    weather,
    setWeather,
    description,
    setDescription,
    days,
    setDays,
    minmax,
    setMinmax,
    info,
    setInfo,
    foreMain,
    setForeMain
  }
}
