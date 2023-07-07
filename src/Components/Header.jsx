import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-sort-block">
                <h1>Films-Catalogy</h1>
                <div className="sort-block">
                    <label htmlFor="sortSelect">Сортировать по: </label>
                    <select id='sortSelect' className='sort-select'>
                        <option value="value1">По умолчанию</option>
                        <option value="value2">По году</option>
                        <option value="value3">По рейтингу</option>
                        <option value="value4">По афавиту</option>
                    </select>
                </div>
            </div>
            <nav className="nav">
                <div className="search-block">
                    <input className="search-input" type="text" placeholder="Название фильма" />
                    <button className="search-btn">Поиск</button>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">Новинки</li>
                    <li className="nav-item">Жанры</li>
                    <li className="nav-item">Случайный</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
