import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import './styles/App.css';
import axios from 'axios'
import Results from './components/Results';


function App() {

  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")


  const search = async (query) => {
    if (document.getElementById("spinning-circle")) {
      document.getElementById("spinning-circle").style.display = "block"
    }
    setCountries([])
    const response = await axios.get(`https://bicc-backend.onrender.com/countries/name/${query}`)
    setQuery(query)
    setCountries(response.data)
  }

  const filter = () => {

  }

  const sort = () => {

  }

  
  return (
    <div className="App">
      <SearchBar searchFunc={search}/>
      <Results 
        query={query}
        countries={countries}

      />

    </div>
  );
}

export default App;
