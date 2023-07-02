import React from 'react';
import './FilmsList.css';

const FilmsList = ({ id, title, poster, year, genre, rate }) => {
    return (
        <section className="film-container" key={id}>
            <img className="poster" src={poster} alt="Poster" />
            <div className='title-container' ><h6 className="title">{title}</h6> <span className='title-rate'>{rate}</span></div>
            <div className="info">
                <span className='info-year'>{year}</span>
                <br />
                <span className='info-genre'>{genre.join(', ')}</span>
                </div>
        </section>
    );
};

export default FilmsList;
