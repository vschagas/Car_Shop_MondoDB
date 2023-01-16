import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotocycle';
import AbstractModel from './AbstractModel';

export default class MotorcycleODM extends AbstractModel<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      status: { type: Boolean },
      category: { type: String, require: true },
      engineCapacity: { type: Number, require: true },
    });
    super(schema, 'motorcycle');
  }
}