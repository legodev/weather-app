/* eslint-disable jsx-quotes */
import Link from './Link'

export default function Footer () {
  return (
    <footer className='footer'>
      <section className='footer__section'>
        <ul className='footer__list'>
          <Link href="https://www.linkedin.com/in/legodev/" text="LinkedIn" />
          <Link href="https://github.com/legodev" text="Github" />
          <Link href="https://www.instagram.com/lego.dev/" text="Instagram" />
        </ul>
      </section>
      <section className='footer__section'>
        <article>
          <h3 className='footer__copy'>2024 © LEONARDO GONZÁLEZ</h3>
        </article>
      </section>
    </footer>
  )
}
