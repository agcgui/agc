
import React from 'react';
import type { CalculationResults } from '../types';
import ResultCard from './ResultCard';

interface ResultsDisplayProps {
  results: CalculationResults;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
  };

  return (
    <div className="mt-10 bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-[#8c1515] mb-6">Resultado</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResultCard
          label="Valor total final"
          value={formatCurrency(results.finalValue)}
          isHighlighted={true}
        />
        <ResultCard
          label="Valor total investido"
          value={formatCurrency(results.totalInvested)}
        />
        <ResultCard
          label="Total em juros"
          value={formatCurrency(results.totalInterest)}
        />
      </div>
    </div>
  );
};

export default ResultsDisplay;
