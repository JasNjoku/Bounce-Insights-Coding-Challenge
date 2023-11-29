import { useEffect } from "react";

const CountryBox = (props) => {
    const country = props.country


    return (
        <div className="country-box">
            <img src={country.flagImg} />
            <button>See More</button>
        </div>
    )
}

export default CountryBox;