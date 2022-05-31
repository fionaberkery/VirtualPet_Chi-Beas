const express = require('express')
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

const router = express.Router()

// get all monsters
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

// get one monster by id 
router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: "Oooops an error" })
    })
})

//create new monster
router.post('/', (req, res) => {
    const newMonster = req.body
    collection 
    .insertOne(newMonster)
    .then((doc) => res.json(doc))
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: "theres a monster in your system"})
    })
})

// delete a monster
router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection
    .deleteOne({_id:ObjectID(id)})
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
