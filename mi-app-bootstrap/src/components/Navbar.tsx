import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">Mi App Bootstrap</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
      <Nav.Link as={Link} to="#">Sueldo</Nav.Link>
      <Nav.Link as={Link} to="#">Bono</Nav.Link>
      <Nav.Link as={Link} to="#">Registro</Nav.Link>
    </Nav>
  </Navbar>
);

export default AppNavbar;



