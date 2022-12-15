import { useEffect, Component } from "react";
import { useUsuario } from "./Usuario.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProveedorTable } from "./component.TableUsuario";

export const PageUsuario = () => {
  const { usuarios, getUsuarios } = useUsuario();

  useEffect(() => {
    getUsuarios();
  }, []);

  function renderTable() {
    if (usuarios.length === 0) return <h1>No existen usuarios registrados</h1>;
    return usuarios.map((usuario) => {
      return <ProveedorTable key={usuario.id} usuario={usuario} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Usuarios</h1>
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
            Agregar Usuario
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Login</th>
                <th>Password</th>
                <th>idEmpleado</th>
                <th>idRol</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
