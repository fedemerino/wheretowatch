import React from 'react'
import SearchbarContainer from './SearchbarContainer'
import FilmsContainer from './FilmsContainer'
const Home = () => {
    return (
        <main className='main'>
            <SearchbarContainer />
            <FilmsContainer />
        </main>
    )
}

export default Home