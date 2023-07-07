import React from 'react';
import './FilmPrev.css';

const FilmPrev = ({ id, title, poster, year, genre, rate }) => {
    return (
        <section className="film-container" key={id}>
            <img className="poster" src={poster} alt="Poster" />
            <div className='title-container' ><h6 className="title">{title}</h6> <span className='title-rate'>{rate}</span></div>
            <div className="info">
                <span className='info-year'>{year}</span>
                <br />
                <span className='info-genre'>{Array.isArray(genre) ? genre.join(', ') : genre}</span>

                </div>
        </section>
    );
};

export default FilmPrev;
