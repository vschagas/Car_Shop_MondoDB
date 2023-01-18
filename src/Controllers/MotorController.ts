import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async findAll() {
    try {
      const motorcycle = await this.motoService.findAll();
      this.res.status(200).json(motorcycle); 
    } catch (error) {
      return this.res.status(400).json({ error });
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
      const car = await this.motoService.findById(id);
      if (!car) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(400).json({ error });
    }
  }

  public async updateOne() {
    try {
      const { id } = this.req.params;
      const selectedMotorcycle = this.req.body;
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
      const updatedCar = await this.motoService.updateOne(id, selectedMotorcycle);
      if (!updatedCar) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(updatedCar);
    } catch (error) {
      return this.res.status(400).json({ error });
    }
  }
}