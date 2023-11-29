const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000


app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.use(require('./routes/countries'))

app.get('*', (req, res) => {
    res.send('Route does not exist', 404)
    //return an error to frontend
})