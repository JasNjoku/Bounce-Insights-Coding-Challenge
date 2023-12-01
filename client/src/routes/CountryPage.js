import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa';

const CountryPage = () => {
    let { state } = useLocation();
    const [country, setCountry] = useState()
    const [info, setInfo] = useState()

    useEffect(() => {
        if (state) {
            setCountry(state.country)
        }
    }, [state])

    const showInfoModal = (e) => {
        const id = e.currentTarget.id

        if (id === "MAP") {
            setInfo({ title: "Google Maps", data: country.googleMapsUrl })
        } else if (id === "POPULATION") {
            setInfo({ title: "Population", data: country.population })
        } else if (id === "TIMEZONES") {
            setInfo({ title: "Timezones", data: country.timezone })
        }
    }


    if (country === undefined) {
        return (
            <>
                <h1>Please use search bar to search for countries.</h1>
            </>
        )
    }

    return (
        <div className="country-page-container">
            <header className="country-page-title">
                <h1>{country.name}</h1>
                <img src={country.flagImg} alt="Country Flag" />
            </header>
            <main>
                <div className="country-page-side">
                    <div className="top-right-country-flag">
                        <img src={country.flagImg} alt="Country Flag" />
                    </div>
                    <div className="country-info">
                        <p><b>Continent:</b> {country.continent}</p>
                        <p><b>Sub Region:</b> {country.continent}</p>
                        <p><b>Continent:</b> {country.continent}</p>
                        <ul>
                            <b>Languages:</b>
                            {Object.keys(country.languages).map(key => <li key={key}>{country.languages[key]}</li>)}
                        </ul>
                        <ul>
                            <b>Currencies:</b>
                            {Object.keys(country.currencies).map(key => <li key={key}>{country.currencies[key]['name']}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="country-page-main">
                    <div className="country-page-main-icons">
                        <div className="round-icon-container" id="MAP" onClick={showInfoModal}>
                            <FaMapMarkerAlt className="icon" />
                        </div>
                        <div className="round-icon-container" id="POPULATION" onClick={showInfoModal}>
                            <FaUsers className="icon" />
                        </div>
                        <div className="round-icon-container" id="TIMEZONES" onClick={showInfoModal}>
                            <FaClock className="icon" />
                        </div>
                    </div>
                    {info !== undefined ? <div id="additional-info">
                        <h1>{info.title}</h1>
                        {info.title === "Google Maps" ? <a target="_blank" href={info.data}>View on Google Maps</a> : null}
                        {info.title === "Population" ? <b>{info.data}</b> : null}
                        {info.title === "Timezones" ? <ul>{info.data.map(timezone => <li>{timezone}</li>)}</ul> : null}
                    </div> : null}

                </div>

            </main>
        </div>
    )
}

export default CountryPage;