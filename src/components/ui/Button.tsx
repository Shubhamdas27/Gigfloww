import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { useTheme } from '../../contexts/ThemeContext';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800',
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-800',
        outline: 'border border-neutral-300 bg-transparent hover:bg-neutral-100 text-neutral-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800',
        ghost: 'hover:bg-neutral-100 text-neutral-800 dark:text-gray-200 dark:hover:bg-gray-800',
        danger: 'bg-error-600 text-white hover:bg-error-700 dark:bg-error-800 dark:hover:bg-error-700',
        success: 'bg-success-600 text-white hover:bg-success-700 dark:bg-success-700 dark:hover:bg-success-600',
        link: 'text-primary-600 underline-offset-4 hover:underline p-0 h-auto dark:text-blue-300 dark:hover:text-blue-200',
      },
      size: {
        default: 'h-8 sm:h-10 px-3 sm:px-4 py-1.5 sm:py-2',
        sm: 'h-6 sm:h-8 px-2 sm:px-3 text-xs',
        lg: 'h-10 sm:h-12 px-4 sm:px-6',
        icon: 'h-8 w-8 sm:h-10 sm:w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    const { theme } = useTheme();
    const darkMode = theme === 'dark';
    
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth, className }),
          darkMode && 'dark'
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };