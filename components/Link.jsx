export default function Link ({ href, text }) {
  return (
    <li className='footer__li'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='footer__link'
        aria-label={`Link to ${text}`}
      >
        {text}
      </a>
    </li>
  )
}
