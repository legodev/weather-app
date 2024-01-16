/* eslint-disable jsx-quotes */
export default function HeaderLink ({ href, aria, children }) {
  return (
    <li className="header__item">
      <a
        className="header__link"
        href={href}
        aria-label={`Link to ${aria}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  )
}
