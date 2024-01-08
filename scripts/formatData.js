export function formatDateTime (index, data) {
  const dateTime = data.list[index].dt_txt
  const formattedDate =
    dateTime.substring(8, 10) +
    '/' +
    dateTime.substring(5, 7) +
    dateTime.substring(10, 16) +
    'h'
  return formattedDate
}

export function temps (index, data) {
  const dateTime = data.list[index].main
  const formattedTemp =
    Math.round(dateTime.temp_max) + ' / ' + Math.round(dateTime.temp_min) + '°C'

  return formattedTemp
}
