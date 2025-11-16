
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import type { CalculationInputs, CalculationResults } from './types';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    initialValue: '1000',
    monthlyValue: '500',
    interestRate: '8',
    ratePeriod: 'anual',
    period: '10',
    periodUnit: 'anos',
  });
  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleCalculate = useCallback(() => {
    const initialValue = parseFloat(inputs.initialValue.replace(',', '.')) || 0;
    const monthlyValue = parseFloat(inputs.monthlyValue.replace(',', '.')) || 0;
    const interestRate = parseFloat(inputs.interestRate.replace(',', '.')) || 0;
    const period = parseInt(inputs.period) || 0;

    const monthlyRate = inputs.ratePeriod === 'anual' ? interestRate / 12 / 100 : interestRate / 100;
    const totalMonths = inputs.periodUnit === 'anos' ? period * 12 : period;

    let futureValue = 0;
    if (monthlyRate === 0) {
      futureValue = initialValue + monthlyValue * totalMonths;
    } else {
      const factor = Math.pow(1 + monthlyRate, totalMonths);
      futureValue = initialValue * factor + monthlyValue * ((factor - 1) / monthlyRate);
    }
    
    const totalInvested = initialValue + monthlyValue * totalMonths;
    const totalInterest = futureValue - totalInvested;

    setResults({
      finalValue: futureValue,
      totalInvested: totalInvested,
      totalInterest: totalInterest,
    });
  }, [inputs]);

  const handleClear = useCallback(() => {
    setInputs({
      initialValue: '',
      monthlyValue: '',
      interestRate: '',
      ratePeriod: 'anual',
      period: '',
      periodUnit: 'anos',
    });
    setResults(null);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <CalculatorForm inputs={inputs} setInputs={setInputs} onCalculate={handleCalculate} onClear={handleClear} />
          {results && <ResultsDisplay results={results} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
