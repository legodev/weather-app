import FooterLink from './FooterLink'

export default function Footer () {
  const year = new Date().getFullYear()
  const links = [
    {
      href: 'https://www.linkedin.com/in/legodev/',
      text: 'LinkedIn',
    },
    {
      href: 'https://github.com/legodev',
      text: 'Github',
    },
    {
      href: 'https://www.instagram.com/lego.dev/',
      text: 'Instagram',
    },
  ]

  return (
    <footer className="footer">
      <section className="footer__section">
        <ul className="footer__list">
          {links.map((link) => (
            <FooterLink key={link.text} href={link.href} text={link.text} />
          ))}
        </ul>
      </section>
      <section className="footer__section">
        <article>
          <h3 className="footer__copy">© 2023-{year}  legodev</h3>
        </article>
      </section>
    </footer>
  )
}
