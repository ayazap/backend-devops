import { Router } from 'express';
import HelloController from '../controllers/helloController';

const router = Router();
const helloController = new HelloController();

export function setRoutes(app) {
  app.use('/', router);
  router.get('/', helloController.getHello.bind(helloController));
}