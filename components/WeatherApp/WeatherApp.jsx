/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import './WeatherApp.css'
import searchIcon from '../../assets/search.png'
import windIcon from '../../assets/wind.png'
import humidityIcon from '../../assets/humidity.png'
import feelsIcon from '../../assets/feels.png'
import minIcon from '../../assets/min.png'
import maxIcon from '../../assets/max.png'
import pressureIcon from '../../assets/pressure.png'
import { resolveWeatherIcon } from '../../scripts/conditional'
import { useWeatherStates } from '../../scripts/weatherStates'
import { fetchWeatherData, fetchForecastData } from '../../scripts/api'
import { formatDateTime, temps } from '../../scripts/formatData/'
import Footer from '../Footer'

import CardElement from '../CardElement'
import ForecastElement from '../ForecastElement'
import Form from '../Form'
import FirstData from './FirstData'
import Loading from './Loading'
import { useEffect } from 'react'

export default function WeatherApp() {
  const {
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
    setForeMain,
  } = useWeatherStates()

  const searchFunct = async () => {
    const element = document.getElementsByClassName('weather__city-input')
    const city = element[0].value

    const apiUnsplash = 'KCOCJSdlGDReL9V-dGHJTyVUCHNwmPH3tv9u-jWfBNE'
    const urlUnsplash = `https://api.unsplash.com/search/photos?client_id=${apiUnsplash}&page=1&orientation=landscape&query=${city}`

    try {
      setLoading(true)
      const weatherData = await fetchWeatherData(city)

      console.log(weatherData)

      if (weatherData.cod === 200) {
        const resUnsplash = await fetch(urlUnsplash)
        const dataUnsplash = await resUnsplash.json()
        const src = await dataUnsplash.results[0].urls.regular
        setDir(src)
      } else {
        setMessage(weatherData.message)
      }

      const lat = await weatherData.coord.lat
      const lon = await weatherData.coord.lon
      const forecastData = await fetchForecastData(lat, lon)
      const main = weatherData.main
      const c = '°C'

      setLocation(weatherData.name + ', ' + weatherData.sys.country)
      setHumidity(main.humidity + '%')
      setWind(Math.round(weatherData.wind.speed) + ' km/h')
      setTemp(Math.round(main.temp) + c)
      setFeels(Math.round(main.feels_like) + c)
      setMin(Math.round(main.temp_min) + c)
      setMax(Math.round(main.temp_max) + c)
      setPressure(Math.round(main.pressure) + ' hPa')
      setWeather(weatherData.weather[0].main)
      setDescription(weatherData.weather[0].description)

      resolveWeatherIcon(weatherData, setWicon)

      const foreDays = [
        await forecastData.list[6],
        forecastData.list[14],
        forecastData.list[22],
      ]

      const date = [
        formatDateTime(6, forecastData),
        formatDateTime(14, forecastData),
        formatDateTime(22, forecastData),
      ]

      const temp = [
        temps(6, forecastData),
        temps(14, forecastData),
        temps(22, forecastData),
      ]

      const arrayInfo = [
        await forecastData.list[6].weather[0].description,
        forecastData.list[14].weather[0].description,
        forecastData.list[22].weather[0].description,
      ]

      const foreMains = [
        await forecastData.list[6].weather[0].main,
        forecastData.list[14].weather[0].main,
        forecastData.list[22].weather[0].main,
      ]

      setInfo(arrayInfo)
      setDays(date)
      setMinmax(temp)
      setForeMain(foreMains)

      resolveWeatherIcon(foreDays[0], setIconOne)
      resolveWeatherIcon(foreDays[1], setIconTwo)
      resolveWeatherIcon(foreDays[2], setIconThree)

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    searchFunct()
  }, [])

  return (
    <div>
      <section className="container">
        <img src={dir} alt="City Background" className="weather__api-img" />
        {loading && <Loading />}
        <Form search={searchFunct} icon={searchIcon} />
        <h3 className='message'>{message}</h3>
        <FirstData
          icon={wicon}
          temp={temp}
          location={location}
          weather={weather}
          description={description}
        />
        <div className="weather__card-container">
          <CardElement
            src={feelsIcon}
            alt="Feels Like Icon"
            cls="feels__like"
            number={feels}
            desc="Feels Like"
          />
          <CardElement
            src={minIcon}
            alt="Minimum Temperature Icon"
            cls="min__temp"
            number={min}
            desc="Min Temp"
          />
          <CardElement
            src={maxIcon}
            alt="Maximum Temperature Icon"
            cls="max__temp"
            number={max}
            desc="Max Temp"
          />
          <CardElement
            src={humidityIcon}
            alt="Humidity Icon"
            cls="humidity__percent"
            number={humidity}
            desc="Humidity"
          />
          <CardElement
            src={windIcon}
            alt="Wind Icon"
            cls="wind__rate"
            number={wind}
            desc="Wind Speed"
          />
          <CardElement
            src={pressureIcon}
            alt="Pressure Icon"
            cls="pressure"
            number={pressure}
            desc="Pressure"
          />
        </div>
      </section>
      <h4 className="forecast__title">
        <span>3-day </span>Forecast
      </h4>
      <section className="container forecast">
        <div className="forecast__div">
          <ForecastElement
            day={days[0]}
            main={foreMain[0]}
            info={info[0]}
            src={iconOne}
            temp={minmax[0]}
          />
          <ForecastElement
            day={days[1]}
            main={foreMain[1]}
            info={info[1]}
            src={iconTwo}
            temp={minmax[1]}
          />
          <ForecastElement
            day={days[2]}
            main={foreMain[2]}
            info={info[2]}
            src={iconThree}
            temp={minmax[2]}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}
