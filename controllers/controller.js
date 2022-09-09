const Blog = require('../models/blogs');

module.exports = (app) => {
    app.use((req,res,next) => {
        console.log('host:', req.hostname);
        next();
    });
    app.get('/',(req,res) => {
        res.redirect('/all-blogs');
        
    });

    app.get('/newblogs', (req,res) => {
        const blog = new Blog({
            title: 'news blog',
            snippet: 'snippetmedia',
            body: 'new body bddy'
        });

        blog.save().then(result => res.send(result)).catch(err => console.log(err))
    })

    app.get('/all-blogs',(req,res) => {
        Blog.find().sort({createdAt: -1}).then(result => res.render('index',{title: 'All Blogs', blogs: result})).catch(err => console.log(err))
    })

    app.get('/singleid/:id',(req,res) => {
        const id = req.params.id;
        Blog.findById(id).then(result => res.render('details',{title: 'Blog Details', blog: result})).catch(err => console.log(err));
    })

    app.delete('/blog/:id',(req, res) => {
        const id = req.params.id;
        Blog.findByIdAndDelete(id).then(result => res.json({redirect: '/all-blogs'})).catch(err => console.log(err));
    });

    app.use((req,res) => {
        res.status(404).render('errpage',{title: '404 not found'});
    })
}