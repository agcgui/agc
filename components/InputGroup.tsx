import React from 'react';

interface InputGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  prefix?: string;
  suffix?: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, name, value, onChange, prefix, suffix }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center">
        <div className="relative rounded-md shadow-sm w-full flex">
          {prefix && (
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm">
              {prefix}
            </span>
          )}
          <input
            type="text"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={`flex-1 block w-full px-3 py-2 border border-gray-300 focus:ring-[#166534] focus:border-[#166534] sm:text-sm ${prefix ? 'rounded-none' : 'rounded-l-md'} ${suffix ? 'rounded-r-none' : 'rounded-r-md'}`}
          />
          {suffix && (
             <div className="flex items-center">
                {suffix}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputGroup;