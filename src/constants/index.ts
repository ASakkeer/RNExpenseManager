// App constants

export const APP_CONFIG = {
  NAME: 'RNExpenseManager',
  VERSION: '1.0.0',
  CURRENCY: 'USD',
  DATE_FORMAT: 'MMM DD, YYYY',
  TIME_FORMAT: 'HH:mm',
} as const;

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#F2F2F7',
  surface: '#FFFFFF',
  text: '#000000',
  textSecondary: '#8E8E93',
  border: '#E0E0E0',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const ICON_SIZES = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;
