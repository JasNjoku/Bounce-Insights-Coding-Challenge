const router = require('express').Router()
const axios = require('axios').default

const fetchCountry = async (searchRequest) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${searchRequest}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

router.get('/countries/name/:searchRequest', async (req, res) => {
    const { searchRequest } = req.params

    res.json(await fetchCountry(searchRequest))
})



module.exports = router