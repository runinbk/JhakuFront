import axios from "axios";

// const url = "http://proyectosi1-production-1c08.up.railway.app/proveedor";
const url =
  "https://nodejs-mysql-railway-production-9c0c.up.railway.app/proveedor";

export const createProveedorRequest = (newCliente) =>
  axios.post(url, newCliente); // POST
export const getProveedoresRequest = () => axios.get(url); // GET's
export const deleteProveedorRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getProveedorRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateProveedorRequest = (id, updatedCliente) =>
  axios.put(`${url}/${id}`, updatedCliente); // PUT
