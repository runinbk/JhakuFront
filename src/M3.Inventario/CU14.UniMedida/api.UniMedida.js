import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/unidad";

export const createUniMedidaRequest = (newMatPrima) =>
  axios.post(url, newMatPrima); // POST
export const getUniMedidasRequest = () => axios.get(url); // GET's
export const deletUniMedidaRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getUniMedidaRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateUniMedidaRequest = (id, updatedMatPrima) =>
  axios.put(`${url}/${id}`, updatedMatPrima); // PUT
