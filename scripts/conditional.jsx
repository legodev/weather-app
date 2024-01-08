import clearIcon from '../assets/clear.png'
import clearIconN from '../assets/clear-n.png'
import fewIcon from '../assets/few-clouds.png'
import fewNIcon from '../assets/few-clouds-n.png'
import scatteredIcon from '../assets/scattered-clouds.png'
import showerRainIcon from '../assets/shower-rain.png'
import rainIcon from '../assets/rain.png'
import rainNIcon from '../assets/rain-n.png'
import thunderstormIcon from '../assets/thunderstorm.png'
import thunderstormNIcon from '../assets/thunderstorm-n.png'
import snowIcon from '../assets/snow.png'
import mistIcon from '../assets/mist.png'

export function resolveWeatherIcon (data, set) {
  if (data.weather[0].icon === '01d') {
    set(clearIcon)
  } else if (data.weather[0].icon === '01n') {
    set(clearIconN)
  } else if (data.weather[0].icon === '02d') {
    set(fewIcon)
  } else if (data.weather[0].icon === '02n') {
    set(fewNIcon)
  } else if (
    data.weather[0].icon === '03d' ||
    data.weather[0].icon === '03n' ||
    data.weather[0].icon === '04d' ||
    data.weather[0].icon === '04n'
  ) {
    set(scatteredIcon)
  } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
    set(showerRainIcon)
  } else if (data.weather[0].icon === '10d') {
    set(rainIcon)
  } else if (data.weather[0].icon === '10n') {
    set(rainNIcon)
  } else if (data.weather[0].icon === '11d') {
    set(thunderstormIcon)
  } else if (data.weather[0].icon === '11n') {
    set(thunderstormNIcon)
  } else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
    set(snowIcon)
  } else if (data.weather[0].icon === '50d' || data.weather[0].icon === '50n') {
    set(mistIcon)
  }
}
