import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const FilmDetailContainer = () => {
  const API_KEY = "6bec42d565f4c875938c5bd604aed203";
  let { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieBG, setMovieBG] = useState();
  async function getMovieData() {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = await resp.json();
    setMovie(data);
  }
  async function getMovieBackground() {
    const resp = await fetch(
      ` https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=null`
    );
    const data = await resp.json();
    setMovieBG(data);
  }
  useEffect(() => {
    getMovieData();
    getMovieBackground();
  }, []);

  if (movie && movieBG) {
    console.log(movie);
    console.log(movieBG);
    const {
      poster_path,
      original_title,
      release_date,
      genres,
      runtime,
      overview,
      vote_average,
    } = movie;
    let titleDate = release_date.substr(0, 4);
    let releaseDate = release_date.replace(/-/g, "/");
    let duration = `${Math.trunc(runtime / 60)}h ${runtime % 60} m`;
    let randomBackgroundPath =
      movieBG.backdrops[Math.floor(Math.random() * movieBG.backdrops.length)]
        .file_path;
    let filmGenres = genres.map((genre) => genre.name).join(", ");
    console.log(movie);
    console.log(movieBG);

    return (
      <div
        className="filmDetailContainer"
        style={{
          background: `url(https://www.themoviedb.org/t/p/original${randomBackgroundPath})`,
        }}
      >
        <div className="filmContainer">
          <div className="filmImage">
            <img
              className="img"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
              alt=""
            />
          </div>
          <div className="filmData">
            <div className="filmTitle">
              <h2>{original_title}</h2>
              <span>&nbsp;({titleDate})</span>
            </div>
            <div className="filmInfo">
              <span className="releaseDate">{releaseDate}</span>
              <span className="genres">{filmGenres}</span>
              <span className="genres">{duration}</span>
            </div>
            <div class="circleContainer">
              <div className="outer">
                <div className="percentage">
                <span>{Math.ceil(vote_average*10)}<span className="percentSimbol">%</span></span>
                </div>
                <svg>
                  <circle cx="50%" cy="50%" r="30" stroke-linecap="round" style={{strokeDasharray: Math.ceil(vote_average*190/10)}}/>
                </svg>
              </div>
            </div>
            <div className="filmOverview">
              <span className="overviewTitle">Overview</span>
              <p className="overview">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return;
  <div className="filmContainer">
    <TailSpin
      height="80"
      width="80"
      color="#100173"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>;
};

export default FilmDetailContainer;
