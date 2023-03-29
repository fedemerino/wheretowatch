import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div className='navbar fixed-top flex justify-content-center align-content-center'>
                <Link to='/'><img src="/logo.svg" alt="" /></Link>
        </div>
    )
}
export default Navbar