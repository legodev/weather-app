export function formatDateTime (index, data) {
  const dateTime = data.list[index].dt_txt

  const date = dateTime.substring(8, 10) + '/' + dateTime.substring(5, 7) 

  const hour =  dateTime.substring(10, 16) + 'h'

  const formattedDate = date + hour

  return formattedDate
}

export function temps (index, data) {
  const dateTime = data.list[index].main
  const formattedTemp =
    Math.round(dateTime.temp_max) + ' / ' + Math.round(dateTime.temp_min) + '°C'

  return formattedTemp
}
