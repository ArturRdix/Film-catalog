import React, { useState } from 'react';
import axios from 'axios';
import FilmsList from './FilmsList';
import './ContainerFilms.css';

const ContainerFilms = () => {
    const [films, setFilms] = useState({ films: [] });

    const getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json');
        setFilms({ films: movies });
        console.log(movies);
    };

    useState(() => {
        getMovies();
    }, []);

    return (
        <div className="wrapper">
            {films.films.map((e) => (
                <FilmsList
                    poster={e.medium_cover_image}
                    genre={e.genres}
                    title={e.title}
                    year={e.year}
                    key={e.id}
                    rate={e.rating} />
            ))}
        </div>
    );
};

export default ContainerFilms;
