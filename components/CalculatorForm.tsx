
import React from 'react';
import type { CalculationInputs } from '../types';
import InputGroup from './InputGroup';

interface CalculatorFormProps {
  inputs: CalculationInputs;
  setInputs: React.Dispatch<React.SetStateAction<CalculationInputs>>;
  onCalculate: () => void;
  onClear: () => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ inputs, setInputs, onCalculate, onClear }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-[#8c1515] mb-6">Simulador de Juros Compostos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputGroup
          label="Valor inicial"
          name="initialValue"
          value={inputs.initialValue}
          onChange={handleChange}
          prefix="Kz"
        />
        <InputGroup
          label="Valor mensal"
          name="monthlyValue"
          value={inputs.monthlyValue}
          onChange={handleChange}
          prefix="Kz"
        />
        <InputGroup
          label="Taxa de juros"
          name="interestRate"
          value={inputs.interestRate}
          onChange={handleChange}
          prefix="%"
          suffix={
            <select name="ratePeriod" value={inputs.ratePeriod} onChange={handleChange} className="bg-gray-100 border-l border-gray-300 rounded-r-md pl-2 pr-4 text-sm focus:outline-none">
              <option value="anual">anual</option>
              <option value="mensal">mensal</option>
            </select>
          }
        />
        <InputGroup
          label="Período"
          name="period"
          value={inputs.period}
          onChange={handleChange}
          suffix={
            <select name="periodUnit" value={inputs.periodUnit} onChange={handleChange} className="bg-gray-100 border-l border-gray-300 rounded-r-md pl-2 pr-4 text-sm focus:outline-none">
              <option value="anos">ano(s)</option>
              <option value="meses">mês(es)</option>
            </select>
          }
        />
      </div>
      <div className="mt-8 flex items-center justify-start gap-6">
        <button
          onClick={onCalculate}
          className="bg-[#8c1515] text-white font-bold py-3 px-10 rounded-md hover:bg-[#a71e22] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8c1515]"
        >
          Calcular
        </button>
        <button onClick={onClear} className="text-gray-500 hover:text-[#8c1515] font-medium transition-colors">
          Limpar
        </button>
      </div>
    </div>
  );
};

export default CalculatorForm;
