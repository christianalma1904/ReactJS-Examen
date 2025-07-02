import React from 'react';
import { Alert } from 'react-bootstrap';

function Alerts() {
  return (
    <>
      <Alert variant="success">
        Bienvenido al sistema de usuarios y nómina.
      </Alert>
      <Alert variant="info">
        Recuerda completar todos los campos antes de calcular.
      </Alert>
    </>
  );
}

export default Alerts;