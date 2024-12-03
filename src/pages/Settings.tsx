import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

const Settings = () => {
  const [notifications, setNotifications] = useState<{
    upcomingVacations: boolean;
    emailNotifications: boolean;
  }>({
    upcomingVacations: false,
    emailNotifications: false,
  });

  const handleToggle = (option: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow px-[90px] py-[50px]">
      <div className="space-y-6">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold w-1/3 mr-4">Уведомления</h2>
          <div className="flex flex-col w-2/3 space-y-4">
            <div className="flex items-center justify-between">
              <span className="mr-2">Уведомления о предстоящих отпусках</span>
              <ToggleSwitch
                isChecked={notifications.upcomingVacations}
                onToggle={() => handleToggle('upcomingVacations')}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="mr-2">Уведомления по электронной почте</span>
              <ToggleSwitch
                isChecked={notifications.emailNotifications}
                onToggle={() => handleToggle('emailNotifications')}
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mb-6 mt-[45px]" />

        <div className="flex items-center">
          <h2 className="text-lg font-semibold w-1/3 mr-4">
            Контроль остатка отпусков
          </h2>
          <div className="flex flex-col w-2/3 space-y-4">
            <div className="flex items-center justify-between">
              <span className="mr-2">
                Выводить сотрудникам накопленный остаток отпуска.В профиле
                сотрудника и в "Моих отпусках".
              </span>
              <ToggleSwitch
                isChecked={notifications.upcomingVacations}
                onToggle={() => handleToggle('upcomingVacations')}
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mb-6 mt-[45px]" />

        <div className="flex items-center">
          <h2 className="text-lg font-semibold w-1/3 mr-4">Роль</h2>
          <div className="flex flex-col w-2/3 space-y-4">
            <div className="flex items-center justify-between">
              <span className="mr-2 text-white bg-[#00514E] px-4 py-2 rounded-lg">
                Администратор
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="mr-2">
                Вы можете управлять сотрудниками, создавать и модерировать их
                отпуска..
              </span>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mb-6 mt-[45px]" />

        <div className="flex items-center">
          <h2 className="text-lg font-semibold w-1/3 mr-4">
            Модерация отпусков
          </h2>
          <div className="flex flex-col w-2/3 space-y-4">
            <div className="flex items-center justify-between">
              <span className="mr-2">
                Все новые отпуска сотрудников требуют подтверждения
                (модерации)После утверждения отпуска, изменения могут вносить
                только администратор и руководитель отдела.
              </span>
              <ToggleSwitch
                isChecked={notifications.upcomingVacations}
                onToggle={() => handleToggle('upcomingVacations')}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="mr-2">
                Подтверждение отпусков не требуетсяСотрудник может редактировать
                или удалять свои отпуска без ограничений.
              </span>
              <ToggleSwitch
                isChecked={notifications.emailNotifications}
                onToggle={() => handleToggle('emailNotifications')}
              />
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mb-6 mt-[45px]" />
      </div>
    </div>
  );
};

export default Settings;
