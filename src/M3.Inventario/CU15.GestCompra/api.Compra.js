import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/compra";

export const createCompraRequest = (newCompra) => axios.post(url, newCompra); // POST
export const getComprasRequest = () => axios.get(url); // GET's
export const deletCompraRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getCompraRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateCompraRequest = (id, updatedCompra) =>
  axios.put(`${url}/${id}`, updatedCompra); // PUT
