export default function FirstData ({ icon, temp, location, weather, description }) {
  return (
    <section className="weather__data">
      <article className="weather__info">
        <figure className="weather__image">
          <img
            className="weather__icon"
            title="Current Weather Icon"
            src={icon}
            alt="Weather Icon"
          />
        </figure>
        <div className="weather__group">
          <h3 className="weather__temp">{temp}</h3>
          <p className="weather__location">{location}</p>
        </div>
      </article>

      <article className="weather__details">
        <h3 className="weather__forecast">{weather}</h3>
        <p className="weather__description">{description}</p>
      </article>
    </section>
  )
}
