import React from "react"
import CastCard from "./CastCard"

const FilmCastContainer = ({ cast }) => {
  if (cast) return cast.map((act) => <CastCard act={act} />)
}

export default FilmCastContainer
