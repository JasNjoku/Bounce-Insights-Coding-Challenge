import { useEffect, useState } from 'react';
import CountryBox from './CountryBox';
import Spinner from './Spinner';

const Results = (props) => {
    const query = props.query;
    const [countries, setCountries] = useState(props.countries)

    useEffect(() => {
        const storedCountries = JSON.parse(localStorage.getItem("Countries"));
        if (storedCountries && storedCountries.length > 0) {
            setCountries(storedCountries);
        }
    }, []);

    useEffect(() => {
        if (props.countries && props.countries.length > 0) {
            setCountries(props.countries);

            const resultsDiv = document.querySelector('.results');
            if (resultsDiv) {
                resultsDiv.style.width = "40%";
                resultsDiv.style.padding = "0 30px";
            }

            const storedCountries = JSON.parse(localStorage.getItem("Countries"));
            if (!storedCountries || JSON.stringify(storedCountries) !== JSON.stringify(props.countries)) {
                localStorage.setItem("Countries", JSON.stringify(props.countries));
            }
        }
    }, [props.countries]);

    useEffect(() => {
        if (document.getElementById("spinning-circle")) {
            setTimeout(() => {
                if (countries.length < 1) {
                    if (document.getElementById("spinning-circle")) {
                        document.getElementById("spinning-circle").style.display = "none";
                    }
                }
            }, 5000)
        }
    }, [countries.length, query])



    return (
        <div className="results">
            {query === "" ? null : <p>Showing results for {query} ({countries.length})</p>}
            {countries.length < 1 ? <Spinner /> : countries.map(country => { return <CountryBox key={country.name} country={country} /> })}
        </div>
    )
}

export default Results;