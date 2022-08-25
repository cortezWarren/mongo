const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const controller = require('./controllers/controller');
const dbURI = 'mongodb+srv://mongoTest:fRbuubGobFAZFEcz@cluster0.a9ozy51.mongodb.net/nodeDB?retryWrites=true&w=majority';

app.use(express.static('assets'));
app.use(morgan('dev'));
app.set('view engine', 'ejs');

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
controller(app);

const port = 8000;
app.listen(port);