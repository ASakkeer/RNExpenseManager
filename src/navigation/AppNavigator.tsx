import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import your screens here
// import HomeScreen from '../screens/HomeScreen';
// import ExpensesScreen from '../screens/ExpensesScreen';
// import CategoriesScreen from '../screens/CategoriesScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// Placeholder screens for now
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

// Placeholder components
const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

const ExpensesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Expenses Screen</Text>
  </View>
);

const CategoriesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Categories Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 1,
              borderTopColor: '#e0e0e0',
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#8E8E93',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Dashboard',
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="Expenses"
            component={ExpensesScreen}
            options={{
              title: 'Expenses',
              tabBarLabel: 'Expenses',
            }}
          />
          <Tab.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: 'Categories',
              tabBarLabel: 'Categories',
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'Settings',
              tabBarLabel: 'Settings',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});

export default AppNavigator;
