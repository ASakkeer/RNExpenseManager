import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppColors} from '../theme/hooks';

interface TabItemProps {
  route: any;
  index: number;
  state: any;
  descriptors: any;
  navigation: any;
  isFocused: boolean;
}

const TabItem: React.FC<TabItemProps> = ({
  route,
  index: _index,
  state: _state,
  descriptors,
  navigation,
  isFocused,
}) => {
  const colors = useAppColors();
  const {options} = descriptors[route.key];

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  // Icon mapping
  const getIconName = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return 'home';
      case 'Sheets':
        return 'file-document';
      case 'Transaction':
        return 'credit-card';
      case 'Profile':
        return 'account';
      default:
        return 'circle';
    }
  };

  // Animation values - all icons start at inactive size
  const scale = useSharedValue(1);

  React.useEffect(() => {
    // Smooth spring animation for icon scaling - slight increase for active
    scale.value = withSpring(isFocused ? 1.15 : 1, {
      damping: 15,
      stiffness: 150,
      mass: 0.8,
    });
  }, [isFocused, scale]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItem}>
      <Animated.View style={[styles.iconContainer, iconAnimatedStyle]}>
        {/* @ts-ignore */}
        <Icon
          name={getIconName(route.name)}
          size={24}
          color={isFocused ? colors.primary : colors.onSurfaceVariant}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const colors = useAppColors();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.tabBar, {backgroundColor: colors.surface}]}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (
            <TabItem
              key={route.key}
              route={route}
              index={index}
              state={state}
              descriptors={descriptors}
              navigation={navigation}
              isFocused={isFocused}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    // Ensure no black background shows through
    borderTopWidth: 0,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 15,
    paddingBottom: Platform.OS === 'ios' ? 22 : 18, // Increased by 10px
    paddingHorizontal: 16,
    // Enhanced Material Design shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 16, // Higher elevation for Android
    // Add subtle border for definition
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
    borderTopWidth: 0.5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    minHeight: 54, // Increased by 10px (44 + 10)
    paddingHorizontal: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
  },
});

export default CustomTabBar;
