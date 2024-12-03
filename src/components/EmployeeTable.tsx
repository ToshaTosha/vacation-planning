import React from 'react';

const EmployeeTable = () => {
  const data = [
    {
      employee: 'Иванов Иван',
      department: 'Отдел продаж',
      tag: 'Тег 1',
      daysAccumulated: 10,
      role: 'Менеджер',
    },
    {
      employee: 'Петров Петр',
      department: 'Отдел маркетинга',
      tag: 'Тег 2',
      daysAccumulated: 5,
      role: 'Специалист',
    },
    {
      employee: 'Сидоров Сидор',
      department: 'Отдел разработки',
      tag: 'Тег 3',
      daysAccumulated: 15,
      role: 'Разработчик',
    },
    {
      employee: 'Кузнецов Кузьма',
      department: 'Отдел поддержки',
      tag: 'Тег 4',
      daysAccumulated: 8,
      role: 'Техник',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left">
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Сотрудник
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Отдел
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Тег
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Дней Накоплено
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Роль
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-100 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#EDEEF0]'
              }`}
            >
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.employee}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.department}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.tag}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.daysAccumulated}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
