import { expect } from 'chai';
import { describe } from 'mocha';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { createCarInput, createResponse, modelResponse } from '../Mocks';

describe('CarService Tests', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Should create a car at db', async function () {
    Sinon.stub(Model, 'create').resolves(modelResponse);
    const carService = new CarService();
    
    const createdCar = await carService.create(createCarInput);
    expect(createdCar).to.be.deep.equal(createResponse);
  });
});