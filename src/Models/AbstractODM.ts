import { Schema, models, Model, model, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

const INVALID_MONGOID_ID = 'Invalid Mongo id';

export default abstract class AbstractODM<T> {
  protected _model: Model<T>;
  protected _schema: Schema;
  protected _nameModel: string;

  constructor(schema: Schema, nameModel: string) {
    this._schema = schema;
    this._nameModel = nameModel;
    this._model = models[this._nameModel] || model(this._nameModel, this._schema); // verifica se existe uma collection antes de executar. Caso não exista, o schema será criado
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async find() {
    return this._model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this._model.findById(id);
  }

  public async update(id: string, obj: ICar | IMotorcycle): Promise<T | null> {
    return this._model.findByIdAndUpdate(
      { _id: id },
      { $set: { ...obj } },
      { new: true },
    );
  }

  public async deleteOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(INVALID_MONGOID_ID);
    const deleted = this._model.findByIdAndDelete(id);
    
    return deleted;
  }
}