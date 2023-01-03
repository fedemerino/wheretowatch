import React from 'react'
import Searchbar from './Searchbar'
const SearchbarContainer = () => {
  return (
    <div className='searchBarContainer'>
      <div className='sbTextContainer'>
        <h2>Welcome.</h2>
        <h3 className='sbText'>Find out where to watch your favorite movies and TV shows!</h3>
      </div>
      <div className='sbContainer'>
        <Searchbar />
      </div>
    </div>
  )
}

export default SearchbarContainer