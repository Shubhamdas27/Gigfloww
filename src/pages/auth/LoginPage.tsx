import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { useTheme } from '../../contexts/ThemeContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to login. Please try again.');
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className={`text-center text-lg sm:text-xl font-medium mb-1 sm:mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        Welcome to Gigfloww
      </h2>
      <p className={`text-center mb-4 sm:mb-6 text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Seamless HR operations start now!
      </p>

      {error && (
        <div className={`mb-4 p-2 sm:p-3 rounded-md text-xs sm:text-sm ${
          darkMode 
            ? 'bg-red-900/30 border border-red-800 text-red-300' 
            : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="space-y-1">
          <label htmlFor="email" className={`block text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 sm:p-2.5 pr-8 sm:pr-10 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
              }`}
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <label htmlFor="password" className={`block text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Password
            </label>
            <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 sm:p-2.5 pr-8 sm:pr-10 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
              }`}
              required
            />
            <button
              type="button"
              className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 ${
                darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={14} className="sm:hidden" /> : <Eye size={14} className="sm:hidden" />}
              {showPassword ? <EyeOff size={16} className="hidden sm:block" /> : <Eye size={16} className="hidden sm:block" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 sm:py-2.5 text-xs sm:text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-3 sm:mt-4 ${
            darkMode ? 'focus:ring-offset-gray-900' : ''
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 size={14} className="inline mr-1.5 sm:mr-2 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Sign in
            </>
          )}
        </button>
      </form>

      <div className="mt-4 sm:mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className={`px-2 ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-500'}`}>
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
          <button
            type="button"
            className={`flex justify-center items-center py-1.5 sm:py-2 px-2 sm:px-4 border rounded-md shadow-sm text-xs sm:text-sm font-medium ${
              darkMode 
                ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' 
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="#4285F4"
              />
            </svg>
            Google
          </button>
          <button
            type="button"
            className={`flex justify-center items-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
              darkMode 
                ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' 
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
              <path d="M17.2 12.2c-.1-1.1.4-2.3 1.1-3.1.8-.8 1.8-1.2 2.8-1.1-.7-1.4-1.6-2-2.7-2.5-1.1-.5-2.2-.7-3.1-.4-.8.3-1.5.5-2.3.5-.8 0-1.6-.2-2.4-.5-1.1-.4-2-.3-3 .2-2.3 1-3.8 4-3.2 7.2.4 1.8 1.2 3.5 2.1 4.9.9 1.5 1.9 2.9 3.5 3 .8 0 1.4-.3 2.2-.6.9-.3 1.6-.3 2.4 0 .8.3 1.4.6 2.2.5 1.7-.1 2.8-1.5 3.7-3 .6-.9 1-1.9 1.3-3-1.3-.4-2.4-1.2-3.1-2.5-.7-1.2-.8-2.4-.5-3.6zm-1.7-6.2c.8-1 1-1.8.9-2.9-1.1.1-2 .6-2.6 1.4-.6.8-.9 1.8-.8 2.9 1.1 0 1.8-.5 2.5-1.4z" fill={darkMode ? "white" : "black"}/>
            </svg>
            Apple
          </button>
        </div>
      </div>

      <p className={`mt-6 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Don't have an account? <Link to="/register" className="font-medium text-blue-500 hover:text-blue-700">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;