import { Request, Response } from 'express';
import HttpStatus from '../enums/httpStatus';
import PostService from '../services/postService';

class PostController {

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const posts = await PostService.getAll();
    res.status(HttpStatus.OK).json(posts);
  }

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const post = await PostService.getById(Number(id));
    res.status(HttpStatus.OK).json(post);
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const post = await PostService.create(req.body);
    res.status(HttpStatus.CREATED).json(post);
  }

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const post = await PostService.update(Number(id), req.body);
    res.status(HttpStatus.OK).json(post);
  }

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await PostService.delete(Number(id));
    res.status(HttpStatus.NO_CONTENT).end();
  }

  searchPosts = async (req: Request, res: Response): Promise<void> => {
    const posts = await PostService.searchPosts(req.query);
    res.status(HttpStatus.OK).json(posts);
  }

}

export default new PostController();
