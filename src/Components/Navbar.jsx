import React from 'react'

const Navbar = () => {

    return (
        <div className='navbar fixed-top'>
            <ul className='d-flex flex-row ms-3'>
                <li className='text-light fw-normal'>WhereToWatch</li>
            </ul>
            <ul className='d-flex flex-row gap-5 me-5'>
                <li className='text-light fw-normal'>Sign in</li>
                <li className='text-light fw-normal'>Sign up</li>
            </ul>

        </div>
    )
}
export default Navbar