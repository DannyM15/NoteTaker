const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js')  //need routes

const PORT = process.env.PORT || 3001


const app = express();

//do we have a middleware?
//express.json express.urlencoded express.static 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', api);

app.use(express.static('public'));

// GET /notes 
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//GET *
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => {
    console.log('app is listening http://localhost:' + PORT)
})