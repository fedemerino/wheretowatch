import React from 'react'
import { Link } from 'react-router-dom';
const Film = ({ backdrop_path, title, release_date, vote_average, id }) => {
  let url = "https://www.themoviedb.org/t/p/w220_and_h330_face" + backdrop_path;
  let date = new Date(release_date).toDateString().split(' ').splice(1).join(' ');
  let link = `/id/${id}`
  return (
    <Link to={link}>
      <div className='filmCard'>
        {backdrop_path
        ?<img src={url} alt={title} className='filmImg' />
        : <img className='filmImg' src='/notfound.png'/>}
        <span className='filmDate'>{date}</span>
        <p className='cardTitle mt-5'>{title}</p>
      </div>
    </Link>
  )
}

export default Film