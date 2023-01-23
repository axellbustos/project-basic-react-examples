import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold" as={Link} to="/">
          REACT EXAMPLES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* se usa Nav.link de react-boostrap para heredar la funcion de link(react-router-dom) */}
            {/* el as transforma el link o a en un componente de react para evitar recargar la pagina
          y en to se coloca la ruta */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {/* NavDropdown se usa para hacer un desplegable y sus hijos son NavDropdown.item */}
            <NavDropdown title="Practicas en clase" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/showHideMessage">
                Show / Hide Message
              </NavDropdown.Item>
              {/* NavDropdown.Divider se usa para colocar una linea de separacion */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/stopWatchTime">
                Stopwatch / Timmer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/progressBar">
                Progress Bar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                Task Manager
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Mis practicas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Counter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                Task Manager with validations
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/misPracticas/progressBar2">
                Progress Bar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/misPracticas/showHideMessage2">
                Show hide message
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
              <NavDropdown.Item as={Link} to="/">
                ...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
