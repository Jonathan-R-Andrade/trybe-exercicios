import { Router } from "express";
import UserController from "../controllers/userController";

const usersRouter = Router();

const userController = new UserController();

usersRouter.get('/', userController.getAll);
usersRouter.get('/:id', userController.getById);
usersRouter.post('/', userController.create);

export default usersRouter;
