import chai, { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../mocks/frameMock';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
      expect(framesFound).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      await expect(frameModel.readOne('123ERRADO')).to.be.rejectedWith('InvalidMongoId');
    });
  });

});
