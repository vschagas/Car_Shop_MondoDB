import { expect } from 'chai';
import { describe } from 'mocha';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { arrayOfCars, createCarInput, modelResponse } from '../Mocks';

const makeSut = () => {
  const sut = new CarService();
  return sut;
};

describe('CarService Tests', function () {
  // afterEach(function () {
  //   Sinon.restore();
  // });

  it('Should create a car at db', async function () {
    const carService = makeSut();
    Sinon.stub(Model, 'create').resolves(modelResponse);
    const createdCar = await carService.create(createCarInput);
    expect(createdCar).to.be.deep.equal(modelResponse);
  });

  it('Should find a car all cars', async function () {
    const findAllCars = makeSut();
    Sinon.stub(Model, 'find').resolves(arrayOfCars);
    const findAll = await findAllCars.findAll();
    expect(findAll).to.be.deep.equal(arrayOfCars);
  });

  it('Should find By Id', async function () {
    const carService = makeSut();
    Sinon.stub(Model, 'findById').resolves(modelResponse);
    const find = await carService.findById('63c6f8a4e18b8441d9b2086f');
    expect(find).to.be.deep.equal(modelResponse);
  });
});