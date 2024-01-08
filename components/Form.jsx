import { useState } from 'react'

/* eslint-disable jsx-quotes */
export default function Form ({ search, icon }) {
  const [val, setVal] = useState('London')
  return (
    <form className="weather__top-bar" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        className="weather__city-input"
        value={val}
        placeholder="Search"
        onChange={e => setVal(e.target.value)}
      />
      <button className="weather__search-icon" type="submit" onClick={search}>
        <img src={icon} alt="search-icon" />
      </button>
    </form>
  )
}
