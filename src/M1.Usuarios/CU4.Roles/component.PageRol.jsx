import { useEffect, Component } from "react";
import { useRol } from "./Roles.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import { RolTable } from "./component.TableRol";

export const PageRol = () => {
  const { roles, getRoles } = useRol();

  useEffect(() => {
    getRoles();
  }, []);

  function renderTable() {
    if (roles.length === 0) return <h1>No existen roles registrados</h1>;
    return roles.map((rol) => {
      return <RolTable key={rol.id} rol={rol} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Roles</h1>
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
            Agregar Rol
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
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
