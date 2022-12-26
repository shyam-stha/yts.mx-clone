import "./movie-poster.scss"

const MoviePoster = ({ posterImage, height, width,alt, border }) => {

    const posterStyle = {
        height:`${height}px`,
        width: `${width}px`,
        
    }
    return (
        <div className='movie-poster' style={posterStyle}>
            <img src={posterImage} alt={alt} className="image"  style={posterStyle}/>
        </div>
    )
}

export default MoviePoster