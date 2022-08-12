import { Router } from "express";
import PostController from '../controllers/postController';

const postsRouter = Router();

postsRouter.get('/', PostController.getAll);
postsRouter.get('/search', PostController.searchPosts);
postsRouter.get('/:id', PostController.getById);
postsRouter.post('/', PostController.create);
postsRouter.put('/:id', PostController.update);
postsRouter.delete('/:id', PostController.delete);

export default postsRouter;
