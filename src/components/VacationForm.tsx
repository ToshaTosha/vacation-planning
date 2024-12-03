import React, { useState } from 'react';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import NumberInput from './NumberInput';
import Checkbox from './Checkbox';
import CommonButton from '@/components/CommonButton';

const VacationForm = () => {
  const [employee, setEmployee] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [numberOfDays, setNumberOfDays] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [leaveType, setLeaveType] = useState<string>('');
  const [isWithoutPay, setIsWithoutPay] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  const employees = [
    { value: 'employee1', label: 'Сотрудник 1' },
    { value: 'employee2', label: 'Сотрудник 2' },
    { value: 'employee3', label: 'Сотрудник 3' },
  ];

  const leaveTypes = [
    { value: 'vacation', label: 'Отпуск' },
    { value: 'sickLeave', label: 'Больничный' },
    { value: 'unpaidLeave', label: 'Без содержания' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      employee,
      startDate,
      numberOfDays,
      endDate,
      leaveType,
      isWithoutPay,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="mb-4 flex items-center">
        <label
          className="block text-gray-700 text-sm font-bold w-1/4"
          htmlFor="employee"
        >
          Сотрудник <span className="text-red-500">*</span>
        </label>
        <div className="w-2/4">
          <Dropdown
            options={employees}
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <label
          className="block text-gray-700 text-sm font-bold w-1/4"
          htmlFor="startDate"
        >
          Начало отпуска <span className="text-red-500">*</span>
        </label>
        <div className="w-2/4">
          <DatePicker
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <label
          className="block text-gray-700 text-sm font-bold w-1/4"
          htmlFor="numberOfDays"
        >
          Кол-во дней <span className="text-red-500">*</span>
        </label>
        <div className="w-2/4">
          <NumberInput
            value={numberOfDays}
            onChange={(e) => setNumberOfDays(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <label
          className="block text-gray-700 text-sm font-bold w-1/4"
          htmlFor="endDate"
        >
          Окончание отпуска <span className="text-red-500">*</span>
        </label>
        <div className="w-2/4">
          <DatePicker
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <label
          className="block text-gray-700 text-sm font-bold w-1/4"
          htmlFor="leaveType"
        >
          Тип отпуска <span className="text-red-500">*</span>
        </label>
        <div className="w-2/4">
          <Dropdown
            options={leaveTypes}
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="comment"
        >
          Комментарий
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={4}
          placeholder="Введите ваш комментарий здесь..."
        />
      </div>

      <div className="mb-4 flex items-center">
        <Checkbox
          checked={isWithoutPay}
          onChange={() => setIsWithoutPay(!isWithoutPay)}
        />
        <label className="ml-2 text-gray-700 text-sm">Без содержания</label>
      </div>

      <CommonButton text="Добавить отпуск" />
    </form>
  );
};

export default VacationForm;
