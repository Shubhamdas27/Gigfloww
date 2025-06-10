import { AnimatePresence, motion } from 'framer-motion';

type NavbarTheme = 'light' | 'medium' | 'dark';

interface ThemeSwitcherProps {
  currentTheme: NavbarTheme;
  onChange: (theme: NavbarTheme) => void;
}

// A reusable theme switcher component that can be shared across layouts
const ThemeSwitcher = ({ currentTheme, onChange }: ThemeSwitcherProps) => {
  const themes: { value: NavbarTheme; label: string; icon: JSX.Element }[] = [
    { 
      value: 'light', 
      label: 'Light', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )
    },
    { 
      value: 'medium', 
      label: 'Medium', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ) 
    },
    { 
      value: 'dark', 
      label: 'Dark', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ) 
    },
  ];
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-950 p-1 flex space-x-1"
      >
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => onChange(theme.value)}
            className={`p-2 rounded-full transition-all duration-200 ${
              currentTheme === theme.value 
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label={`${theme.label} theme`}
            title={`${theme.label} theme`}
          >
            {theme.icon}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeSwitcher;
