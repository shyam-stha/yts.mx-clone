import React from "react";
import "./movie-card.scss";

const MovieCard = ({
  movieItem,
  quality,
  background_image,
  title,
  year,
  rating,
  genres,
}) => {
  return (
    <div className="card-wrapper">
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${background_image})` }}
      >
        <div className="quality">{quality}</div>
        <div className="card-content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
            alt="star"
          />
          <div className="rating">{rating} / 10</div>
          <div className="genres">
            {genres.map((genre, idx) => {
              if (idx < 2)
                return (
                  <div key={idx} className="genreItem">
                    {genre}
                  </div>
                );
            })}
          </div>
          <button className="view-dtl">View Details</button>
        </div>
      </div>
      <h4 className="title">{title}</h4>
      <span className="year">{year}</span>
    </div>
  );
};

export default MovieCard;