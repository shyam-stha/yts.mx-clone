import React from 'react'
import "./movie-card.scss";

const MovieCard = ({ movieItem, quality, background_image, title, year, rating, genres }) => {
    return (
        <div className="card-wrapper">
            <div className='movie-card' style={{ backgroundImage: `url(${background_image})` }}>
                <div className="quality">${quality}</div>
                <div className="card-content">
                    <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="star" />
                    <div className="rating">${rating}/10</div>
                    <div className="genres">${genres}</div>
                    <button className="view-dtl">View Details</button>
                </div>
            </div>
            <h4 className="title">${title}fjldkjfl</h4>
            <span className="year">${year}1205</span>
        </div>
    )
}

export default MovieCard