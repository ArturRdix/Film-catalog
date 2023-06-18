import React from "react";
import classes from './PrevFilm.module.css'

const PrevFilm = ({name, year, genreOne, genreTwo}) => {
    return (
        <div className={classes.prevFilm}>
            <div className={classes.icon}></div>
            <h3>{name}</h3>
            <p>{year}, {genreOne} {genreTwo}</p>
        </div>
    )
}

export default PrevFilm;