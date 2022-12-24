import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../app/actions/fetchMovie'

const MovieList = () => {
    const { isLoading, error, movie } = useSelector(state => state.movie)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie());
    }, [])

    return (
        <div className='movie-list'>
        </div>
    )
}

export default MovieList