const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
// const blogController = require('./controllers/blogController');
const blogRoutes = require('./routes/blogRoutes');
const dbURI = 'mongodb+srv://mongoTest:fRbuubGobFAZFEcz@cluster0.a9ozy51.mongodb.net/nodeDB?retryWrites=true&w=majority';

app.use(express.static('assets'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use('/blogs',blogRoutes);

app.use((req,res,next) => {
    console.log('host:', req.hostname);
    next();
});

app.get('/',(req,res) => {
    res.redirect('/blogs');
});

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, console.log(`running at port ${port}`)))
    .catch((err) => console.log(err));    

app.use((req,res) => {
    res.status(404).render('blogs/errpage',{title: '404 not found'});
})

const port = process.env.PORT || 8000;