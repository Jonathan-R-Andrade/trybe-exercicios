import { Router } from "express";
import UserController from "../controllers/userController";
import verifyToken from "../middlewares/verifyToken";
import checkAuthorization from "../middlewares/checkAuthorization";

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/login', userController.login);
usersRouter.post('/', userController.create);
usersRouter.get('/', userController.getAll);

usersRouter.use(verifyToken);
usersRouter.use('/:id', checkAuthorization);

usersRouter.get('/:id', userController.getById);
usersRouter.put('/:id', userController.update);
usersRouter.delete('/:id', userController.delete);

export default usersRouter;
