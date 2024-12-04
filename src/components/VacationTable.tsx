import React from 'react';
import { VacationRequest } from '@/types';
interface VacationTableProps {
  data: VacationRequest[];
}

const VacationTable = ({ data }: VacationTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Одобрено':
        return 'bg-green-200 text-green-800';
      case 'На рассмотрении':
        return 'bg-yellow-200 text-yellow-800';
      case 'Отказано':
        return 'bg-red-200 text-red-800';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left">
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">№</th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              ФИО/тег
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Номер заявления
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Дата регистрации
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Отдел
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Тип отпуска
            </th>
            <th className="font-bold text-[14px] bg-[#EDEEF0] px-4 py-2">
              Статус
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
                {item.number}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.fullName}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.applicationNumber}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.registrationDate}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.department}
              </td>
              <td className="text-[#4E605F] text-[14px] px-4 py-2">
                {item.leaveType}
              </td>
              <td
                className={`text-[14px] px-4 py-2 ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VacationTable;
