import { create } from 'zustand';

// Mock user data
const MOCK_USER = {
  id: 1,
  name: 'Nuraj Group',
  email: 'admin@nurajgroup.com',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  role: 'Admin'
};

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email, password) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, we'll accept any credentials
    if (email && password) {
      set({ 
        user: MOCK_USER,
        isAuthenticated: true,
        isLoading: false
      });
    } else {
      set({ isLoading: false });
      throw new Error('Invalid credentials');
    }
  },

  register: async (name, email, password) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, we'll accept any credentials
    if (name && email && password) {
      set({ 
        user: { ...MOCK_USER, name, email },
        isAuthenticated: true,
        isLoading: false
      });
    } else {
      set({ isLoading: false });
      throw new Error('Please fill all required fields');
    }
  },

  logout: () => {
    set({ 
      user: null,
      isAuthenticated: false
    });
  }
}));