import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorService {
  private _motorcycleDomain(moto: IMotorcycle) {
    const newMotorcycle = new Motorcycle(moto);
    return newMotorcycle;
  }

  async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.create(motorcycle);
    const createdMotorcycle = this._motorcycleDomain(result);
    return createdMotorcycle;
  }

  async findAll() {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.find();
    const allMotorcycle = result.map((car) => this._motorcycleDomain(car));
    return allMotorcycle;
  }

  async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const findOne = await motorcycleODM.findById(id);
    if (findOne) {
      const createdMotorcycle = this._motorcycleDomain(findOne);
      return createdMotorcycle;
    }
    return findOne;
  }

  async updateOne(id: string, obj: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updatedMotorcycle = await motorcycleODM.update(id, obj);
    if (updatedMotorcycle) {
      const update = this._motorcycleDomain(updatedMotorcycle);
      return update;
    }
    return updatedMotorcycle;
  }
}