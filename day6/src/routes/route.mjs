import express from 'express'
const router = express.Router();
import { createAuthor, listAuthor } from '../controllers/autherController.mjs';
import { createBlog, readBlog } from '../controllers/blogController.mjs';
router.get('/', function(req,res){
    return res.status(200).send({status:"ok", message:"api is running"})
})
router.post('/register',createAuthor);
router.post('/writeblog', createBlog);
router.get('/readblog', readBlog);
router.get('/authors', listAuthor);

export default router;
