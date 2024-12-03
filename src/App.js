import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Settings from '@/pages/Settings.tsx';
import VacationSchedule from '@/pages/VacationSchedule';
import UserProfile from '@/pages/UserProfile';
import EmployeeList from '@/pages/EmployeeList';

const App = () => {
  const location = useLocation();
  let title = '';

  // Определяем заголовок в зависимости от текущего маршрута
  switch (location.pathname) {
    case '/':
      title = 'График отпусков';
      break;
    case '/employees':
      title = 'Сотрудники';
      break;
    case '/profile':
      title = 'Мой профиль';
      break;
    case '/requests':
      title = 'Заявки';
      break;
    case '/settings':
      title = 'Настройки';
      break;
    case '/schedule':
      title = 'Графики отпусков';
      break;
    default:
      title = 'Неизвестная страница';
  }

  return (
    <Layout title={title}>
      <Routes>
        {/* <Route path="/employees" element={<Employees />} /> */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/schedule" element={<VacationSchedule />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Layout>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
