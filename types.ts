
export interface CalculationInputs {
  initialValue: string;
  monthlyValue: string;
  interestRate: string;
  ratePeriod: 'anual' | 'mensal';
  period: string;
  periodUnit: 'anos' | 'meses';
}

export interface CalculationResults {
  finalValue: number;
  totalInvested: number;
  totalInterest: number;
}
