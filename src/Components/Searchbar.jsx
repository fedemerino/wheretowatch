import React from 'react'
import { useState } from 'react'

const Searchbar = () => {

  const [query, setQuery] = useState();

  const setSearchQuery = (e) =>{
    setQuery(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder='Search for a movie, serie, tv show...' className='searchbar' onChange={(e) => setSearchQuery(e.target.value)}/>
    </form>

  )
}

export default Searchbar