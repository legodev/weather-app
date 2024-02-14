/* eslint-disable jsx-quotes */
import FooterLink from './FooterLink'

export default function Footer () {
  const year = new Date().getFullYear() 
  return (
    <footer className="footer">
      <section className="footer__section">
        <ul className="footer__list">
          <FooterLink
            href="https://www.linkedin.com/in/legodev/"
            text="LinkedIn"
          />
          <FooterLink href="https://github.com/legodev" text="Github" />
          <FooterLink
            href="https://www.instagram.com/lego.dev/"
            text="Instagram"
          />
        </ul>
      {/* make a list with map */}
      </section>
      <section className="footer__section">
        <article>
          <h3 className="footer__copy">{year} © LEONARDO GONZÁLEZ</h3>
        </article>
      </section>
    </footer>
  )
}
