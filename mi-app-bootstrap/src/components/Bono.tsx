import React, { useState } from 'react';

const BonoVacacionalCalculator = () => {
  const [sueldoDiario, setSueldoDiario] = useState('');
  const [diasDisfrute, setDiasDisfrute] = useState('5');
  const [bonoVacacional, setBonoVacacional] = useState(0);

  const handleCalculate = () => {
    const dailySalary = parseFloat(sueldoDiario) || 0;
    const enjoymentDays = parseFloat(diasDisfrute) || 0;

    const vacationBonus = dailySalary * enjoymentDays;
    setBonoVacacional(vacationBonus);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <div className="card p-4 shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <h3 className="text-center mb-4 text-secondary">Cálculo de Bono Vacacional</h3>

        <div className="mb-3">
          <label htmlFor="sueldoDiario" className="form-label text-muted">
            Sueldo Diario:
          </label>
          <input
            type="number"
            id="sueldoDiario"
            className="form-control rounded shadow-sm"
            value={sueldoDiario}
            onChange={(e) => setSueldoDiario(e.target.value)}
            placeholder="0"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="diasDisfrute" className="form-label text-muted">
            Días de disfrute:
          </label>
          <select
            id="diasDisfrute"
            className="form-select rounded shadow-sm"
            value={diasDisfrute}
            onChange={(e) => setDiasDisfrute(e.target.value)}
          >
            <option value="5">5 días</option>
            <option value="10">10 días</option>
            <option value="15">15 días</option>
            <option value="20">20 días</option>
            <option value="25">25 días</option>
            <option value="30">30 días</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="btn btn-success w-100 rounded"
        >
          Calcular Bono
        </button>

        <div className="mt-4 text-center fs-5 text-secondary">
          Bono Vacacional: <span className="fw-bold">{bonoVacacional.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default BonoVacacionalCalculator;
