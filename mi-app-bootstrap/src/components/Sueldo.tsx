import React, { useState } from 'react';

const SueldoNetoCalculator = () => {
  
  const [sueldoBasico, setSueldoBasico] = useState('');
  const [primas, setPrimas] = useState('');
  const [deducciones, setDeducciones] = useState('');
  const [sueldoNeto, setSueldoNeto] = useState(0);

  
  const handleCalculate = () => {
    const basic = parseFloat(sueldoBasico) || 0;
    const bonus = parseFloat(primas) || 0;
    const deductions = parseFloat(deducciones) || 0;

    const netSalary = basic + bonus - deductions;
    setSueldoNeto(netSalary); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <div className="card p-4 shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <h3 className="text-center mb-4 text-secondary">Calculadora de Sueldo Neto</h3>
        <div className="mb-3">
          <label htmlFor="sueldoBasico" className="form-label text-muted">
            Sueldo Básico:
          </label>
          <input
            type="number"
            id="sueldoBasico"
            className="form-control rounded shadow-sm"
            value={sueldoBasico}
            onChange={(e) => setSueldoBasico(e.target.value)} 
            placeholder="0"
            min="0" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="primas" className="form-label text-muted">
            Primas:
          </label>
          <input
            type="number" 
            id="primas"
            className="form-control rounded shadow-sm"
            value={primas}
            onChange={(e) => setPrimas(e.target.value)}
            placeholder="0"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="deducciones" className="form-label text-muted">
            Deducciones:
          </label>
          <input
            type="number" 
            id="deducciones"
            className="form-control rounded shadow-sm"
            value={deducciones}
            onChange={(e) => setDeducciones(e.target.value)}
            placeholder="0"
            min="0"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="btn btn-success w-100 rounded"
        >
          Calcular
        </button>

        <div className="mt-4 text-center fs-5 text-secondary">
          Sueldo Neto: <span className="fw-bold">{sueldoNeto.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default SueldoNetoCalculator; 