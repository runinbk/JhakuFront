import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/materia";

export const createMatPrimaRequest = (newMatPrima) =>
  axios.post(url, newMatPrima); // POST
export const getMatPrimasRequest = () => axios.get(url); // GET's
export const deleteMatPrimaRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getMatPrimaRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateMatPrimaRequest = (id, updatedMatPrima) =>
  axios.put(`${url}/${id}`, updatedMatPrima); // PUT
