import chai, { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId, framesMockWithId } from '../mocks/frameMock';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(framesMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockWithId);
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

  describe('searching all frames', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.read();
      expect(framesFound).to.be.deep.equal(framesMockWithId);
    });
  });

  describe('removing a frame', () => {
    it('successfully removed', async () => {
      const lensRemoved = await frameModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensRemoved).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      await expect(frameModel.destroy('abc123')).to.be.rejectedWith('InvalidMongoId');
    });
  });

});
