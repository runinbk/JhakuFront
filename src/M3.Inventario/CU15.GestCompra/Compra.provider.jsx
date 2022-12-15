import { useContext, useState } from "react";
import { CompraContext } from "./Compra.context";
import {
  createCompraRequest,
  deletCompraRequest,
  getCompraRequest,
  getComprasRequest,
  updateCompraRequest,
} from "./api.Compra";

export const useCompra = () => {
  const context = useContext(CompraContext);
  if (!context) {
    throw new Error("useCompra must be used within a CompraProvider");
  }
  return context;
};

export const CompraContextProvider = ({ children }) => {
  const [compras, setCompras] = useState([]);

  const getCompras = async () => {
    try {
      const response = await getComprasRequest();
      setCompras(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCompra = async (id) => {
    try {
      const response = await getCompraRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createCompra = async (compra) => {
    try {
      const response = await createCompraRequest(compra);
      setCompras([...compras, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCompra = async (id, newFields) => {
    try {
      const response = await updateCompraRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCompra = async (id) => {
    try {
      await deletCompraRequest(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CompraContext.Provider
      value={{
        compras,
        getCompras,
        getCompra,
        createCompra,
        updateCompra,
        deleteCompra,
      }}
    >
      {children}
    </CompraContext.Provider>
  );
};
