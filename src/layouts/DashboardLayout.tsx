import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../stores/authStore';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/layout/Navbar';

const DashboardLayout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };  const { theme } = useTheme();
  const darkMode = theme === 'dark';
    return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-neutral-50'}`}>
      {/* Use our standardized Navbar component */}
      <Navbar />      {/* Mobile menu button */}
      <div className="md:hidden px-4 mt-4">
        <button 
          className={`p-2 rounded-md shadow-sm border w-full sm:w-auto flex items-center justify-center ${
            darkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-white border-neutral-200 text-neutral-700'
          }`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="ml-2 text-sm">Menu</span>
        </button>
      </div>{/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/50">          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className={`fixed top-16 left-0 bottom-0 w-64 shadow-lg ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className={`flex justify-between items-center p-4 border-b ${
              darkMode ? 'border-gray-800' : 'border-neutral-200'
            }`}>
              <h2 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Menu</h2>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className={darkMode ? 'text-gray-200' : ''}
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <button 
                onClick={handleLogout}
                className={`flex items-center ${
                  darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'
                }`}
                aria-label="Sign out"
              >
                <LogOut size={18} className="mr-2" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}      {/* Main content with page transitions */}
      <main className={`flex-1 p-3 xs:p-4 md:p-6 overflow-auto ${darkMode ? 'text-gray-200' : ''}`}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`container mx-auto ${darkMode ? 'dark' : ''}`}
          style={darkMode ? {textShadow: '0 0.3px 0.3px rgba(255,255,255,0.05)'} : {}}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardLayout;
