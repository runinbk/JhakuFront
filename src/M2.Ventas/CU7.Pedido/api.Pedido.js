import axios from "axios";

// const url = "http://proyectosi1-production-1c08.up.railway.app/pedido";
const url =
  "https://nodejs-mysql-railway-production-9c0c.up.railway.app/pedido";

export const createPedidoRequest = (newPedido) => axios.post(url, newPedido); // POST
export const getPedidosRequest = () => axios.get(url); // GET's
export const deletePedidoRequest = (id) => axios.delete(`${url}/${id}`); // DELETE
export const getPedidoRequest = (id) => axios.get(`${url}/${id}`); // GET
export const updatePedidoRequest = (id, updatedPedido) =>
  axios.put(`${url}/${id}`, updatedPedido); // PUT
