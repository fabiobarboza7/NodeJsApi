import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/users', (req, res) => res.json({ message: 'ok' }));
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
