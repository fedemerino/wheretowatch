import React from 'react'
import Film from './Film'
const Films = ({ props }) => {
    return (
         props.map((prop) => {
            return <Film key={prop.id} {...prop}/>
        }) 
    )
}

export default Films