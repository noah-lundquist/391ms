const express = require('express')
const cors = require('cors')

const app = express()


var corOptions
{
    origin : 'https://localhost:8081'
}


app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.json({message: 'hello from product api'})
})


const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})