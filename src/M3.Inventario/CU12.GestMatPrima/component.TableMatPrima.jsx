import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const MatPrimaTable = ({ matPrima }) => {
  return (
    <tr>
      <td>{matPrima.id}</td>
      <td>{matPrima.nombre}</td>
      <td>{matPrima.stock}</td>
      <td>{matPrima.stockMinimo}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            // this.setState({ form: data, tipoModal: "actualizar" });
            // this.modalInsertar();
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        {"   "}
        <button
          className="btn btn-danger"
          onClick={() => {
            // this.setState({ form: data });
            // this.modalEliminar();
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};
