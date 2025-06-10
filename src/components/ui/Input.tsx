import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../contexts/ThemeContext';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, ...props }, ref) => {
    const { theme } = useTheme();
    const darkMode = theme === 'dark';
    
    return (
      <div className="relative">
        {icon && (
          <div className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-neutral-500'} scale-75 sm:scale-100`}>
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            `flex h-8 sm:h-10 w-full rounded-md border ${
              darkMode 
                ? 'border-gray-700 bg-gray-900 text-gray-200 ring-offset-gray-900 placeholder:text-gray-500' 
                : 'border-neutral-300 bg-white ring-offset-white placeholder:text-neutral-500'
            } px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            icon && "pl-8 sm:pl-10",
            error && `border-error-500 ${darkMode ? 'focus-visible:ring-red-500' : 'focus-visible:ring-error-500'}`,
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className={`mt-1 text-xs ${darkMode ? 'text-red-400' : 'text-error-500'}`}>{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };