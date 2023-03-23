import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Films from './Films';
import { TailSpin } from 'react-loader-spinner';
import SearchbarContainer from './SearchbarContainer';
const SearchResultContainer = () => {
  const API_KEY = '6bec42d565f4c875938c5bd604aed203';
  const { query } = useParams()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    fetchSearchQuery();
  }, [query])
  async function fetchSearchQuery() {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`)
    const data = await resp.json()
    setSearchResults(data)
  }
  if (searchResults.length === 0) {
    return (
      <TailSpin
        height="80"
        width="80"
        color="#100173"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    )
  }
  else return (
    <div className='main'>
      <SearchbarContainer />
      <div className='filmsResultContainer'>
        <Films films={searchResults.results} />
      </div>
    </div>
  )
}

export default SearchResultContainer