import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/users', (req, res) => res.json({ message: 'ok' }));
routes.post('/users', UserController.store);

export default routes;
