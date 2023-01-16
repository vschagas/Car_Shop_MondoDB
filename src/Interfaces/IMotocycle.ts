import { IAutomobiles } from './IAutomobiles';

export default interface IMotorcycle extends IAutomobiles {
  category: string,
  engineCapacity: number
}