import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AGC Calculadora. All rights reserved.</p>
        <p className="mt-1">This is a simulator and the results are estimates. Consult a financial advisor.</p>
      </div>
    </footer>
  );
};

export default Footer;