const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

router.get('/',(req,res) => {
    Blog.find().sort({createdAt: -1}).then(result => res.render('index',{title: 'All Blogs', blogs: result})).catch(err => console.log(err))
})

router.get('/:id',(req,res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => res.render('details',{title: 'Blog Details', blog: result})).catch(err => console.log(err));
})

router.post('/create',(req,res) => {
    const blog = new Blog(req.body);

    blog.save().then(result => res.redirect('/all-blogs')).catch(err => console.log(err));
});

router.delete('/:id',(req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result => res.json({redirect: '/all-blogs'})).catch(err => console.log(err));
});

module.exports = router;