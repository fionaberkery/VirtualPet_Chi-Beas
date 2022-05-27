const express = require('express')
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

const router = express.Router()


router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status:500, error: "theres a monster in your system" })
    })
})

router.post('/', (req, res) => {
    const newMonster = req.body
    collection 
    .insertOne(newMonster)
    .then((doc) => res.json(doc))
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: "Oooops an error" })
    })
})

return router

};

module.exports = createRouter
