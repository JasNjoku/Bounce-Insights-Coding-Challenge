const router = require('express').Router()
const axios = require('axios').default

const fetchCountry = async (searchRequest) => {

    try {
        countryData = []

        const response = await axios.get(`https://restcountries.com/v3.1/name/${searchRequest}`)

        //Check if the response data contains countries
        if (response.status === 200) {
            response.data.forEach(country => {
                countryData.push({
                    capital: country.capital,
                    continent: country.continents,
                    currencies: country.currencies,
                    flagImg: country.flags.png,
                    googleMapsUrl: country.maps.googleMaps,
                    name: country.name.common,
                    population: country.population,
                    subRegion: country.subregion,
                    timezone: country.timezones
                })
            })
        }

        return countryData
    } catch (error) {
        console.error(error)
    }


}

router.get('/countries/name/:searchRequest', async (req, res) => {
    const { searchRequest } = req.params

    res.json(await fetchCountry(searchRequest))
})



module.exports = router