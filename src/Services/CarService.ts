import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _carDomain(car: ICar) {
    const newCar = new Car(car);
    return newCar;
  }

  async create(car: ICar) {
    const carODM = new CarODM();
    const result = await carODM.create(car);
    const newCarCreated = this._carDomain(result);
    return newCarCreated;
  }
}