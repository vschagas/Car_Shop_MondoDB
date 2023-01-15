import ICar from '../Interfaces/ICar';
import Automobiles from './Automobiles';

export default class Car extends Automobiles {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}