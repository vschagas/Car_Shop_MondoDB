import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorController';

const router = Router();

router.put('/', (req, res, next) => new MotorcycleController(req, res, next).create());

export default router;