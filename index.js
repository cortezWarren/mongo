const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const controller = require('./controllers/controller');
const dbURI = 'mongodb+srv://mongoTest:fRbuubGobFAZFEcz@cluster0.a9ozy51.mongodb.net/nodeDB?retryWrites=true&w=majority';

app.use(express.static('assets'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, console.log(`running at port ${port}`)))
    .catch((err) => console.log(err));
    
controller(app);

const port = process.env.PORT || 8000;