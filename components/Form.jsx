import { useState } from 'react'

export default function Form ({ search, icon }) {
  const [val, setVal] = useState('Oslo')
  function handleSubmit (e) {
    e.preventDefault()
    setVal("")
  } 

  function handleChange (e) {
    setVal(e.target.value)
  }
  return (
    <form className="weather__top-bar" action='' onSubmit={handleSubmit}>
      <input
        type="text"
        className="weather__city-input"
        value={val}
        placeholder="Search"
        onChange={handleChange}
      />
      <button className="weather__search-icon" type="submit" onClick={search}>
        <img src={icon} alt="search-icon" />
      </button>
    </form>
  )
}
