import React, { useState } from 'react';
import CommonButton from '@/components/CommonButton';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('general'); // Состояние для активного таба

  return (
    <div className="bg-white rounded-lg shadow px-[90px] py-[50px]">
      <div className="max-w-2xl mx-auto p-6">
        {/* Переключатель табов */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 text-[14px] ${
              activeTab === 'personal' && 'font-bold'
            }`}
            onClick={() => setActiveTab('personal')}
          >
            Личные данные
          </button>
          /
          <button
            className={`px-4 py-2 text-[14px] ${
              activeTab === 'general' && 'font-bold'
            }`}
            onClick={() => setActiveTab('general')}
          >
            Общая информация
          </button>
        </div>
      </div>

      {/* Контент табов */}
      {activeTab === 'general' && (
        <>
          <div>
            <h2 className="text-[14px] font-bold mb-2">
              Накоплено дней в отпуске
            </h2>
            <span className="text-[14px] mb-2 mr-2 text-white font-bold bg-[#00514E] px-3 py-2 rounded-lg">
              0
            </span>
          </div>
          <hr className="border-gray-300 my-6" />
          <div>
            <h2 className="text-[14px] font-bold mb-2">Следующие отпуска </h2>
            <p className="text-[14px] mb-2 text-[#656161]">
              Не найдено ближайших отпусков{' '}
            </p>
            <hr className="border-gray-300 mb-6" />
          </div>
        </>
      )}

      {activeTab === 'personal' && (
        <>
          <div>
            <h2 className="text-[14px] font-bold mb-2">Имя</h2>
            <p className="text-[14px] mb-2 text-[#656161]">
              Иванов Иван Иванович
            </p>
            <hr className="border-gray-300 mb-6" />
          </div>
          <div>
            <h2 className="text-[14px] font-bold mb-2">Email</h2>
            <p className="text-[14px] mb-2 text-[#656161]">en+@gmail.com</p>
            <hr className="border-gray-300 mb-6" />
          </div>
          <div>
            <h2 className="text-[14px] font-bold mb-2">Должность</h2>
            <p className="text-[14px] mb-2 text-[#656161]">Сотрудник</p>
            <hr className="border-gray-300 mb-6" />
          </div>
          <div>
            <h2 className="text-[14px] font-bold mb-2">Отдел</h2>
            <p className="text-[14px] mb-2 text-[#656161]">Матобес</p>
            <hr className="border-gray-300 mb-6" />
          </div>
        </>
      )}
      <div className="flex justify-around mt-[50px]">
        <CommonButton text="Добавить отпуск" />
        <CommonButton text="Добавить отпуск" />
      </div>
    </div>
  );
};

export default UserProfile;
