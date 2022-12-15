import { useEffect, Component } from "react";
import { useClient } from "./ClientProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import { ClienteTable } from "./Cliente.table";

export const ClientPage = () => {
  const { clients, getClients } = useClient();

  useEffect(() => {
    getClients();
  }, []);

  function renderTable() {
    if (clients.length === 0) return <h1>No existen clientes registrados</h1>;
    return clients.map((client) => {
      return <ClienteTable key={client.id} client={client} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Clientes</h1>
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
            Agregar Cliente
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>CI</th>
                <th>Telefono</th>
                <th>Direccion</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
