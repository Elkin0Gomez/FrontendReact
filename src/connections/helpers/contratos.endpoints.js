import axios from "./axios.js";

export const getContratosRequest = () => axios.get("/contrato");

export const getContratoRequest = (id) => axios.get(`/contrato/${id}`);

export const createContratoRequest = (contrato) =>
  axios.post("/contrato", contrato);

export const updateContratosRequest = (id, contrato) =>
  axios.put(`/contrato/${id}`, contrato);

export const deleteContratosRequest = (id) => axios.delete(`/contrato/${id}`);

export const generarDocumentoWordRequest = (id) =>
  axios.get(`/generarDocumentoWord/${id}`, { responseType: 'blob' });