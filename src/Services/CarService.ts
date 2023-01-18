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

  async findAll() {
    const carODM = new CarODM();
    const result = await carODM.find();
    const allCars = result.map((car) => this._carDomain(car));
    return allCars;
  }

  async findById(id: string) {
    const carODM = new CarODM();
    const findOne = await carODM.findById(id);
    if (findOne) {
      const createdCar = this._carDomain(findOne);
      return createdCar;
    }
    return findOne;
  }

  async updateOne(id: string, obj: ICar) {
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, obj);
    if (updatedCar) {
      const update = this._carDomain(updatedCar);
      return update;
    }
    return updatedCar;
  }

  async deleteCarById(id: string) {
    const carODM = new CarODM();
    const car = await this.findById(id); 
    if (!car) return { message: 'Car not Found' }; 
    await carODM.deleteOne(id);
    return null;
  }
}