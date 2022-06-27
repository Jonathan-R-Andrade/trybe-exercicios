const joi = require('joi');
const bairroModel = require('../models/bairroModel');
const cepModel = require('../models/cepModel');
const getCepInfo = require('../models/cepAPI');
const customError = require('../errors/customError');
const validateSchema = require('./validateSchema');

const cepDataSchema = joi.object({
  cep: joi.string().not().empty().required().pattern(/^\d{5}-\d{3}$/),
  logradouro: joi.string().not().empty().required(),
  bairro: joi.string().not().empty().required(),
  localidade: joi.string().not().empty().required(),
  uf: joi.string().not().empty().required(),
});

const validateCep = (cep) => {
  if (!cep.match(/^\d{5}-?\d{3}$/g)) {
    throw new customError(400, 'invalidData', 'CEP inválido');
  }
};

const validateCepData = (cepData) => validateSchema(cepDataSchema, cepData);

const removeHyphenFromCep = (cepData) => ({ ...cepData, cep: cepData.cep.replace('-', '') });
const addHyphenToCep = (cepData) => ({
  ...cepData,
  cep: cepData.cep.slice(0, 5).concat('-', cepData.cep.slice(5, 8))
});

const extractInfoFromCep = (cepData) => {
  const { cep, logradouro, bairro, localidade, uf } = cepData;
  return { cep, logradouro, bairro, localidade, uf };
};

const add = async (data) => {
  const newData = removeHyphenFromCep(data);
  const result = await cepModel.getByCep(newData.cep);
  if (result) throw new customError(409, 'alreadyExists', 'CEP já existente');
  const id = await bairroModel.add(newData);
  await cepModel.add(newData, id);
}

const getAndAddCep = async (cep) => {
  const result = await getCepInfo(cep);
  if (result) {
    const cepInfo = extractInfoFromCep(result);
    await add(cepInfo);
    return removeHyphenFromCep(cepInfo);
  }
  return undefined;
}

const getByCep = async (cep) => {
  const result = await cepModel.getByCep(cep.replace('-', ''))
    || await getAndAddCep(cep.replace('-', ''));
  if (!result) throw new customError(404, 'notFound', 'CEP não encontrado');
  return addHyphenToCep(result);
};

module.exports = { validateCep, validateCepData, getByCep, add };
