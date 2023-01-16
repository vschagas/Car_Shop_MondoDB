import express from 'express';
import CarController from '../Controllers/CarController';

const router = express.Router();

router.post('/', (req, res, next) => new CarController(req, res, next).create());
router.get('/', (req, res, next) => new CarController(req, res, next).findAll());
router.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
router.put('/:id', (req, res, next) => new CarController(req, res, next).updateOne());

export default router;