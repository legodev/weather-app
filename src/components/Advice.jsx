import { useEffect, useState } from 'react'

export default function Advice ({ data }) {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    if (data <= 5) {
        setInfo('It\'s very cold. Bundle up and stay warm 🥶 ❄️');
    } else if (data > 5 && data <= 15) {
        setInfo('The weather is cool and pleasant. Enjoy your day outdoors 👍');
    } else if (data > 15 && data <= 25) {
        setInfo('It\'s a warm and sunny day. Perfect for outdoor activities ☀️');
    } else if (data > 25 && data <= 30) {
        setInfo('The heat is rising. Stay hydrated and seek shade 🔆');
    } else {
        setInfo('It\'s very hot. Avoid outdoor activities and find cool places 🌡️ 🔥');
    }
}, [data]);

  return (
    <section className='advise__container'>
      <article>
        <h4 className='advise__text'>{info}</h4>
      </article>
    </section>
  )
}
