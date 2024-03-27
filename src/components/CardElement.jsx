export default function CardElement ({ src, alt, cls, number, desc }) {
  return (
    <section className="weather__card">
      <img src={src} title={alt} alt={alt} className="weather__card-icon" />
      <article className="weather__card-data">
        <h3 className={`${cls} shadow`}>{number}</h3>
        <p className="weather__card-text">{desc}</p>
      </article>
    </section>
  )
}
