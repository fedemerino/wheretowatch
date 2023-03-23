import React from 'react'
import Film from './Film'
const Films = ({ films }) => {
    return (
        films.map((film) => {
            if (film.backdrop_path) return <Film key={film.id} {...film}/>

        }) 
    )
}

export default Films