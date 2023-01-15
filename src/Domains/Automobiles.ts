import { IAutomobiles } from '../Interfaces/IAutomobiles';

export default class Automobiles {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status: boolean | undefined;

  constructor(automobiles: IAutomobiles) {
    this.id = automobiles.id;
    this.model = automobiles.model;
    this.year = automobiles.year;
    this.color = automobiles.color;
    this.buyValue = automobiles.buyValue;
    this.status = automobiles.status || false;
  }
}