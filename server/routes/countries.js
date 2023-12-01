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
                    languages: country.languages,
                    name: country.name.common,
                    population: country.population,
                    subRegion: country.subregion,
                    timezone: country.timezones
                })
            })
        } else {
            console.log(response.status)
        }

        return countryData
    } catch (error) {
        console.error(error)
    }


}


router.get('/countries/name/:searchRequest', async (req, res) => {
    const { searchRequest } = req.params
    
    if (searchRequest.trim() !== "") {
        res.json(await fetchCountry(searchRequest))
    }

})



module.exports = router