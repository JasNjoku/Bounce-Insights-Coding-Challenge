import { useEffect, useState } from 'react';
import CountryBox from './CountryBox';
import Spinner from './Spinner';

const Results = (props) => {
    const { query, countries } = props;

    useEffect(() => {
        if (document.getElementById("spinning-circle")) {
            setTimeout(() => {
                if(countries.length < 1) {
                    if(document.getElementById("spinning-circle")) {
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