import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import DashboardPage from '../pages/dashboard/DashboardPage';
import PeoplePage from '../pages/people/PeoplePage';
import HiringPage from '../pages/hiring/HiringPage';
import SalaryPage from '../pages/salary/SalaryPage';
import ReviewsPage from '../pages/reviews/ReviewsPage';
import LoginPage from '../pages/auth/LoginPage';
import { useAuthStore } from '../stores/authStore';

const AppRoutes = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected routes */}
      <Route element={
        isAuthenticated ? (
          <Layout>
            <Outlet />
          </Layout>
        ) : (
          <Navigate to="/login" replace />
        )
      }>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/hiring" element={<HiringPage />} />
        <Route path="/salary" element={<SalaryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Route>
      
      {/* 404 route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;