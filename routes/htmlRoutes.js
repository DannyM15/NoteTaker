// HTML index and notes routes
const htmlRoutes = require('express').Router()

// GET route for index
htmlRoutes.get('/', (req, res) => {
    readFromFile('./assets/index.html').then((data) => res.json(JSON.parse(data)));
});


// POST route for index ?
htmlRoutes.post('/', (req, res) => {

})

module.exports = htmlRoutes;