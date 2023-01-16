import IMotorcycle from '../Interfaces/IMotocycle';
import Automobiles from './Automobiles';

export default class Motorcycle extends Automobiles {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}