import React from 'react';
import { useState } from 'react';
import ContainerFilms from './Components/ContainerFilms';
import Header from './Components/Header';
import './styles/App.css'

const App = () => {
  const [tmpSortValue, setSortValue] = useState('')
  const [tmpSearchValue, setSearchValue] = useState('')

  const searchValue = (value) => setSearchValue(value)
  const sortValue = (value) => setSortValue(value)
  return (
    <div className='app' >
      <Header callbackSort={sortValue} callbackSearch={searchValue} />
      <ContainerFilms searchValue={tmpSearchValue} sortValue={tmpSortValue} />
    </div>
  )

}
export default App;