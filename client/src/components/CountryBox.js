import { Link } from "react-router-dom";

const CountryBox = (props) => {
    const country = props.country


    return (
        <div className="country-box">
            <div className="country-box-img">
                <img src={country.flagImg} alt="Country Flag"/>
            </div>
            <p>{country.name}</p>
            <Link to={`/country/${country.name}`} state={{country: country}}>View More</Link>
        </div>
    )
}

export default CountryBox;