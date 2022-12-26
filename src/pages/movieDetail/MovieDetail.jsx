import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelectedMovie } from "../../app/actions/fetchMovie";
import { AiFillStar } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { TiHeartOutline } from "react-icons/ti";
import { RiDownload2Fill } from "react-icons/ri"
import MoviePoster from "../../components/ui/moviePoster/MoviePoster";
import "./movie-detail.scss";
import Loading from "../../components/ui/loading/Loading";

const MovieDetail = () => {

    const { selectedMovieId, selectedMovie, movie } = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSelectedMovie(selectedMovieId));

    }, [])

    const similarMovie = [selectedMovie]

    //to show similar movie    
    // movie.filter((item, idx) => {
    //     const similar = item.genres.includes(selectedMovie.genres[idx])
    //     if (similar) {
    //         return item;
    //     }
    // })


    return (
        <>
            {
                selectedMovie ? (

                    <div className='movie-detail' >
                        <div className="movie-content-container">
                            <section className="top">

                                <div className="movie-img-options">
                                    <MoviePoster posterImage={selectedMovie.large_cover_image} alt={selectedMovie.title} height={390} width={260} />
                                    <div className="download">
                                        <RiDownload2Fill className="download-icon" />
                                        <h3>Download</h3>
                                    </div>
                                    <div className="watch">
                                        <h3>Watch Now</h3>
                                    </div>
                                </div>

                                <div className="movie-info">
                                    <h1 className="movie-name">{selectedMovie.title}</h1>
                                    <h4 className="year-lang">{selectedMovie.year}[{selectedMovie.language}]</h4>
                                    <h4 className="genres">
                                        {
                                            selectedMovie?.genres?.map((item, idx) => {
                                                return (
                                                    <span className="genre" key={idx}>
                                                        {item} /
                                                    </span>
                                                )
                                            })
                                        }
                                    </h4>
                                    <h5 className="available">
                                        <div> Available in:</div>
                                        {
                                            selectedMovie?.torrents?.map((item, idx) => {
                                                return (
                                                    <span className="quality-type" key={idx}>
                                                        {item.quality}.{item.type}
                                                    </span>
                                                )
                                            })
                                        }
                                    </h5>

                                    <div className="download-subtitle">
                                        <RiDownload2Fill className="download-icon" />
                                        Download Subtitle
                                    </div>
                                    <div className="react-rating">
                                        <div className="react">
                                            <TiHeartOutline className="icon" />
                                            <h1>{selectedMovie.like_count}</h1>
                                        </div>
                                        <div className="rating">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className="imdb" alt="IMDb" />
                                            <h1>{selectedMovie.rating}</h1>
                                            <AiFillStar className="icon star" />
                                        </div>
                                    </div>
                                    <div className="keywords-section">
                                        <span>Keywords:</span>
                                        <div className="keywords">
                                            Fight
                                        </div>
                                        <div className="keywords">
                                            Kung Fu
                                        </div>
                                    </div>
                                </div>

                                <div className="similar-movies">
                                    <h4>Similar Movies</h4>
                                    <div className="list">
                                        {
                                            similarMovie?.map((m, idx) => {
                                                return (
                                                    <MoviePoster key={idx} posterImage={m.large_cover_image} alt={m.title} height={200} width={130} />
                                                )

                                            })
                                        }
                                    </div>
                                </div>
                            </section>

                            <section className="middle-section">

                                <div className="screenshots">
                                    <img src={selectedMovie.large_screenshot_image1} alt="Screenshot 1" />
                                    <img src={selectedMovie.large_screenshot_image2} alt="Screenshot 2" />
                                    <img src={selectedMovie.large_screenshot_image3} alt="Screenshot 3" />
                                </div>
                                <div className="movie-sub-info">
                                    <div className="plot-summary">
                                        <h2>Plot Summary</h2>
                                        <p className="summary">{selectedMovie.description_full}</p>

                                        <div className="upload-info">
                                            {/* converting date to string */}
                                            <div className="upload-date">{selectedMovie.date_uploaded}</div>
                                        </div>
                                    </div>
                                    <div className="movie-cast">
                                        <div className="directors">

                                        </div>
                                        <div className="actors">
                                            <h3>Top Cast</h3>
                                            {
                                                selectedMovie?.cast?.map((castDtl, idx) => {
                                                    console.log(selectedMovie.cast)
                                                    return (
                                                        <div className="cast-dtl" key={idx}>
                                                            <img src={castDtl.url_small_image} alt="Image" />
                                                            <div className="cast-name">
                                                                <span className="real-name">{castDtl.name} </span>
                                                                <span className="character-name"> as {castDtl.character_name}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bottom-section">
                                <div className="movie-comments">
                                    <div className="headings">
                                        <FcComments className="icons" />
                                        <h2>Comments</h2>
                                    </div>

                                </div>
                                <div className="movie-review">
                                    <div className="headings">
                                        <AiFillStar className="icons" />
                                        <h2>Reviews</h2>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div >

                ) :

                    (
                        <Loading />
                    )
            }

        </>
    )

}

export default MovieDetail