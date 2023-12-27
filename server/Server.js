const express = require('express')
const app = express()
const db = require('./DB')
const port = process.env.PORT || 3001


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => console.log(`app listening on port ${port}!`))