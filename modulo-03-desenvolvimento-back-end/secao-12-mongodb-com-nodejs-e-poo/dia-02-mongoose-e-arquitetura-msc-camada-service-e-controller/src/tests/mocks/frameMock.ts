import IFrame, { IFrameWithId } from '../../interfaces/Frame';

const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId: IFrameWithId = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

const framesMockWithId: IFrameWithId[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Ouro',
    color: 'Daquele naipe'
  },
  {
    _id: '63200608810afaa041896724',
    material: 'Ouro',
    color: 'Daquele naipe'
  },
];

export { frameMock, frameMockWithId, framesMockWithId };
