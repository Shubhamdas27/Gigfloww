import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useAuthStore } from './stores/authStore';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import PeoplePage from './pages/people/PeoplePage';
import HiringPage from './pages/hiring/HiringPage';
import JobPostingPage from './pages/hiring/JobPostingPage';
import SalaryPage from './pages/salary/SalaryPage';
import ReviewsPage from './pages/reviews/ReviewsPage';

const App = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard\" replace />} />
            <Route path="/register" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/dashboard\" replace />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login\" replace />} />
            <Route path="/people" element={isAuthenticated ? <PeoplePage /> : <Navigate to="/login\" replace />} />
            <Route path="/hiring" element={isAuthenticated ? <HiringPage /> : <Navigate to="/login\" replace />} />
            <Route path="/hiring/post" element={isAuthenticated ? <JobPostingPage /> : <Navigate to="/login\" replace />} />
            <Route path="/salary" element={isAuthenticated ? <SalaryPage /> : <Navigate to="/login\" replace />} />
            <Route path="/reviews" element={isAuthenticated ? <ReviewsPage /> : <Navigate to="/login\" replace />} />
          </Route>

          {/* Redirect root to appropriate page */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard\" replace /> : <Navigate to="/login" replace />} />
          
          {/* Catch all other routes */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;