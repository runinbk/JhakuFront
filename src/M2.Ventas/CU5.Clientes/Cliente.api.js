import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/cliente";

export const createCliente = (newCliente) => axios.post(url, newCliente); // POST
export const getClientes = () => axios.get(url); // GET's
export const deleteCliente = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getCliente = (id) => axios.get(`${url}/${id}`); // GET
export const updateCliente = (id, updatedCliente) =>
  axios.put(`${url}/${id}`, updatedCliente); // PUT
