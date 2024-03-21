export default function ForecastElement ({ day, main, info, src, temp }) {
  return (
    <article className="forecast__card">
      <div className="forecast__left">
        <h4 className="forecast__date shadow">{day}</h4>
        <p className="forecast__info">{main}</p>
      </div>
      <h4 className="forecast__desc">{info}</h4>
      <div className="forecast__right">
        <img className="forecast__icon" title="Upcoming Forecast Icon" loading="lazy" src={src} alt="Forecast Icon" />
        <h4 className="forecast__temp shadow">{temp}</h4>
      </div>
    </article>
  )
}
