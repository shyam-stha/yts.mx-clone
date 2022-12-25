import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../app/actions/fetchMovie";
import MovieCard from "../movieCard/MovieCard";
import "./movie-list.scss"
import Loading from "../../components/ui/loading/Loading";

const MovieList = () => {
    const { isLoading, error, movie } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie());
    }, []);

    return (
        <div className="movie-list">
            <div className="list-container">
                {!isLoading ? (
                    movie.map((movieItem) => {
                        return (
                            <MovieCard
                                key={movieItem.id}
                                movieItem={movieItem}
                                quality={movieItem.torrents[0].quality}
                                background_image={movieItem.medium_cover_image}
                                title={movieItem.title}
                                year={movieItem.year}
                                rating={movieItem.rating}
                                genres={movieItem.genres}
                            />
                        );
                    })
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default MovieList;
