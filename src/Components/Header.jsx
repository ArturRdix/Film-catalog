import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Header.css';
import MySelect from './UI/MySelect';

const Header = ({ callbackSort, callbackSearch }) => {
    const [selectedSort, setSelectedSort] = useState('')
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => { callbackSort(selectedSort); }, [selectedSort]);
    useEffect(() => { callbackSearch(searchValue); }, [searchValue]);

    return (
        <header className="header">
            <div className="logo-sort-block">
                <h1>Films-Catalogy</h1>
                <MySelect
                    value={selectedSort}
                    onChange={sort => setSelectedSort(sort)}
                    defaultValue='Сортировка по'
                    options={[
                        { value: 'year', name: 'Году' },
                        { value: 'rate', name: 'Рейтингу' },
                        { value: 'title', name: 'Названию' }
                    ]} />
            </div>
            <nav className="nav">
                <div className="search-block">
                    <input
                        className="search-input"
                        placeholder="Название фильма"
                        onChange={event => setSearchValue(event.target.value)}
                    />
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
