
module.exports = (app) => {
    app.use((req,res,next) => {
        console.log('host:', req.hostname);
        next();
    });
    app.get('/',(req,res) => {
        res.send('gello');
        
    });

    app.use((req,res) => {
        res.status(404).render('errpage');
    })
}