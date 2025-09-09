import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Import screens
import IntroSliderScreen from '../screens/IntroSliderScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabs from './MainTabs';

// Import theme and store
import {useAppSelector} from '../store/hooks';
import {lightTheme, darkTheme} from '../theme';

const Stack = createStackNavigator();

const AppNavigator = () => {
  // Always use light theme to ensure white backgrounds
  const currentTheme = lightTheme;

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            primary: currentTheme.colors.primary,
            background: currentTheme.colors.background,
            card: currentTheme.colors.surface,
            text: currentTheme.colors.onBackground,
            border: currentTheme.colors.outline,
            notification: currentTheme.colors.primary,
          },
        }}>
        <Stack.Navigator
          initialRouteName="Intro"
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: currentTheme.colors.background,
            },
            cardStyleInterpolator: ({current, layouts}) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}>
          <Stack.Screen
            name="Intro"
            component={IntroSliderScreen}
            options={{
              title: 'Welcome',
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
            }}
          />
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{
              title: 'Main App',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
