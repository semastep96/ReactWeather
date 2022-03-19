import React, { useState } from 'react'
import search from '../img/search.svg'

function SearchForm({ setCurrentCity }) {
  const [name, setName] = useState('')

  return (
    <form className='search' onSubmit={e => {
      e.preventDefault()

      if (name) setCurrentCity(name)
      e.target.reset()
    }}>
      <input type="text" placeholder="Aktobe" className="search__input" onChange={e => {
        setName(e.target.value.trim())
      }}/>
      <button className="search__btn"><img src={search} alt="search button" /></button>
    </form>
  );
}

export default SearchForm