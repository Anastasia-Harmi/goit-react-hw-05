import React from 'react'
import SearchBar from '../../components/SearchBar'

const MoviesPage = () => {
  return (
    <div><SearchBar onSearch={onSearch}/></div>
  )
}

export default MoviesPage