import React from 'react';
import ContainerFilms from './Components/ContainerFilms';
import Header from './Components/Header';
import './styles/App.css'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <ContainerFilms />
      </div>
    )
  }
}
export default App;