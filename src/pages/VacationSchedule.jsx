import React from 'react';

const VacationSchedule = () => {
  return (
    <div className="flex justify-between space-x-24 mx-5">
      <div className="bg-white p-6 shadow-md text-center flex-1">
        <h2 className="text-[20px] font-bold text-[#656161]">Единый график</h2>
        <p className="text-[36px] mt-2">2024</p>
        <a href="#" className="text-[11px] text-[#00514E] mt-2 inline-block">
          посмотреть
        </a>
      </div>

      <div className="bg-white p-6 shadow-md text-center flex-1">
        <h2 className="text-[20px] font-bold text-[#656161]">Единый график</h2>
        <p className="text-[36px] mt-2">2025</p>
        <a href="#" className="text-[11px] text-[#8F4141] mt-2 inline-block">
          еще нет отпусков
        </a>
      </div>

      <div className="bg-white p-6 shadow-md text-center flex-1">
        <h2 className="text-[20px] font-bold text-[#656161]">Единый график</h2>
        <p className="text-[36px] mt-2">2026</p>
        <a href="#" className="text-[11px] text-[#8F4141] mt-2 inline-block">
          еще нет отпусков
        </a>
      </div>
    </div>
  );
};

export default VacationSchedule;
