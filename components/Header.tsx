import React from 'react';

const LogoIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <path d="M0 0H132V132H0V0Z" fill="#166534"/>
        <path d="M85.7594 28.3379L28.3379 66L85.7594 103.662L85.7594 28.3379Z" stroke="white" strokeWidth="8" strokeLinejoin="round"/>
        <path d="M103.662 28.3379V103.662" stroke="white" strokeWidth="8" strokeLinejoin="round"/>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-[#166534] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 text-white">
          <div className="flex items-center">
            <LogoIcon />
            <span className="text-2xl font-bold tracking-tight">AGC calculadora</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="pesquise notícias, recomendações e"
                className="bg-white/20 text-white placeholder-white/70 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <nav className="flex items-center space-x-6 ml-6">
              <a href="#" className="hover:text-gray-200 transition-colors">Notícias</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Empresas</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Calculadoras</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
             <button className="hidden sm:block border border-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#166534] transition-all">
                Agende uma consulta
            </button>
            <a href="#" className="font-semibold hover:text-gray-200 transition-colors">Entrar</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;