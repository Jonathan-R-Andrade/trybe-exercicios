import chai, { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId, lensesMockWithId } from '../mocks/lensMock';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves(lensesMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfully created', async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe('searching a lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.readOne('631fefaf644a02515ea9bd8e');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      await expect(lensModel.readOne('abc123')).to.be.rejectedWith('InvalidMongoId');
    });
  });

  describe('searching all lenses', () => {
    it('successfully found', async () => {
      const lensesFound = await lensModel.read();
      expect(lensesFound).to.be.deep.equal(lensesMockWithId);
    });
  });

});
