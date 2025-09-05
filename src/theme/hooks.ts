import { useTheme } from 'react-native-paper';
import { AppTheme } from './index';

/**
 * Custom hook to access the app theme with proper TypeScript typing
 * This provides type-safe access to all theme properties including custom colors
 */
export const useAppTheme = () => useTheme<AppTheme>();

/**
 * Hook to get specific color values from the theme
 * Useful for quick access to commonly used colors
 */
export const useAppColors = () => {
  const theme = useAppTheme();
  return theme.colors;
};

/**
 * Hook to get theme-aware styles
 * Returns common style patterns using theme colors
 */
export const useAppStyles = () => {
  const colors = useAppColors();
  
  return {
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    primaryButton: {
      backgroundColor: colors.primary,
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
    },
    primaryButtonText: {
      color: colors.onPrimary,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    secondaryButton: {
      backgroundColor: colors.surface,
      borderColor: colors.outline,
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
    },
    secondaryButtonText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.onBackground,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.onSurfaceVariant,
      marginBottom: 16,
    },
    body: {
      fontSize: 14,
      color: colors.onSurface,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      color: colors.onSurfaceVariant,
    },
    divider: {
      height: 1,
      backgroundColor: colors.outline,
      marginVertical: 16,
    },
  };
};
