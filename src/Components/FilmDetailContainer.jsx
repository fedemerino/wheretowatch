import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { BsFillPlayFill } from "react-icons/bs";
import Select from 'react-select'
import Modal from 'react-bootstrap/Modal'
import FilmCastContainer from "./FilmCastContainer";
const FilmDetailContainer = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const API_KEY = "6bec42d565f4c875938c5bd604aed203";
    let { id } = useParams();
    const [movie, setMovie] = useState();
    const [countries, setCountries] = useState(); // list of countries with id and name
    const [providers, setProviders] = useState(); // list of providers available for this film
    const [provider, setProvider] = useState(); // selected provider
    const [country, setCountry] = useState(); // selected country
    async function getMovieData() {
        const resp = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,credits&include_image_language=null`
        );
        const data = await resp.json();
        const respCountries = await fetch(`https://api.themoviedb.org/3/watch/providers/regions?api_key=${API_KEY}&language=en-US`)
        const dataCountries = await respCountries.json()
        const respProviders = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`);
        const dataProviders = await respProviders.json();
        setProviders(dataProviders)
        setCountries(dataCountries)
        setMovie(data);
    }

    useEffect(() => {
        getMovieData();
    }, [id]);

    if (movie) {
        const {
            poster_path,
            original_title,
            release_date,
            genres,
            runtime,
            overview,
            vote_average,
            tagline,
            credits
        } = movie;

        const movieBG = movie.images;
        let titleDate = release_date.substr(0, 4);
        let releaseDate = release_date.replace(/-/g, "/");
        let duration = runtime ? `${Math.trunc(runtime / 60)}h ${runtime % 60} m` : null;
        let randomBackgroundPath = movieBG.backdrops.length > 1 ?
            movieBG.backdrops[Math.floor(Math.random() * movieBG.backdrops.length)]
                .file_path : null;
        let filmGenres = genres.map((genre) => genre.name).join(", ");
        let trailer = movie.videos.results.find((video) => video.name.toLowerCase().includes('trailer'))
        let videoPath
        trailer ? videoPath = trailer.key : undefined;
        let cast = []
        for (let i = 0; i < 10; i++) {
            cast.push(credits.cast[i])
        }
        let availableCountries = countries.results.map((country) => ({ label: country.english_name, value: country.iso_3166_1 }))
        let options = availableCountries.filter((country) => {
            if (providers.results[country.value] && providers.results[country.value].flatrate) return country
        })
        const handleChange = ({ value, label }) => {
            let movieProvider = providers.results[value].flatrate
            setProvider(movieProvider)
            setCountry(label)
        }
        return (
            <div className="filmDetailMain">
                <div
                    className="filmDetailContainer"
                    style={{
                        background: `url(https://www.themoviedb.org/t/p/original${randomBackgroundPath})`,
                    }}
                >
                    <>
                        <Modal show={show} onHide={handleClose} size='lg'>
                            <Modal.Header closeButton>
                                <Modal.Title><BsFillPlayFill />Play Trailer</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ 'display': 'grid', 'placeItems': 'center' }}>
                                {videoPath ? <iframe id="ytplayer" type="text/html" className="trailerModal"
                                    src={`https://www.youtube.com/embed/${videoPath}?autoplay=1`}
                                    frameborder="0"
                                    allow='fullscreen'>
                                </iframe> : <span className="trailerNotAvailable">Trailer not available</span>}


                            </Modal.Body>
                        </Modal>
                    </>
                    <div className="filmContainer">
                        <div className="imageDataContainer">
                            <div className="filmImage">
                                {poster_path
                                    ? <img
                                        className="img"
                                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                                        alt=""
                                    />
                                    : <img src='/notfound.png' className="notFound" />
                                }
                            </div>
                            <div className="filmData">
                                <div className="filmTitleContainer">
                                    <div className="filmTitle">
                                        <h2>{original_title}</h2>
                                        <span>&nbsp;({titleDate})</span>
                                    </div>
                                    <div className="filmInfoPhone">
                                        <span className="releaseDate">{releaseDate}</span>
                                        <span className="genres">{filmGenres}</span>
                                        <span className="genres">{duration}</span>
                                    </div>
                                </div>
                                <div className="imgInfoRowPhone">
                                    <div className="imgPhone">
                                        <div className="filmImagePhone">
                                            {poster_path
                                                ? <img
                                                    className="img"
                                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                                                    alt=""
                                                />
                                                : <img src='/notfound.png' className="notFound" />
                                            }
                                        </div>
                                    </div>
                                    <div className='infoTrailerTaglinePhone'>
                                        <div className="filmInfo">
                                            <span className="releaseDate">{releaseDate}</span>
                                            <span className="genres">{filmGenres}</span>
                                            <span className="genres">{duration}</span>
                                        </div>

                                        <div className="trailerContainer">
                                            <div class="circleContainer">
                                                <div className="outer">
                                                    <div className="percentage">
                                                        <span>{vote_average ? Math.ceil(vote_average * 10) : 'NR'}<span className="percentSimbol">{vote_average ? '%' : null}</span></span>
                                                    </div>
                                                    <svg>
                                                        <circle cx="50%" cy="50%" r="30" stroke-linecap="round" style={vote_average ? {
                                                            strokeDasharray: Math.ceil(vote_average * 190 / 10),
                                                            stroke: (Math.ceil(vote_average * 10) > 70) ? 'rgb(33, 208, 122)' : (Math.ceil(vote_average * 10) > 40) ? 'rgb(213,210,41)' : 'rgb(219, 35, 96)'
                                                        } : null} />
                                                    </svg>
                                                </div>
                                                <span>User Score</span>
                                            </div>
                                            <div className="trailer">
                                                <span onClick={handleShow}><BsFillPlayFill /> Play Trailer</span>
                                            </div>
                                        </div>
                                        {tagline ? <div className="tagline">
                                            <span className="taglineText">{tagline}</span>
                                        </div> : null}
                                    </div>
                                </div>
                                <div className="filmOverview">
                                    <div className="taglinePhone">
                                        <span className="taglineText">{tagline}</span>
                                    </div>
                                    <span className="overviewTitle">Overview</span>
                                    <p className="overview">{overview ? overview : 'Overview not available'}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
                <div className="d-flex flex-row bottomInfo">
                    {cast.length > 1 ? <div className="d-flex flex-column cast">
                        <h3>Top Billed Cast</h3>
                        <div className="filmCastContainer">
                            <FilmCastContainer cast={cast} />
                        </div>
                    </div> : null}

                    <div className="justWatch d-flex flex-column align-items-center">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/justwatch-c2e58adf5809b6871db650fb74b43db2b8f3637fe3709262572553fa056d8d0a.svg" alt="" />
                        {(options.length > 0) ? <Select options={options} onChange={handleChange} className='select' /> : <p className="mt-5 mb-4"><span className="fw-bold">{original_title}</span> is not available in any streaming platform.</p>}
                        {provider ?
                            <p className="mt-2 mb-4"><span className="fw-bold">{original_title}</span> is currently available in <span className="fw-bold">{country}</span>.</p>
                            : null}
                        <div className="providers">
                            {provider ? provider.map((provider) =>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={`https://www.themoviedb.org/t/p/original${provider.logo_path}`}></img>
                                    <p className="providerName">{provider.provider_name}</p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else return (
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
        </div>)
};

export default FilmDetailContainer;
