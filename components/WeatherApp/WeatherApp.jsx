import './WeatherApp.css'
import searchIcon from '../../assets/search.png'
// import windIcon from '../../assets/wind.png'
// import humidityIcon from '../../assets/humidity.png'
// import feelsIcon from '../../assets/feels.png'
// import minIcon from '../../assets/min.png'
// import maxIcon from '../../assets/max.png'
// import pressureIcon from '../../assets/pressure.png'
import { resolveWeatherIcon } from '../../scripts/conditional'
import { useWeatherStates } from '../../scripts/weatherStates'
import { fetchWReq, fetchForecastData } from '../../scripts/api'
import { formatDateTime, temps } from '../../scripts/formatData/'
import Footer from '../Footer'
import Header from '../Header'

import CardElement from '../CardElement'
import ForecastElement from '../ForecastElement'
import Form from '../Form'
import FirstData from './FirstData'
import Loading from './Loading'
import { useEffect, useRef } from 'react'

export default function WeatherApp () {
  const {
    dataWeather,
    setDataWeather,
  } = useWeatherStates()

  const searchFunct = async () => {
    const element = document.getElementsByClassName('weather__city-input')
    const city = element[0].value

    //fix input ref

    const apiUnsplash = 'KCOCJSdlGDReL9V-dGHJTyVUCHNwmPH3tv9u-jWfBNE'
    const urlUnsplash = `https://api.unsplash.com/search/photos?client_id=${apiUnsplash}&page=1&orientation=landscape&query=${city}`

    try {
      setDataWeather((prevState) => {
        return { ...prevState, loading: true }
      })
      // const weatheData = await fetchWReq(city)
      const wReq = await fetchWReq(city)

      if (wReq.cod === 200) {
        const resUnsplash = await fetch(urlUnsplash)
        const dataUnsplash = await resUnsplash.json()
        const src = dataUnsplash.results[0].urls.regular
        setDataWeather((prevState) => {
          return { ...prevState, dir: src }
        })
      } else {
        // setMessage(wReq.message)
        setDataWeather((prevState) => {
          return { ...prevState, message: wReq.message }
        })
      }

      const lat = await wReq.coord.lat
      const lon = await wReq.coord.lon
      const forecastData = await fetchForecastData(lat, lon)
      const main = wReq.main
      const c = '°C'

      setDataWeather((prevState) => {
        return {
          ...prevState,
          location: wReq.name + ', ' + wReq.sys.country,
          humidity: main.humidity + '%',
          wind: Math.round(wReq.wind.speed) + ' km/h',
          temp: Math.round(main.temp) + c,
          feels: Math.round(main.feels_like) + c,
          min: Math.round(main.temp_min) + c,
          max: Math.round(main.temp_max) + c,
          pressure: Math.round(main.pressure) + ' hPa',
          weather: wReq.weather[0].main,
          description: wReq.weather[0].description,
        }
      })

      // // setLocation(wReq.name + ', ' + wReq.sys.country)
      // // setHumidity(main.humidity + '%')
      // // setWind(Math.round(wReq.wind.speed) + ' km/h')
      // // setTemp(Math.round(main.temp) + c)
      // // setFeels(Math.round(main.feels_like) + c)
      // // setMin(Math.round(main.temp_min) + c)
      // // setMax(Math.round(main.temp_max) + c)
      // // setPressure(Math.round(main.pressure) + ' hPa')
      // // setWeather(wReq.weather[0].main)
      // // setDescription(wReq.weather[0].description)

      // // resolveWeatherIcon(wReq, setWicon)
      // resolveWeatherIcon(
      //   wReq,
      //   // setDataWeather((prevState) => {
      //   //   return { ...prevState, wicon }
      //   // })
      //   setDataWeather()
      // )

      // // const foreDays = [
      // //   await forecastData.list[6],
      // //   forecastData.list[14],
      // //   forecastData.list[22],
      // // ]

      // const date = [
      //   formatDateTime(6, forecastData),
      //   formatDateTime(14, forecastData),
      //   formatDateTime(22, forecastData),
      // ]

      // const temp = [
      //   temps(6, forecastData),
      //   temps(14, forecastData),
      //   temps(22, forecastData),
      // ]

      // const arrayInfo = [
      //   await forecastData.list[6].weather[0].description,
      //   forecastData.list[14].weather[0].description,
      //   forecastData.list[22].weather[0].description,
      // ]

      // const foreMains = [
      //   await forecastData.list[6].weather[0].main,
      //   forecastData.list[14].weather[0].main,
      //   forecastData.list[22].weather[0].main,
      // ]

      // // setInfo(arrayInfo)
      // // setDays(date)
      // // setMinmax(temp)
      // // setForeMain(foreMains)

      // setDataWeather((prevState) => {
      //   return {
      //     ...prevState,
      //     info: arrayInfo,
      //     days: date,
      //     minmax: temp,
      //     foreMain: foreMains,
      //   }
      // })

      // // resolveWeatherIcon(
      // //   foreDays[0],
      // //   setDataWeather((prevState) => {
      // //     return { ...prevState, iconOne }
      // //   })
      // // )

      // // resolveWeatherIcon(
      // //   foreDays[1],
      // //   setDataWeather((prevState) => {
      // //     return { ...prevState, iconTwo }
      // //   })
      // // )

      // // resolveWeatherIcon(
      // //   foreDays[2],
      // //   setDataWeather((prevState) => {
      // //     return { ...prevState, iconThree }
      // //   })
      // // )
      // // resolveWeatherIcon(foreDays[0], setIconOne)
      // // resolveWeatherIcon(foreDays[1], setIconTwo)
      // // resolveWeatherIcon(foreDays[2], setIconThree)

      // // setLoading(false)
      // setDataWeather((prevState) => {
      //   return { ...prevState, loading: false }
      // })
    } catch (error) {
      console.log(error)
      // setLoading(false)
      // setDataWeather((prevState) => {
      //   return { ...prevState, loading: false }
      // })
    }
  }

  useEffect(() => {
    searchFunct()
  }, [])

  return (
    <div>
      <Header />
      <section className="container">
        <img src={dataWeather.dir} alt="City Background" className="weather__api-img" />
        {dataWeather.loading && <Loading />}
        <Form search={searchFunct} icon={searchIcon} />
        <h3 className="message">{dataWeather.message}</h3>
        <FirstData
          icon={dataWeather.wicon}
          temp={dataWeather.temp}
          location={dataWeather.location}
          weather={dataWeather.weather}
          description={dataWeather.description}
        />
        <div className="weather__card-container">
          <CardElement
            src={dataWeather.feelsIcon}
            alt="Feels Like Icon"
            cls="feels__like"
            number={dataWeather.feels}
            desc="Feels Like"
          />
          <CardElement
            src={dataWeather.minIcon}
            alt="Minimum Temperature Icon"
            cls="min__temp"
            number={dataWeather.min}
            desc="Min Temp"
          />
          <CardElement
            src={dataWeather.maxIcon}
            alt="Maximum Temperature Icon"
            cls="max__temp"
            number={dataWeather.max}
            desc="Max Temp"
          />
          <CardElement
            src={dataWeather.humidityIcon}
            alt="Humidity Icon"
            cls="humidity__percent"
            number={dataWeather.humidity}
            desc="Humidity"
          />
          <CardElement
            src={dataWeather.windIcon}
            alt="Wind Icon"
            cls="wind__rate"
            number={dataWeather.wind}
            desc="Wind Speed"
          />
          <CardElement
            src={dataWeather.pressureIcon}
            alt="Pressure Icon"
            cls="pressure"
            number={dataWeather.pressure}
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
            day={dataWeather.days[0]}
            main={dataWeather.foreMain[0]}
            info={dataWeather.info[0]}
            src={dataWeather.iconOne}
            temp={dataWeather.minmax[0]}
          />
          <ForecastElement
            day={dataWeather.days[1]}
            main={dataWeather.foreMain[1]}
            info={dataWeather.info[1]}
            src={dataWeather.iconTwo}
            temp={dataWeather.minmax[1]}
          />
          <ForecastElement
            day={dataWeather.days[2]}
            main={dataWeather.foreMain[2]}
            info={dataWeather.info[2]}
            src={dataWeather.iconThree}
            temp={dataWeather.minmax[2]}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}
