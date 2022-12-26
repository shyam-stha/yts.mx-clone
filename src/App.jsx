import React from 'react'
import AppBar from './layouts/appbar/AppBar'
import Home from './pages/home/Home'
import { Routes, Route } from "react-router-dom";
import MovieDetail from './pages/movieDetail/MovieDetail';


const App = () => {
  return (
    <div >
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='single-movie' element={<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App