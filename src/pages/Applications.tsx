import { useState } from 'react';
import VacationTable from '@/components/VacationTable';
import Dropdown from '@/components/Dropdown';
import CommonInput from '@/components/CommonInput';
import { VacationRequest } from '@/types';

const Applications = () => {
  const data: VacationRequest[] = [
    {
      number: 1,
      fullName: 'Иванов Иван Иванович',
      applicationNumber: 12345,
      registrationDate: '2023-10-01',
      department: 'Отдел продаж',
      leaveType: 'Отпуск',
      status: 'Одобрено',
    },
    {
      number: 2,
      fullName: 'Петров Петр Петрович',
      applicationNumber: 12346,
      registrationDate: '2023-10-02',
      department: 'Отдел маркетинга',
      leaveType: 'Больничный',
      status: 'На рассмотрении',
    },
    {
      number: 3,
      fullName: 'Сидоров Сидор Сидорович',
      applicationNumber: 12347,
      registrationDate: '2023-10-03',
      department: 'Отдел IT',
      leaveType: 'Отпуск',
      status: 'Отказано',
    },
  ];
  const [sort, setSort] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const sortOptions = [
    { value: 'alphabetically', label: 'По алфавиту' },
    { value: 'date', label: 'По дате' },
  ];

  return (
    <div className="bg-white rounded-lg shadow px-[90px] py-[50px]">
      <div className="mb-4 flex items-start">
        <div className="w-1/4 mr-4">
          <CommonInput
            value={search}
            placeholder="Поиск..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-1/4">
          <Dropdown
            options={sortOptions}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          />
        </div>
      </div>
      <VacationTable data={data} />
    </div>
  );
};

export default Applications;
