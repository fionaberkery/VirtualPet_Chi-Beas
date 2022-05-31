const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const MongoClient = require('mongodb/lib/mongo_client')
const createRouter = require('./helpers/create_router')

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
    const db = client.db('chi_beas')
    const monstersCollection = db.collection('monsters')
    const monstersRouter = createRouter(monstersCollection)
    app.use('/api/monsters', monstersRouter)
    })
    .catch(console.err)

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`)
})