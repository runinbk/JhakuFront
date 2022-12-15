import { useEffect, Component } from "react";
import { useProducto } from "./Producto.provier";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProductoTable } from "./component.TableProducto";

export const PageProducto = () => {
  const { productos, getProductos } = useProducto();

  useEffect(() => {
    getProductos();
  }, []);

  function renderTable() {
    if (productos.length === 0)
      return <h1>No existen productos registrados</h1>;
    return productos.map((producto) => {
      return <ProductoTable key={producto.id} producto={producto} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Productos</h1>
          <br />
          <br />
          <br />
          <button
            className="btn btn-success"
            onClick={() => {
              // this.setState({ form: null, tipoModal: "insertar" });
              // this.modalInsertar();
            }}
          >
            Agregar Producto
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
