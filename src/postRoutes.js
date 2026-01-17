import express from 'express'
import { createPost, getAllPosts, deletePost, getPostByID, updatePost, searchDescriptionByKeyword, searchByCategory } from './controllers/postController.js'

const router = express.Router()

router.post('/', createPost)
router.put('/:id', updatePost);
router.delete('/:id', deletePost)
router.get('/', getAllPosts)
router.get('/:id', getPostByID);

router.get('/search', searchDescriptionByKeyword)
router.get('/category/:category', searchByCategory);

//Posts

export default router