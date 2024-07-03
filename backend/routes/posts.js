const express=require('express')
const { getPosts, getPost, createPost, deletePost, updatePost } = require('../controllers/postsController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

router.use(requireAuth)

router.get('/',getPosts)

router.get('/:id',getPost)

router.post('/',createPost)

router.delete("/:id",deletePost)

router.patch("/:id",updatePost)

module.exports = router;