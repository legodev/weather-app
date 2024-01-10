export default function Link ({ href, text }) {
  return (
    <li className='footer__li'>
      <a href={href} className='footer__link'>
        {text}
      </a>
    </li>
  )
}
