import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import SheetsScreen from './src/screens/SheetsScreen';
import TransactionScreen from './src/screens/TransactionScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Import custom tab bar
import CustomTabBar from './CustomTabBar';

// Import store
import { store, persistor } from './src/store';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const renderTabBar = (props) => <CustomTabBar {...props} />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={renderTabBar}
          screenOptions={{
            headerShown: false, // Remove default top navbar from all screens
            contentStyle: {
              backgroundColor: '#FFFFFF', // White background for all screens
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="Sheets"
            component={SheetsScreen}
            options={{
              title: 'Sheets',
              tabBarLabel: 'Sheets',
            }}
          />
          <Tab.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{
              title: 'Transaction',
              tabBarLabel: 'Transaction',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              tabBarLabel: 'Profile',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#FFFFFF', // Always white background
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
