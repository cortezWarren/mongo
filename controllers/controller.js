const blogRoutes = require('../routes/blogRoutes');

module.exports = (app) => {
    app.use((req,res,next) => {
        console.log('host:', req.hostname);
        next();
    });
  
    app.get('/',(req,res) => {
        res.redirect('/blogs');
    });

    app.use('/blogs',blogRoutes);

    app.use((req,res) => {
        res.status(404).render('errpage',{title: '404 not found'});
    })
}