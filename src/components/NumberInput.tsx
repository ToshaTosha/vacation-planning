import React from 'react';

interface NumberInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ value, onChange }: NumberInputProps) => {
  return (
    <div className="mb-4">
      <input
        type="number"
        id="number"
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default NumberInput;
