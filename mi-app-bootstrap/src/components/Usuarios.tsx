import React, { useState } from 'react';
import { Table, Button, Form, Container } from 'react-bootstrap';

function Usuarios() {
  const [edadMinima, setEdadMinima] = useState('');
  const [usuarios] = useState([
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 28 }
  ]);

  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);

  const filtrar = () => {
    if (edadMinima === '') {
      setUsuariosFiltrados(usuarios);
    } else {
      setUsuariosFiltrados(
        usuarios.filter(usuario => usuario.edad >= parseInt(edadMinima))
      );
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <h2>Listado de Usuarios</h2>
      <Form.Group className="mb-3 mt-3" controlId="formEdad">
        <Form.Label>Filtrar por edad mínima:</Form.Label>
        <Form.Control
          type="number"
          value={edadMinima}
          onChange={(e) => setEdadMinima(e.target.value)}
          placeholder="Edad mínima"
        />
      </Form.Group>
      <Button variant="success" className="mb-3" onClick={filtrar}>
        Filtrar
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.edad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Usuarios;
