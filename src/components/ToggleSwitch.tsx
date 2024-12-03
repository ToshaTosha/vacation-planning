import React from 'react';

interface ToggleSwitchProps {
    isChecked: boolean;
    onToggle: () => void;
  }

const ToggleSwitch = ({ isChecked, onToggle }: ToggleSwitchProps) => {
  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={onToggle}
      />
      <div
        onClick={onToggle}
        className={`w-12 h-6 rounded-full transition-colors duration-200 ${
          isChecked ? 'bg-[#00514E]' : 'bg-gray-400'
        }`}
      >
        <span
          className={`absolute left-0 w-6 h-6 bg-white rounded-full transition-transform duration-200 transform ${
            isChecked ? 'translate-x-6' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
