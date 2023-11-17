import axios from './axios.js'

export const getContratosRequest = () => axios.get('/contrato');

export const getContratoRequest = (id) => axios.get(`/contrato/${id}`);

export const createContratoRequest = (contrato) => axios.post('/contrato', contrato);

export const updateContratosRequest = (contrato) => axios.put(`/contrato/${contrato._id}`, contrato);

export const deleteContratosRequest = (id) => axios.delete(`/contrato/${id}`);