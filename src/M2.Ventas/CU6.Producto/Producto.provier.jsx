import { useContext, useState } from "react";
import { ProductoContext } from "./Producto.context";

import {
  createProductoRequest,
  deleteProductoRequest,
  getProductoRequest,
  getProductosRequest,
  updateProductoRequest,
} from "./api.Producto";

export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const ProductoContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await getProductosRequest();
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProducto = async (id) => {
    try {
      const response = await getProductoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createProducto = async (producto) => {
    try {
      const response = await createProductoRequest(producto);
      setProductos([...productos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProducto = async (id, newFields) => {
    try {
      const response = await updateProductoRequest(id, newFields);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProducto = async (id) => {
    try {
      await deleteProductoRequest(id);
      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductoContext.Provider
      value={{
        productos,
        getProductos,
        getProducto,
        createProducto,
        updateProducto,
        deleteProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};
