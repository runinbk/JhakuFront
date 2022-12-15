import { useEffect } from "react";
import { useCompra } from "./Compra.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import { CompraTable } from "./component.TableCompra";

export const PageCompra = () => {
  const { compras, getCompras } = useCompra();

  useEffect(() => {
    getCompras();
  }, []);

  function renderTable() {
    if (compras.length === 0)
      return <h1>No existen materias primas registradas</h1>;
    return compras.map((compra) => {
      return <CompraTable key={compra.id} compra={compra} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="CompraPage">
          <h1>Compras</h1>
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
            Agregar Compra
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>idEmpleado</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
