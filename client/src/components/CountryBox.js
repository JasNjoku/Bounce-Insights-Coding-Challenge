import { Link } from "react-router-dom";

const CountryBox = (props) => {
    const country = props.country


    return (
        <div className="country-box">
            <img src={country.flagImg} />
            <Link to={`/country/${country.name}`} state={{country: country}}>View More</Link>
        </div>
    )
}

export default CountryBox;