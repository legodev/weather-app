import { resolveWeatherIcon } from './conditional'
import { useWeatherStates } from './weatherStates'
import { fetchWReq, fetchForecastData } from './api'
import { formatDateTime, temps } from './formatData'

export default{
    resolveWeatherIcon,
    useWeatherStates,
    fetchWReq,
    fetchForecastData,
    formatDateTime,
    temps
}