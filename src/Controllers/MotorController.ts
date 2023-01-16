import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorService from '../Services/MotorService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motoService: MotorService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motoService = new MotorService();
  }

  public async create() {
    const createInfo: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const motorcycleCreated = await this.motoService.create(createInfo);
      return this.res.status(201).json(motorcycleCreated);
    } catch (error) {
      return this.res.status(400).json({ error });
    }
  }
}