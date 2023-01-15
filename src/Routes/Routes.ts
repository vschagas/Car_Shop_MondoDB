import { Router } from 'express';
import carRoute from './CarRoute';

const routes = Router();

routes.use('/cars', carRoute);

export default routes;