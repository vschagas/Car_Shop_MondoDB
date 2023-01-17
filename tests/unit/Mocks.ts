export const createCarInput = {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  model: 'Uno com Escada',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const modelResponse = {
  id: '63c6f8a4e18b8441d9b2086f',
  ...createCarInput,
};

export const arrayOfCars = [
  modelResponse,
];

export const createMotoInput = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const modelMotoResponse = {
  id: '63c71aebf71d64670f2124ab',
  ...createMotoInput,
};

export const arrayofMoto = [
  modelMotoResponse,
];
