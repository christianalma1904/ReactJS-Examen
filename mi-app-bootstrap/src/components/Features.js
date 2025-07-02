import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Features() {
  return (
    <Row className="mt-4">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Usuarios</Card.Title>
            <Card.Text>Gestiona el listado de usuarios registrados.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Cálculo de Sueldos</Card.Title>
            <Card.Text>Calcula el sueldo neto de cada empleado.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Registro Rápido</Card.Title>
            <Card.Text>Registra nuevos usuarios fácilmente.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Features;