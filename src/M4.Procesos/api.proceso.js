import axios from "axios";

const url =
  "https://nodejs-mysql-railway-production-9c0c.up.railway.app/proceso";

export const createProcesoRequest = (newProceso) => axios.post(url, newProceso); // POST
export const getProcesosRequest = () => axios.get(url); // GET's
export const deleteProcesoRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getProcesoRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateProcesoRequest = (id, updatedProceso) =>
  axios.put(`${url}/${id}`, updatedProceso); // PUT
