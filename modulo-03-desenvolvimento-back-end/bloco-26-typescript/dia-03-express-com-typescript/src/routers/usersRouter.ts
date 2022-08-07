import { Router } from "express";
import UserController from "../controllers/userController";

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/login', userController.login);
usersRouter.get('/', userController.getAll);
usersRouter.get('/:id', userController.getById);
usersRouter.post('/', userController.create);
usersRouter.put('/:id', userController.update);
usersRouter.delete('/:id', userController.delete);

export default usersRouter;
