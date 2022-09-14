import chai, { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { frameMock, frameMockWithId, framesMockWithId } from '../../mocks/frameMock';
import FrameController from '../../../controllers/Frame';
import FrameService from '../../../services/Frame';
import FrameModel from '../../../models/Frame';
import { ErrorTypes } from '../../../errors/catalog';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('Frame Controller', () => {
  const frameModel = new FrameModel()
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);
  // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
  const req = {} as Request;
  // o mesmo acontece com o segundo parâmetro
  const res = {} as Response;

  before(() => {
    sinon.stub(frameService, 'create').resolves(frameMock);
    sinon.stub(frameService, 'readOne').resolves(frameMock);
    sinon.stub(frameService, 'readAll').resolves(framesMockWithId);
    sinon.stub(frameService, 'delete')
      .onCall(0).resolves()
      .onCall(1).rejects(Error(ErrorTypes.EntityNotFound));

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Frame', () => {
    it('Success', async () => {
      req.body = frameMock;
      await frameController.create(req, res);
      // o cast de `res.status` é feito pois `res` foi criado como do tipo `Resquest` 
      // e agora, que queremos validar com o que foi chamado, precisar ser tratado como um `sinon.SinonStub`
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {
      // como fizemos o dublê da service o valor do `req.params.id` não vai chegar na model
      // logo ele só precisa ser um string e existir
      req.params = { id: frameMockWithId._id };
      await frameController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('ReadAll Frame', () => {
    it('Success', async () => {
      await frameController.readAll(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(framesMockWithId)).to.be.true;
    });
  });

  describe('Delete Frame', () => {
    it('Success', async () => {
      req.params = { id: frameMockWithId._id };
      await frameController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.end as sinon.SinonStub).calledWith()).to.be.true;
    });

    it('Failure', async () => {
      req.params = { id: 'Invalid ID' };
      const result = frameController.delete(req, res);

      await expect(result).to.be.rejectedWith('EntityNotFound');
    });
  });
});
