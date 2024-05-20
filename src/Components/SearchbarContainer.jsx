import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useImagePreloader } from "../hooks/useImagePreloader"

const SearchbarContainer = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handleSubmit = () => {
    navigate(`/search/${query}`)
  }
  useImagePreloader(["/bbbg.png"])
  const backgroundImage = {
    backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url('/bbbg.png')`,
  }
  return (
    <div className="searchBarContainer" style={backgroundImage}>
      <div className="sbTextContainer">
        <h2>Welcome.</h2>
        <h3 className="sbText">
          Find out where to watch your favorite movies!
        </h3>
      </div>
      <div className="sbContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a movie..."
            className="searchbar"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchbarContainer
