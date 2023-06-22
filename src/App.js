import axios from 'axios';
import React from 'react';
import './styles/App.css'

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json')
  }

  componentDidMount() {
    this.getMovies()
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
export default App;
