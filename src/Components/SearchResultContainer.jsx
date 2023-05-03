import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Films from './Films';
import { TailSpin } from 'react-loader-spinner';
import SearchbarContainer from './SearchbarContainer';

const SearchResultContainer = () => {
  const API_KEY = '6bec42d565f4c875938c5bd604aed203';
  const { query } = useParams()
  const [searchResults, setSearchResults] = useState([])
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState()

  useEffect(() => {
    fetchSearchQuery();
  }, [query, page])

  async function fetchSearchQuery() {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
    const data = await resp.json()
    setSearchResults(searchResults => [...searchResults, ...data.results])
    setMaxPage(data.total_pages)
  }

  const handleScroll = () => {
    console.log('Height', document.documentElement.scrollHeight)
    console.log('Top', document.documentElement.scrollTop)
    console.log('Window:',window.innerHeight)
    if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight){
      setPage(p => p + 1)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return() => window.removeEventListener('scroll', handleScroll)
  },[])

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
      {(searchResults.length > 1) ? <><p className='fw-bold fs-5 mb-4'>The results for "{query}" are</p>
        <div className='filmsResultContainer'>
          <Films films={searchResults} />
        </div></>
        : <p className='fw-bold fs-5 mb-4'>There are no results for "{query}"</p>}
    </div>
  )
}

export default SearchResultContainer
