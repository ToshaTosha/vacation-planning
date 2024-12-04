import React from 'react';
interface CommonInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput = ({ value, placeholder, onChange }: CommonInputProps) => {
  return (
    <div className="mb-4">
      <input
        type="string"
        id="string"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default CommonInput;
