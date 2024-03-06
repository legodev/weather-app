import weatherIcons from '@assets/index'

const {
  clearIcon,
  clearIconN,
  fewIcon,
  fewNIcon,
  scatteredIcon,
  showerRainIcon,
  rainIcon,
  rainNIcon,
  thunderstormIcon,
  thunderstormNIcon,
  snowIcon,
  mistIcon,
} = weatherIcons

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
