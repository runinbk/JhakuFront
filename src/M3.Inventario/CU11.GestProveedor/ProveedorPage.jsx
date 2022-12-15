import { useEffect, Component } from "react";
import { useProveedor } from "./ProveedorProvider";

import "./ProveedorPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { ProveedorTable } from "./ProveedorTable";

export const ProveedorPage = () => {
  const { getProveedores, proveedores } = useProveedor();

  useEffect(() => {
    getProveedores();
  }, []);

  function renderTable() {
    if (proveedores.length === 0)
      return <h1>No existen proveedores registrados</h1>;
    return proveedores.map((proveedor) => {
      return <ProveedorTable key={proveedor.id} proveedor={proveedor} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Proveedores</h1>
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
            Agregar Proveedor
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Telefono</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
