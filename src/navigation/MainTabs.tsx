import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppColors, useAppStyles} from '../theme/hooks';

const Tab = createBottomTabNavigator();

// Simple screen components
const HomeScreen = () => {
  const colors = useAppColors();
  const appStyles = useAppStyles();
  
  return (
    <View style={[appStyles.container, styles.screen]}>
      <Text style={[styles.screenText, {color: colors.onBackground}]}>
        Home Screen
      </Text>
    </View>
  );
};

const SheetsScreen = () => {
  const colors = useAppColors();
  const appStyles = useAppStyles();
  
  return (
    <View style={[appStyles.container, styles.screen]}>
      <Text style={[styles.screenText, {color: colors.onBackground}]}>
        Sheets Screen
      </Text>
    </View>
  );
};

const ProfileScreen = () => {
  const colors = useAppColors();
  const appStyles = useAppStyles();
  
  return (
    <View style={[appStyles.container, styles.screen]}>
      <Text style={[styles.screenText, {color: colors.onBackground}]}>
        Profile Screen
      </Text>
    </View>
  );
};

const MainTabs = () => {
  const colors = useAppColors();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.outline,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.onSurfaceVariant,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sheets"
        component={SheetsScreen}
        options={{
          title: 'Sheets',
          tabBarIcon: ({color, size}) => (
            <Icon name="file-document" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainTabs;
