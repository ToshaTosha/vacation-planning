import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout.tsx';
import Settings from '@/pages/Settings.tsx';
import VacationSchedule from '@/pages/VacationSchedule';
import UserProfile from '@/pages/UserProfile';

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
        <Route path="/" element={<Home />} />
        {/* <Route path="/employees" element={<Employees />} />
        <Route path="/requests" element={<Requests />} /> */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/schedule" element={<VacationSchedule />} />
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
