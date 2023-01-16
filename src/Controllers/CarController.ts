import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carService: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  async create() {
    const createInfo = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {    
      const car: ICar = createInfo;
      const created = await this.carService.create(car);

      return this.res.status(201).json(created);
    } catch (error) {
      return this.res.status(400).json({ error });
    }
  }

  public async findAll() {
    try {
      const cars = await this.carService.findAll();
      this.res.status(200).json(cars); 
    } catch (error) {
      return this.res.status(400).json({ error });
    }
  }

  public async findById() {
    const idMongo = 24;
    try {
      const { id } = this.req.params;
      if (id.length !== idMongo) return this.res.status(422).json({ message: 'Invalid mongo id' });
      const car = await this.carService.findById(id);
      if (!car) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(400).json({ error });
    }
  }
}