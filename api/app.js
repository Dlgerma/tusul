const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json([
        {
            "id":"1",
            "title":"Book Review: The Seven Husbands of Evelyn Hugo"
        },
        {
            "id":"2",
            "title":"Book Review: It Ends with Us"
        },
        {
            "id":"3",
            "title":"Book Review: It Starts with Us"
        }

    ])
})

app.listen(4000, () => {
    console.log('listening for request on port 4000')
})