import CountryBox from './CountryBox';

const Results = (props) => {
    const { query, countries } = props;

    return (
        <div className="results">
            {query === "" ? null : <>Showing results for {query} ({countries.length})</>}
            {countries.length < 1 ? null : countries.map(country => {return <CountryBox key={country.name} country={country}/>})}
        </div>
    )
}

export default Results;