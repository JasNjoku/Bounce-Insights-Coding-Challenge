import { useState } from 'react';
import SearchBar from './components/SearchBar';
import './styles/App.css';
import axios from 'axios'

function App() {

  const [country, setCountry] = useState()

  const search = async (query) => {
    const response = await axios.get(`http://localhost:4000/countries/name/${query}`)
    setCountry(response.data)
    console.log(response.data)
  }

  return (
    <div className="App">
      <SearchBar searchFunc={search}/>
    </div>
  );
}

export default App;
