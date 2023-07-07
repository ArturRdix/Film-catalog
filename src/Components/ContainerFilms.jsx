import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmPrev from './FilmPrev';
import './ContainerFilms.css';

const ContainerFilms = ({ searchValue, sortValue }) => {
    
  const [films, setFilms] = useState({ films: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const filmsPerPage = 30;

  useEffect(() => {
    sortFilms(sortValue);
  }, [sortValue]);

  useEffect(() => {
    searchFilm(searchValue);
  }, [searchValue]);

  const sortFilms = (sortValue) => {
    const sortedFilms = [...films.films];
    if (sortValue === 'title') {
      sortedFilms.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else if (sortValue === 'year') {
      sortedFilms.sort((a, b) => b.year - a.year);
    } else if (sortValue === 'rate') {
      sortedFilms.sort((a, b) => b.rating - a.rating);
    }

    setFilms({ films: sortedFilms });
  };

  const searchFilm = (searchValue) => {
    if (searchValue === '') {
      getMovies();
    } else {
      const filteredFilms = films.films.filter((film) =>
        film.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilms({ films: filteredFilms });
    }
  };

  const getMovies = async () => {
    const {
      data: {
        data: { movies, movie_count },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json', {
      params: {
        page: currentPage,
        limit: filmsPerPage
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

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  return (
    <div className="wrapper">
      {films.films.map((e) => (
        <FilmPrev
          key={e.id}
          poster={e.medium_cover_image}
          genre={e.genres}
          title={e.title}
          year={e.year}
          rate={e.rating}
        />
      ))}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            ❮ Пред. Страница
          </button>
          <h2>{currentPage}</h2>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            След. страница ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default ContainerFilms;
