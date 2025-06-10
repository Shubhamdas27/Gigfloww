import { ReactNode } from 'react';
import Navbar from './Navbar';
import { useTheme } from '../../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-gray-200' : 'bg-neutral-100 text-neutral-900'
    }`}>
      <Navbar />
      <main className={`pt-8 px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-[100vw] mx-auto ${
        darkMode ? 'text-gray-200' : ''
      }`}>
        {/* Additional wrapper for code blocks in dark mode */}
        <div 
          className={`${darkMode ? 'dark' : ''} container mx-auto`}
          style={darkMode ? {textShadow: '0 0.3px 0.3px rgba(255,255,255,0.05)'} : {}}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;