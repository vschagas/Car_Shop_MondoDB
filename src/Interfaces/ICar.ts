import { IAutomobiles } from './IAutomobiles';

export default interface ICar extends IAutomobiles {
  doorsQty: number,
  seatsQty: number
}