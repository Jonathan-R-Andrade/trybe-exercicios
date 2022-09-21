import ILens, { ILensWithId } from '../../interfaces/Lens';

const lensMock: ILens = {
  degree: 1.5,
  antiGlare: false,
  blueLightFilter: true,
};

const lensMockWithId: ILensWithId = {
  _id: '631fefaf644a02515ea9bd8e',
  degree: 1.5,
  antiGlare: false,
  blueLightFilter: true,
};

const lensesMockWithId: ILensWithId[] = [
  {
    _id: '631fefaf644a02515ea9bd8e',
    degree: 1.5,
    antiGlare: false,
    blueLightFilter: true,
  },
  {
    _id: '632002036724874f86ce2de1',
    degree: 1.75,
    antiGlare: true,
    blueLightFilter: true,
  },
];

export { lensMock, lensMockWithId, lensesMockWithId };
