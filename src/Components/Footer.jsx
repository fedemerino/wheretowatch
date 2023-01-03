import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      <p>Federico Merino | All rights reserved.</p>
      <div className='logos'>
        <a href="https://www.linkedin.com/in/federico-merino/" target="_blank"><img src="/linkedin.png" alt=""/></a>
        <a href="https://github.com/fedemerino" target="_blank"><img src="/github.png" alt=""/></a>
        <a href="mailto:fedemerino00@gmail.com" target="_blank"><img src='/mail.png' alt=""/></a>
    </div>
      </div>
  )
}

export default Footer