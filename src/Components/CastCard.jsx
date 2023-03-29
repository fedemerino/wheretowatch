import React from 'react'

const CastCard = ({ act }) => {
    if (act) {
        const { name, character, profile_path } = act
        if (profile_path) return (
            <div className='castCard'>
                <div className='castCardTop'>
                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`} alt="" />
                </div>
                <div className='castCardBottom'>
                    <p className='castCardBottomName'>{name}</p>
                    <p className='castCardBottomCharacter'>{character}</p>
                </div>
            </div>
        )
    }
}

export default CastCard