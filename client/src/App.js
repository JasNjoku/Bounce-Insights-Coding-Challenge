import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import './styles/App.css';
import axios from 'axios'
import CountryBox from './components/CountryBox';

function App() {

  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    
  }, [countries])

  const search = async (query) => {
    const response = await axios.get(`http://localhost:4000/countries/name/${query}`)
    setQuery(query)
    setCountries(response.data)
  }

  
  return (
    <div className="App">
      <SearchBar searchFunc={search}/>
      {query === "" ? null : <>Showing results for {query} ({countries.length})</>}
      {countries.length < 1 ? null : countries.map(country => {return <CountryBox key={country.name} country={country}/>})}
    </div>
  );
}

export default App;
