const express = require('express');
const path = require('path');

const app = express();

//do we have a middleware?

// GET /notes 
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET *
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);