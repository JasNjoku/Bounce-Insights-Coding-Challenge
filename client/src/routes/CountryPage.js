import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountryPage = () => {
    let { state } = useLocation();
    const [country, setCountry] = useState()

    useEffect(() => {
        if (state) {
            setCountry(state.country)
        }
    })


    if ( country === undefined ) {
        return (
            <>
                <h1>No country selected</h1>
            </>
        )
    }

    return (
        <div className="country-page-container">
            <div className="country-page-side">
                <img src={country.flagImg} />
                <h1>{country.name}</h1>
            </div>
            <div className="country-page-main">
                <h1>I am country page</h1>
            </div> 
        </div>
    )
}

export default CountryPage;