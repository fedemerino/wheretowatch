import React from 'react'
import { useState, useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner'
import Films from './Films'
const FilmsContainer = () => {
  const API_KEY = '6bec42d565f4c875938c5bd604aed203';
  const [upcoming, setUpcoming] = useState([])
  const [popular, setPopular] = useState([])

  useEffect(() => {
    fetchUpcoming();
    fetchPopular();
  }, [])

  async function fetchUpcoming() {
    try {
      const resp = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`)
      const data = await resp.json()
      setUpcoming(data)
    }
    catch (err) { console.log(err) }
  }

  async function fetchPopular() {
    try {
      const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`)
      const data = await resp.json()
      setPopular(data)
    }
    catch (err) { console.log(err) }
  }

  if (upcoming.length === 0 || popular.length === 0) {
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
    <>
      <div className='mb-5'>
        <p className='mb-4 fw-bolder filmDivisionTitle'>#Upcoming titles</p>
        <div className='filmsContainer'>
          <Films films={upcoming.results} />
        </div>
      </div>

      <div className='mt-2'>
        <p className='mb-4 fw-bolder filmDivisionTitle'>#What's popular</p>
        <div className='filmsContainer'>
          <Films films={popular.results} />
        </div>
      </div>

    </>
  )
}

export default FilmsContainer