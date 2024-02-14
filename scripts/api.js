export const fetchWReq = async (city) => {
  const apiOpen = '957e2941e4119999f26c17b73153bfb5'
  const urlOpen = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiOpen}&units=metric`

  const resOpen = await fetch(urlOpen)
  const data = await resOpen.json()
  return data
}

export const fetchForecastData = async (lat, lon) => {
  const urlFore = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=23&units=metric&appid=957e2941e4119999f26c17b73153bfb5`

  const resFore = await fetch(urlFore)
  const foreData = await resFore.json()

  return foreData
}
