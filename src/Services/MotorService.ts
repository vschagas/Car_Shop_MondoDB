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
}