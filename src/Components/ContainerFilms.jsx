import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmsList from './FilmsList';
import './ContainerFilms.css';

const ContainerFilms = () => {
    const [films, setFilms] = useState({ films: [] });

    const getMovies = async () => {
        const {data: {data: { movies }}} = await axios.get('https://yts.mx/api/v2/list_movies.json');
        setFilms({ films: movies });
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="wrapper">
            {films.films.map((e) => (
                <FilmsList key={e.id} poster={e.medium_cover_image} title={e.title} year={e.year} genre={e.genres[0]} />
            ))}
        </div>
    );
};

export default ContainerFilms;
