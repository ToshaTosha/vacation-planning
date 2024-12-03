import React, { useState } from 'react';
import EmployeeTable from '@/components/EmployeeTable';
import CommonButton from '@/components/CommonButton';

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="bg-white rounded-lg shadow px-[90px] py-[50px]">
      <div className="flex justify-end mb-[22px]">
        <CommonButton text="Добавить сотрудника" />
      </div>
      <input
        type="text"
        placeholder="Поиск по имени..."
        value={searchTerm}
        className="w-full text-[14px] bg-[#EDEEF0] px-4 py-2 mb-4 border-none rounded"
      />
      <EmployeeTable />
    </div>
  );
};

export default EmployeeList;
