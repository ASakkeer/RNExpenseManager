// Global type definitions for the expense manager app

export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
  type: 'income' | 'expense';
  tags?: string[];
  location?: string;
  receipt?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  type: 'income' | 'expense';
  budget?: number;
}

export interface UserPreferences {
  currency: string;
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: boolean;
  biometricAuth: boolean;
}

export interface AppState {
  expenses: Expense[];
  categories: Category[];
  userPreferences: UserPreferences;
  isLoading: boolean;
  error: string | null;
}

// Navigation types
export type RootTabParamList = {
  Home: undefined;
  Expenses: undefined;
  Categories: undefined;
  Settings: undefined;
};

// Redux action types
export interface Action<T = any> {
  type: string;
  payload?: T;
}
