import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const CommonButton = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00514E] text-white font-bold text-[14px] px-[21px] py-[12px] shadow-md hover:shadow-lg transition-shadow duration-200 rounded-xl"
    >
      {text}
    </button>
  );
};

export default CommonButton;
