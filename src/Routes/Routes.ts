import { Router } from 'express';
import carRoute from './CarRoute';
import motorcycleRoute from './MotorcycleRoute';

const routes = Router();

routes.use('/cars', carRoute);
routes.use('/motorcycles', motorcycleRoute);

export default routes;