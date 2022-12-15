import { useEffect } from "react";
import { useMatPrima } from "./MatPrima.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import { MatPrimaTable } from "./component.TableMatPrima";

export const PageMatPrima = () => {
  const { matPrimas, getMatPrimas } = useMatPrima();

  useEffect(() => {
    getMatPrimas();
  }, []);

  function renderTable() {
    if (matPrimas.length === 0)
      return <h1>No existen materias primas registradas</h1>;
    return matPrimas.map((matPrima) => {
      return <MatPrimaTable key={matPrima.id} matPrima={matPrima} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Materias Primas</h1>
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
            Agregar Materia Prima
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Stock Minimo</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
