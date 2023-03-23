import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FilmDetailContainer from './FilmDetailContainer'
import Home from './Home'
import SearchResultContainer from './SearchResultContainer'

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search/:query' element={<SearchResultContainer />} />
      <Route path='/id/:id' element={<FilmDetailContainer />} />
    </Routes>
  )
}

export default Main