import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbarf() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-4 containerApp"
        >
          <Container className="containerApp">
            <Navbar.Brand>
              <Link to="/JhakuFront/" className="titleNav">
                Jhaku - Panaderia
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/JhakuFront/" className="titleNav">
                    Jhaku - Panaderia
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Usuarios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/JhakuFront/usuarios" className="dropdown-item">
                      Usuarios
                    </Link>

                    <Link to="/JhakuFront/roles" className="dropdown-item">
                      Roles
                    </Link>

                    <Link to="/JhakuFront/personal" className="dropdown-item">
                      Personal
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Ventas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/JhakuFront/clientes" className="dropdown-item">
                      Clientes
                    </Link>

                    <Link to="/JhakuFront/producto" className="dropdown-item">
                      Productos
                    </Link>

                    <Link to="/JhakuFront/pedido" className="dropdown-item">
                      Pedidos
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Inventario"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/JhakuFront/proveedor" className="dropdown-item">
                      Proveedor
                    </Link>

                    <Link to="/JhakuFront/matprima" className="dropdown-item">
                      Maetria Prima
                    </Link>

                    <Link
                      to="/JhakuFront/unidadmedida"
                      className="dropdown-item"
                    >
                      Unidad de Medida
                    </Link>
                    <Link to="/JhakuFront/compra" className="dropdown-item">
                      Compra de Materia Prima
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Processos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {/* <Link to="/usuarios" className="dropdown-item">
                      Usuarios
                    </Link>

                    <Link to="/roles" className="dropdown-item">
                      Roles
                    </Link>

                    <Link to="/personal" className="dropdown-item">
                      Personal
                    </Link> */}
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarf;
