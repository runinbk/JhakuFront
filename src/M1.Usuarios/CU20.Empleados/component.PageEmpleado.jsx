import { useEffect, Component } from "react";
import { useEmpleado } from "./Empleados.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import { EmpleadoTable } from "./component.TableEmpleado";

export const PageEmpleado = () => {
  const { empleados, getEmpleados } = useEmpleado();

  useEffect(() => {
    getEmpleados();
  }, []);

  function renderTable() {
    if (empleados.length === 0)
      return <h1>No existen empleados registrados</h1>;
    return empleados.map((empleado) => {
      return <EmpleadoTable key={empleado.id} empleado={empleado} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Empleados</h1>
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
            Agregar Empleado
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
                <th>Direccion</th>
                <th>Sexo</th>
                <th>Fecha de Nacimiento</th>
                <th>Id Cargo</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
