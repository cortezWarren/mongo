const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.get_blogs);
router.get('/search',blogController.search_blog);
// with params put down
router.get('/:id',blogController.get_blog_details)
router.post('/create',blogController.create_blogs);
router.delete('/:id',blogController.delete_blog);

module.exports = router;