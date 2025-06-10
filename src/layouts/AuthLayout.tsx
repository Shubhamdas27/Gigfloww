import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const AuthLayout = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  // Determine which page we're on
  const isLoginPage = location.pathname === '/login' || location.pathname === '/';
  
  // Use actual team photos from the screenshots
  const loginImagePath = '/image/58db73903a7a2b32160a0558b8ab7cf61a10df99.jpg'; // Image for login page (people around laptop)
  const registerImagePath = '/image/e746389fc6ef3eade6d93b11d615eba488ba4b7d.jpg'; // Image for register page (hands joining)
  
  const teamImageUrl = isLoginPage ? loginImagePath : registerImagePath;

  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Mobile header with background image for small screens */}
      <div className="md:hidden relative h-32 xs:h-40 overflow-hidden">
        <img 
          src={teamImageUrl} 
          alt="Team collaborating" 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/50' : 'bg-black/30'}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center px-4 py-2">
            <img 
              src="/image/4df4730eaaddd2a082b41b4a31817cf1d63a3afb.png" 
              alt="GIGFLOWW Logo" 
              className="h-10 xs:h-14 mb-1 xs:mb-2 filter brightness-0 invert" 
            />
            <p className="text-white text-opacity-80 text-xs xs:text-sm">
              {isLoginPage ? "Welcome back" : "Join our platform"}
            </p>
          </div>
        </div>
      </div>
      
      {/* Desktop left panel with image */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img 
          src={teamImageUrl} 
          alt="Team collaborating" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No overlay for exact match with screenshots */}
      </div>
      
      {/* Right panel with form - using exact styling from screenshots */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center ${
        darkMode ? 'bg-gray-900' : isLoginPage ? 'bg-white' : 'bg-[#f8fbfd]'
      }`}>
        <motion.div 
          className="max-w-md mx-auto w-full px-4 xs:px-6 sm:px-8 py-6 sm:py-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-4 sm:mb-6 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img 
                src="/image/4df4730eaaddd2a082b41b4a31817cf1d63a3afb.png" 
                alt="GIGFLOWW Logo" 
                className={`h-10 sm:h-14 mb-2 ${darkMode ? 'filter brightness-0 invert' : ''}`} 
              />
            </div>
          </div>

          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
          
          {/* Additional UI elements visible in screenshots */}
          {isLoginPage && (
            <div className="absolute bottom-4 right-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;