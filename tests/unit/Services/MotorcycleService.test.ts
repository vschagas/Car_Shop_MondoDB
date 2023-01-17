import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorService from '../../../src/Services/MotorService';
import { arrayofMoto, createMotoInput, modelMotoResponse } from '../Mocks';

const makeSut = () => {
  const sut = new MotorService();
  return sut;
};

describe('Motorcycle Service test', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Should create one motorcycle ', async function () {
    const motorcycleSerice = makeSut();
    Sinon.stub(Model, 'create').resolves(modelMotoResponse);
    const created = await motorcycleSerice.create(createMotoInput);
    expect(created).to.be.deep.equal(modelMotoResponse);
  });

  it('Should find all motorcycle', async function () {
    const motorcycleSerice = makeSut();
    Sinon.stub(Model, 'find').resolves(arrayofMoto);
    const find = await motorcycleSerice.findAll();
    expect(find).to.be.deep.equal(arrayofMoto);
  });

  it('Should find by Id', async function () {
    const motorcycleSerice = makeSut();
    Sinon.stub(Model, 'findById').resolves(modelMotoResponse);
    const find = await motorcycleSerice.findById('63c71aebf71d64670f2124ab');
    expect(find).to.be.deep.equal(modelMotoResponse);
  });

  it('Should update one motocycle', async function () {
    const motorcycleSerice = makeSut();
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(modelMotoResponse);
    const updated = await motorcycleSerice.updateOne('63c71aebf71d64670f2124ab', createMotoInput);
    expect(updated).to.be.deep.equal(modelMotoResponse);
  });
});