import React from 'react';
import './FilmsList.css'

const FilmsList = ({ key, title, poster, year, genre }) => {

    return (
        <div className="film-container">
            <img className="poster" src={poster} />
            <div className="title">{title}</div>
            <div className="info">{year}, {genre}</div>
        </div>
    )
}

export default FilmsList