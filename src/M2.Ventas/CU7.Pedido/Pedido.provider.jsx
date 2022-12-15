import { useContext, useState } from "react";
import { PedidoContext } from "./Pedido.context";
import {
  createPedidoRequest,
  deletePedidoRequest,
  getPedidoRequest,
  getPedidosRequest,
  updatePedidoRequest,
} from "./api.Pedido";

export const usePedido = () => {
  const context = useContext(PedidoContext);
  if (!context) {
    throw new Error("usePedido must be used within a PedidoProvider");
  }
  return context;
};

export const PedidoContextProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);

  const getPedidos = async () => {
    try {
      const response = await getPedidosRequest();
      setPedidos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPedido = async (id) => {
    try {
      const response = await getPedidoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createPedido = async (pedido) => {
    try {
      const response = await createPedidoRequest(pedido);
      setPedidos([...pedidos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePedido = async (id, newFields) => {
    try {
      const response = await updatePedidoRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deletePedido = async (id) => {
    try {
      await deletePedidoRequest(id);
      setPedidos(pedidos.filter((pedido) => pedido.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PedidoContext.Provider
      value={{
        pedidos,
        getPedidos,
        getPedido,
        createPedido,
        updatePedido,
        deletePedido,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};
