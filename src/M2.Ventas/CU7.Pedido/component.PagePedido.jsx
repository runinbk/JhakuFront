import { useEffect } from "react";
import { usePedido } from "./Pedido.provider";

import "bootstrap/dist/css/bootstrap.min.css";
import { PedidoTable } from "./component.TablePedido";

export const PagePedido = () => {
  const { pedidos, getPedidos } = usePedido();

  useEffect(() => {
    getPedidos();
  }, []);

  function renderTable() {
    if (pedidos.length === 0) return <h1>No existen pedidos registrados</h1>;
    return pedidos.map((pedido) => {
      return <PedidoTable key={pedido.id} pedido={pedido} />;
    });
  }

  return (
    <div className="containerApp">
      <div className="containerContent">
        <div className="ProveedorPage">
          <h1>Pedidos</h1>
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
            Agregar Pedido
          </button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Detalle</th>
                <th>Fecha</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
