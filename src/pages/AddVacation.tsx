import React, { useState } from 'react';
import DatePicker from '@/components/DatePicker';
import VacationForm from '@/components/VacationForm';

const AddVacation = () => {
  const [date, setDate] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [number, setNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const options = [
    { value: 'option1', label: 'Опция 1' },
    { value: 'option2', label: 'Опция 2' },
    { value: 'option3', label: 'Опция 3' },
  ];

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log({ date, dropdownValue, number, isChecked });
  };

  return (
    <div className="bg-white rounded-lg shadow px-[90px] py-[50px]">
      <VacationForm />
    </div>
  );
};

export default AddVacation;
