import React from 'react'

const Film = ({ backdrop_path, title, release_date, vote_average }) => {
  let url = "https://www.themoviedb.org/t/p/w220_and_h330_face" + backdrop_path;
  let date = new Date(release_date).toDateString().split(' ').splice(1).join(' ');
  return (
    <div className='filmCard'>
      <img src={url} alt={title} className='filmImg' />
      <span className='filmDate'>{date}</span>
      <p classname='cardTitle mt-5'>{title}</p>
    </div>
  )
}

export default Film