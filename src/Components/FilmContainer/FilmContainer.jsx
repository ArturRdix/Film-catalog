import React from "react";
import { useState } from "react";
import PrevFilm from "../PrevFilm/PrevFilm";
import classes from './FilmContainer.module.css'

const FilmContainer = () => {
    const [films, setFilms] = useState([
        {
            name:'Перевозчик',
            year: '2021',
            genreOne: 'Боевик',
            genreTwo: 'Триллер'
        },
        {
            name:'Форсаж',
            year: '2021',
            genreOne: 'Боевик',
            genreTwo: 'Триллер'
        },
        {
            name:'Гнев человеческий',
            year: '2021',
            genreOne: 'Боевик',
            genreTwo: 'Триллер'
        }
    ])
    return (
        <div className={classes.filmContainer}>
            {films.map(e=><PrevFilm name={e.name} year={e.year} genreOne={e.genreOne}  genreTwo={e.genreTwo}/>)}
        </div>
    )
}

export default FilmContainer;