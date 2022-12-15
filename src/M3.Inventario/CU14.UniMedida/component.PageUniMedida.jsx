import { useEffect } from "react";
import { useUniMedida } from "./UniMedida.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import { UniMedidaTable } from "./component.TableUniMedida";

export const PageUniMedida = () => {
  const { uniMedidas, getUniMedidas } = useUniMedida();

  useEffect(() => {
    getUniMedidas();
  }, []);

  function renderTable() {
    if (uniMedidas.length === 0)
      return <h1>No existen materias primas registradas</h1>;
    return uniMedidas.map((uniMedida) => {
      return <UniMedidaTable key={uniMedida.id} uniMedida={uniMedida} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="UniMedidaPage">
          <h1>Unidades de Medida</h1>
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
            Agregar Unidad de Medida
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Abreviatura</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
