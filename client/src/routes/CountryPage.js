import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountryPage = () => {
    let { state } = useLocation();
    const [country, setCountry] = useState()

    useEffect(() => {
        if (state) {
            setCountry(state.country)
        }
    }, [state])


    if ( country === undefined ) {
        return (
            <>
                <h1>Please use search bar to search for countries.</h1>
            </>
        )
    }

    return (
        <div className="country-page-container">
            <div className="country-page-side">
                <img src={country.flagImg} alt="Country Flag"/>
                <h1>{country.name}</h1>
            </div>
            <div className="country-page-main">
                
            </div> 
        </div>
    )
}

export default CountryPage;