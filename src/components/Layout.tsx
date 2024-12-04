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
      <aside className="w-1/4 border-r-4 border-[#00514E] p-4 flex flex-col">
        <div className="mb-6">
          <img
            src="/assets/logo.svg"
            alt="Иконка приложения"
            className="w-8 h-8"
          />
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
              <Link to="/applications" className="hover:text-gray-400">
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
          <div className="flex-grow text-center">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-800">🔔</button>
            <Link to="/settings">
              <button className="text-gray-600 hover:text-gray-800">⚙️</button>
            </Link>
            <button className="text-gray-600 hover:text-gray-800">👤</button>
          </div>
        </header>

        {/* Основной контент */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
