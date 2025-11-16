import React from 'react';

interface ResultCardProps {
  label: string;
  value: string;
  isHighlighted?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ label, value, isHighlighted = false }) => {
  const baseClasses = "p-6 rounded-md text-center flex flex-col justify-center items-center h-full";
  const highlightedClasses = "bg-[#166534] text-white";
  const defaultClasses = "bg-white border border-gray-200";

  return (
    <div className={`${baseClasses} ${isHighlighted ? highlightedClasses : defaultClasses}`}>
      <span className={`block text-sm ${isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>{label}</span>
      <span className={`block text-2xl font-bold mt-1 ${isHighlighted ? 'text-white' : 'text-gray-800'}`}>{value}</span>
    </div>
  );
};

export default ResultCard;