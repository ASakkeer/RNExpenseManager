import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

// Custom color palette
const customColors = {
  // Primary Blue (Buttons, Charts, Highlights)
  primary: '#007BFF',
  onPrimary: '#FFFFFF',
  primaryContainer: '#E3F2FD',
  onPrimaryContainer: '#0A0A0A',
  
  // Dark Text (Headings, Strong Labels)
  onBackground: '#0A0A0A',
  onSurface: '#0A0A0A',
  
  // Gray Text (Secondary Labels, Dates)
  onSurfaceVariant: '#6E6E6E',
  
  // Light Gray Background / Borders (Cards, Inputs, Dividers)
  surfaceVariant: '#F4F4F4',
  outline: '#F4F4F4',
  
  // White (Main Background, Cards, Buttons)
  background: '#FFFFFF',
  surface: '#FFFFFF',
  
  // Black (Tab Bar background)
  surfaceContainer: '#000000',
  
  // Error colors
  error: '#B3261E',
  onError: '#FFFFFF',
  errorContainer: '#FDEAEA',
  onErrorContainer: '#410E0B',
  
  // Additional semantic colors
  secondary: '#6E6E6E',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#F4F4F4',
  onSecondaryContainer: '#0A0A0A',
  
  tertiary: '#007BFF',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#E3F2FD',
  onTertiaryContainer: '#0A0A0A',
  
  // Disabled states
  surfaceDisabled: '#F4F4F4',
  onSurfaceDisabled: '#6E6E6E',
  
  // Shadow and inverse
  shadow: '#000000',
  inverseOnSurface: '#FFFFFF',
  inverseSurface: '#0A0A0A',
  inversePrimary: '#007BFF',
  backdrop: 'rgba(0, 0, 0, 0.5)',
  
  // Elevation levels
  elevation: {
    level0: 'transparent',
    level1: 'rgba(0, 123, 255, 0.05)',
    level2: 'rgba(0, 123, 255, 0.08)',
    level3: 'rgba(0, 123, 255, 0.11)',
    level4: 'rgba(0, 123, 255, 0.12)',
    level5: 'rgba(0, 123, 255, 0.14)',
  },
};

// Light theme
export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...customColors,
  },
  roundness: 8,
  animation: {
    scale: 1.0,
  },
};

// Dark theme
export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    // Override with custom colors for dark mode
    primary: '#007BFF',
    onPrimary: '#FFFFFF',
    primaryContainer: '#1A237E',
    onPrimaryContainer: '#E3F2FD',
    
    // Force white backgrounds even in dark mode
    background: '#FFFFFF',
    onBackground: '#0A0A0A',
    surface: '#FFFFFF',
    onSurface: '#0A0A0A',
    
    surfaceVariant: '#F4F4F4',
    onSurfaceVariant: '#6E6E6E',
    outline: '#F4F4F4',
    
    error: '#F2B8B5',
    onError: '#601410',
    errorContainer: '#8C1D18',
    onErrorContainer: '#F9DEDC',
    
    secondary: '#6E6E6E',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#F4F4F4',
    onSecondaryContainer: '#0A0A0A',
    
    tertiary: '#007BFF',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#1A237E',
    onTertiaryContainer: '#E3F2FD',
    
    surfaceDisabled: '#F4F4F4',
    onSurfaceDisabled: '#6E6E6E',
    
    shadow: '#000000',
    inverseOnSurface: '#FFFFFF',
    inverseSurface: '#0A0A0A',
    inversePrimary: '#007BFF',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    
    elevation: {
      level0: 'transparent',
      level1: 'rgba(0, 123, 255, 0.05)',
      level2: 'rgba(0, 123, 255, 0.08)',
      level3: 'rgba(0, 123, 255, 0.11)',
      level4: 'rgba(0, 123, 255, 0.12)',
      level5: 'rgba(0, 123, 255, 0.14)',
    },
  },
  roundness: 8,
  animation: {
    scale: 1.0,
  },
};

// Export theme type for TypeScript
export type AppTheme = typeof lightTheme;

// Default theme (light)
export const defaultTheme = lightTheme;
