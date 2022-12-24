import React from 'react'
import MovieList from './layouts/movieList/MovieList'
import MovieCard from './layouts/movieCard/MovieCard'
import AppBar from './layouts/appbar/AppBar'

const App = () => {
  return (
    <div style={{backgroundColor : "black", height : "100vh"}}>
      <AppBar />
      {/* <MovieList /> */}
      {/* <MovieCard /> */}
    </div>
  )
}

export default App