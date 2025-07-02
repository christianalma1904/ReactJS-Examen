import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Mi App Bootstrap</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Usuarios</Nav.Link>
        <Nav.Link href="#">Sueldo</Nav.Link>
        <Nav.Link href="#">Bono</Nav.Link>
        <Nav.Link href="#">Registro</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;

