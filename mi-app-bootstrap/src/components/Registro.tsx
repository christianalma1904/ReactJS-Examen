import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('Developer'); // Valor por defecto

  const handleRegister = () => {
    // Aquí puedes manejar la lógica de registro, por ejemplo, enviar los datos a una API
    console.log('Datos de registro:', { nombre, edad, cargo });
    alert(`Usuario ${nombre} registrado con éxito como ${cargo}!`); // Usar un modal personalizado en una app real
    // Resetear el formulario
    setNombre('');
    setEdad('');
    setCargo('Developer');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <div className="card p-4 shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <h3 className="text-center mb-4 text-secondary">Registro de Usuario</h3>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label text-muted">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control rounded shadow-sm"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Introduce tu nombre"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="edad" className="form-label text-muted">
            Edad:
          </label>
          <input
            type="number"
            id="edad"
            className="form-control rounded shadow-sm"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            placeholder="0"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cargo" className="form-label text-muted">
            Cargo:
          </label>
          <select
            id="cargo"
            className="form-select rounded shadow-sm"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="QA">QA</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Other">Otro</option>
          </select>
        </div>

        <button
          onClick={handleRegister}
          className="btn btn-success w-100 rounded"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
