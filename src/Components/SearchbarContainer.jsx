import React, { useState } from 'react'
import SearchResultContainer from './SearchResultContainer'
import { useNavigate } from 'react-router-dom'
const SearchbarContainer = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handleSubmit = () => { 
    navigate(`/search/${query}`)
  }
  return (
    <div className='searchBarContainer'>
      <div className='sbTextContainer'>
        <h2>Welcome.</h2>
        <h3 className='sbText'>Find out where to watch your favorite movies and TV shows!</h3>
      </div>
      <div className='sbContainer'>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder='Search for a movie, serie, tv show...' className='searchbar' onChange={(e) => setQuery(e.target.value)} />
        </form>
      </div>
    </div>
  )
}

export default SearchbarContainer