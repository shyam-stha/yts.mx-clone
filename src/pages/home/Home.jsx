import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsRssFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./home.scss";
import MovieList from "../../layouts/movieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchMovie,
    fetchUpcommingMovie,
    fetchSuggestedMovie,
} from "../../app/actions/fetchMovie";

const Home = () => {
    const { isLoading, error, movie, upCommingMovie, suggestedMovie } =
        useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie());
        dispatch(fetchUpcommingMovie());
        dispatch(fetchSuggestedMovie());
    }, []);

    return (
        <div className="home">

            <div className="top">

                <h1 className="heading">Download YTS YIFY movies: HD smallest size</h1>

                <div className="welcome-text">
                    <p>
                        Welcome to the official YTS.MX (.LT) website. Here you can browse
                        and download YIFY movies in <br />
                        excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest
                        file size. YTS Movies Torrents.
                    </p>
                    <h4 className="important-note">
                        IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
                    </h4>
                </div>

                <section className="link-section">

                    <div className="popular">
                        <AiFillStar className="icon" />
                        <NavLink className="link">Popular Downloads</NavLink>
                    </div>

                    <div className="featured">
                        <BsRssFill className="icon" />
                        <NavLink className="link">More Featured</NavLink>
                    </div>

                </section>

                <div className="latest-movie-list">
                    <MovieList isLoading={isLoading} movie={suggestedMovie} />
                </div>

            </div>
            <section className="suggested-section">

                <h3 className="movie-category">Latest YIFY Movies Torrents</h3>
                <span className="browse-link">Browse All</span>
                <MovieList isLoading={isLoading} movie={movie} />

            </section>

            <section className="upcomming-section">

                <h3 className="movie-category">Upcomming YIFY Movies</h3>
                <span className="request-link">Request a movie</span>
                {upCommingMovie.length != 0 ? (
                    <MovieList isLoading={isLoading} movie={upCommingMovie} />
                ) : (
                    <h2>Sorry, no upcomming movies updates yet</h2>
                )}

            </section>

        </div>
    );
};

export default Home;
