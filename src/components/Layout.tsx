import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      {/* Сайдбар */}
      <aside className="w-1/4 bg-gray-800 text-white p-4 flex flex-col">
        <div className="mb-6">
          <h1 className="text-xl font-bold">Иконка программы</h1>
        </div>
        <nav className="flex-1">
          <ul>
            <li className="mb-4">
              <Link to="/" className="hover:text-gray-400">
                График отпусков
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/employees" className="hover:text-gray-400">
                Сотрудники
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile" className="hover:text-gray-400">
                Мой профиль
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/requests" className="hover:text-gray-400">
                Заявки
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Основной контент */}
      <div className="flex-1 bg-gray-200 p-4">
        {/* Шапка */}
        <header className="bg-white rounded-lg shadow p-4 flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-800">🔔</button>
            <button className="text-gray-600 hover:text-gray-800">⚙️</button>
            <button className="text-gray-600 hover:text-gray-800">👤</button>
          </div>
        </header>

        {/* Основной контент */}
        <div className="bg-white rounded-lg shadow px-[90px] py-[50px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
