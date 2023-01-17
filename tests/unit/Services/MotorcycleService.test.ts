import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorService from '../../../src/Services/MotorService';
import { createMotoInput, modelMotoResponse } from '../Mocks';

const makeSut = () => {
  const sut = new MotorService();
  return sut;
};

describe('Motorcycle Service test', function () {
  it('Should create one motorcycle ', async function () {
    const motorcycleSerice = makeSut();
    Sinon.stub(Model, 'create').resolves(modelMotoResponse);
    const created = await motorcycleSerice.create(createMotoInput);
    expect(created).to.be.deep.equal(modelMotoResponse);
  });
});