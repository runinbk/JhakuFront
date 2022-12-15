import axios from "axios";

const url = "http://proyectosi1-production-1c08.up.railway.app/producto";
// const url =
// "https://nodejs-mysql-railway-production-9c0c.up.railway.app/producto";

export const createProductoRequest = (newProducto) =>
  axios.post(url, newProducto); // POST
export const getProductosRequest = () => axios.get(url); // GET's
export const deleteProductoRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getProductoRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updateProductoRequest = (id, updatedProducto) =>
  axios.put(`${url}/${id}`, updatedProducto); // PUT
