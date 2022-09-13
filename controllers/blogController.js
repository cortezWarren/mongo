const Blog = require('../models/blogs');

const get_blogs = (req,res) => {
    Blog.find().sort({createdAt: -1}).then(result => res.render('blogs/index',{title: 'All Blogs', blogs: result})).catch(err => console.log(err));
}

const get_blog_details = (req,res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => res.render('blogs/details',{title: 'Blog Details', blog: result})).catch(err => res.status(404).render('blogs/errpage', {title: 'Page Not Found'}));
}

const create_blogs = (req,res) => {
    const blog = new Blog(req.body);

    blog.save().then(result => res.redirect('/blogs')).catch(err =>  res.status(404).render('blogs/errpage', {title: 'Page Not Found'}));
}

const search_blog = (req,res) => {
    const searchBlog = req.body.search;

}

const delete_blog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result => res.json({redirect: '/blogs'})).catch(err => console.log(err));
}

module.exports = {
    get_blogs,
    get_blog_details,
    create_blogs,
    delete_blog,
    search_blog
}