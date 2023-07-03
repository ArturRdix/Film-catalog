import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmsList from './FilmsList';
import './ContainerFilms.css';

const ContainerFilms = () => {
    const [films, setFilms] = useState({ films: [] });
    const [currentPage, setCurrentPage] = useState(1);
    const filmsPerPage = 32;
    const [totalPages, setTotalPages] = useState(0);

    const getMovies = async () => {
        const {
            data: {
                data: { movies, movie_count },
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json', {
            params: {
                page: currentPage,
                limit: filmsPerPage,
            },
        });
        setFilms({ films: movies });
        const totalPages = Math.ceil(movie_count / filmsPerPage);
        setTotalPages(totalPages);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    useEffect(() => { getMovies(); }, [currentPage]); // Запускаем запрос на сервер при изменении currentPage

    return (
        <div className="wrapper">
            {films.films.map((e) => (
                <FilmsList key={e.id}
                    poster={e.medium_cover_image}
                    genre={e.genres}
                    title={e.title}
                    year={e.year}
                    rate={e.rating} />
            ))}
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={goToPreviousPage}
                        disabled={currentPage === 1}>
                        ❮ Пред. Страница
                    </button>
                    <h2>{currentPage}</h2>
                    <button onClick={goToNextPage}
                        disabled={currentPage === totalPages}>
                        След. страница ❯
                    </button>
                </div>
            )}
        </div>
    );
};

export default ContainerFilms;
