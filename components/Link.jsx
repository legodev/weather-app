export default function Link ({ href, text }) {
  return (
    <li>
      <a href={href} className='footer__link'>
        {text}
      </a>
    </li>
  )
}
