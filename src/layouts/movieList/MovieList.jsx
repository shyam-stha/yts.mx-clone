import MovieCard from "../movieCard/MovieCard";
import Loading from "../../components/ui/loading/Loading";
import "./movie-list.scss"

const MovieList = ({isLoading, movie}) => {
    return (
        <div className="movie-list">
            <div className="list-container">
                {!isLoading ? (
                    movie.map((movieItem) => {
                        return (
                            <MovieCard
                                key={movieItem.id}
                                movieItem={movieItem}
                                torrents={movieItem.torrents}
                                background_image={movieItem.medium_cover_image}
                                title={movieItem.title}
                                year={movieItem.year}
                                rating={movieItem.rating}
                                genres={movieItem.genres}
                                language={movieItem.language}
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
