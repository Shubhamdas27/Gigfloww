import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Activity, Bell, Settings, User, LogOut, HelpCircle, Moon, Sun, 
  Shield, Heart, Clock, ChevronRight, Menu, X
} from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';
  
  const location = useLocation();
  const navigate = useNavigate();
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const settingsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/people', label: 'People' },
    { path: '/hiring', label: 'Hiring' },
    { path: '/salary', label: 'Salary' },
    { path: '/reviews', label: 'Reviews' },
  ];

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  // Updated click outside handler using useEffect
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle settings dropdown
      if (showSettingsDropdown && settingsRef.current && 
         !settingsRef.current.contains(event.target as Node)) {
        setShowSettingsDropdown(false);
      }
      
      // Handle profile dropdown
      if (showProfileDropdown && profileRef.current && 
         !profileRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
      
      // Handle mobile menu
      if (mobileMenuOpen && mobileMenuRef.current && 
         !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSettingsDropdown, showProfileDropdown, mobileMenuOpen]);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);  return (
    <header className={`w-full max-w-[1360px] h-[64px] sm:h-[72px] ${darkMode ? 'bg-gray-900' : 'bg-[#2374A5]'} rounded-lg sm:rounded-full mx-auto shadow-md flex items-center justify-center px-2 xs:px-4 sm:px-6 relative transition-colors duration-200`}>
      {/* Logo - Left side */}
      <div
        className="absolute left-3 xs:left-4 sm:left-6 flex items-center cursor-pointer"
        onClick={handleLogoClick}
        role="button"
        tabIndex={0}
        aria-label="Go to home page"
      >
        <div className="h-6 w-6 sm:h-7 sm:w-7 bg-white bg-opacity-20 rounded flex items-center justify-center text-white mr-1 sm:mr-2">
          <Activity size={16} />
        </div>
        <span className="text-sm sm:text-base font-semibold text-white">GIGFLOWW</span>
      </div>

      {/* Navigation - Centered - Desktop Only */}
      <nav className="hidden md:flex space-x-4">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? `bg-white ${darkMode ? 'text-gray-800' : 'text-[#2374A5]'} rounded-full`
                  : 'text-white hover:bg-white/20 rounded-full'
              }`}
            >
              {item.label}
            </NavLink>
          );
        })}
      </nav>      {/* Mobile menu button */}
      <button
        className="md:hidden absolute right-2 xs:right-4 w-7 h-7 xs:w-9 xs:h-9 rounded-full bg-white flex items-center justify-center text-[#2374A5] z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen ? "true" : "false"}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={14} className="xs:hidden" /> : <Menu size={14} className="xs:hidden" />}
        {mobileMenuOpen ? <X size={16} className="hidden xs:block" /> : <Menu size={16} className="hidden xs:block" />}
      </button>      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className={`md:hidden fixed top-[64px] xs:top-[72px] right-0 left-0 xs:left-auto xs:right-4 w-full xs:w-[250px] shadow-lg z-40 overflow-hidden ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } rounded-b-xl xs:rounded-xl`}
        >
          <div className="py-1 xs:py-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2.5 xs:py-3 text-sm font-medium ${
                    isActive
                      ? darkMode 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-blue-50 text-[#2374A5]'
                      : darkMode
                        ? 'text-gray-200 hover:bg-gray-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}{/* Right items - absolute right */}
      <div className="absolute right-12 xs:right-16 md:right-6 flex items-center space-x-2 sm:space-x-4">
        {/* Settings */}
        <div className="relative" ref={settingsRef}>
          <button
            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center ${darkMode ? 'text-gray-800' : 'text-[#2374A5]'} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
            aria-label="Settings"
            onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
          >
            <Settings size={14} className="sm:hidden" />
            <Settings size={16} className="hidden sm:inline" />
          </button>
            {/* Settings Dropdown */}          {showSettingsDropdown && (
            <div className={`absolute right-0 mt-2 sm:mt-3 w-[220px] xs:w-[260px] sm:w-72 rounded-xl shadow-lg ${darkMode ? 'bg-gray-900 ring-gray-800' : 'bg-white ring-black ring-opacity-5'} z-50 overflow-hidden`}>
              <div className="divide-y divide-gray-100">                <div className={`px-3 xs:px-4 sm:px-5 py-3 sm:py-4 text-sm font-semibold ${darkMode ? 'text-gray-200 bg-gray-800' : 'text-gray-800 bg-gray-50'}`}>
                  Settings
                </div>                  <div className={`px-3 xs:px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center">
                    {darkMode ? 
                      <Sun size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-amber-400" /> : 
                      <Moon size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-indigo-600" />
                    }
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </span>
                  </div>
                  <button 
                    onClick={toggleTheme}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      darkMode ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                    title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    <span 
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        darkMode ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>                  <a 
                  href="#" 
                  className={`flex items-center px-3 xs:px-4 sm:px-5 py-3 sm:py-4 text-sm font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <HelpCircle size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-blue-500" />
                  Help Center
                  <ChevronRight size={12} className={`ml-auto ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </a>                <a 
                  href="#" 
                  className={`flex items-center px-3 xs:px-4 sm:px-5 py-3 sm:py-4 text-sm font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Shield size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-green-500" />
                  Privacy Settings
                  <ChevronRight size={12} className={`ml-auto ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </a>
              </div>
            </div>
          )}
        </div>        {/* Notifications */}
        <button
          className={`relative w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center ${darkMode ? 'text-gray-800' : 'text-[#2374A5]'} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
          aria-label="Notifications"
        >
          <Bell size={14} className="sm:hidden" />
          <Bell size={16} className="hidden sm:inline" />
          <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Avatar with dropdown */}
        <div className="relative" ref={profileRef}>
          <div 
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-150"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-xs sm:text-sm font-medium bg-orange-500">
                {user?.name?.charAt(0) || 'N'}
              </div>
            )}
          </div>

          {/* Profile Dropdown */}          {showProfileDropdown && (
            <div className={`absolute right-0 mt-2 sm:mt-3 w-[220px] xs:w-[260px] sm:w-72 rounded-xl shadow-lg ${darkMode ? 'bg-gray-900 ring-gray-800' : 'bg-white ring-black ring-opacity-5'} z-50 overflow-hidden`}>              <div className={`divide-y ${darkMode ? 'divide-gray-800' : 'divide-gray-100'}`}>
                <div className={`px-3 xs:px-4 sm:px-5 py-3 sm:py-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{user?.name || 'Nuraj Singh'}</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} truncate mt-1`}>{user?.email || 'nuraj.singh@gmail.com'}</p>
                </div>                  <a 
                  href="/profile" 
                  className={`flex items-center px-3 xs:px-4 sm:px-5 py-3 sm:py-4 text-sm font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <User size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-blue-500" />
                  Your Profile
                  <ChevronRight size={12} className={`ml-auto ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </a>
                  <a 
                  href="/activity" 
                  className={`flex items-center px-3 xs:px-4 sm:px-5 py-3 sm:py-4 text-sm font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Clock size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-purple-500" />
                  Activity Log
                  <ChevronRight size={12} className={`ml-auto ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </a>                <a 
                  href="/bookmarks" 
                  className={`flex items-center px-3 xs:px-4 sm:px-5 py-3 sm:py-4 text-sm font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <Heart size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-red-500" />
                  Saved Items
                  <ChevronRight size={12} className={`ml-auto ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </a>
                  <button 
                  onClick={handleLogout}
                  className={`flex w-full text-left items-center px-3 xs:px-4 sm:px-5 py-3 sm:py-4 text-sm 
                    ${darkMode 
                      ? 'text-red-400 hover:bg-gray-700 hover:text-red-300' 
                      : 'text-red-600 hover:bg-red-50 hover:text-red-700'}`}
                >
                  <LogOut size={16} className="mr-2.5 xs:mr-3 sm:mr-3.5 text-red-500" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
