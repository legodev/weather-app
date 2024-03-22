// import { useState } from 'react'

export default function Form ({value, change, submit, search, icon }) {
  return (
    <form className="weather__top-bar" action='' onSubmit={submit}>
      <input
        type="text"
        className="weather__city-input"
        value={value}
        placeholder="Search"
        onChange={change}
      />
      <button className="weather__search-icon" type="submit" onClick={search}>
        <img src={icon} alt="search-icon" />
      </button>
    </form>
  )
}
