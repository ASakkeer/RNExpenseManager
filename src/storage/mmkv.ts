import { MMKV } from 'react-native-mmkv';

// Create MMKV storage instance
export const storage = new MMKV();

// Storage utility functions
export const Storage = {
  // String operations
  setString: (key: string, value: string) => {
    storage.set(key, value);
  },
  getString: (key: string, defaultValue?: string) => {
    return storage.getString(key) ?? defaultValue;
  },

  // Number operations
  setNumber: (key: string, value: number) => {
    storage.set(key, value);
  },
  getNumber: (key: string, defaultValue?: number) => {
    return storage.getNumber(key) ?? defaultValue;
  },

  // Boolean operations
  setBoolean: (key: string, value: boolean) => {
    storage.set(key, value);
  },
  getBoolean: (key: string, defaultValue?: boolean) => {
    return storage.getBoolean(key) ?? defaultValue;
  },

  // Object operations (JSON)
  setObject: (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
  },
  getObject: (key: string, defaultValue?: any) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : defaultValue;
  },

  // Delete operations
  delete: (key: string) => {
    storage.delete(key);
  },

  // Clear all
  clearAll: () => {
    storage.clearAll();
  },

  // Check if key exists
  contains: (key: string) => {
    return storage.contains(key);
  },

  // Get all keys
  getAllKeys: () => {
    return storage.getAllKeys();
  },
};

// Storage keys constants
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  EXPENSES: 'expenses',
  CATEGORIES: 'categories',
  THEME: 'theme',
  CURRENCY: 'currency',
} as const;
