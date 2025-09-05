import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const TabItem = ({
  route,
  index,
  state,
  descriptors,
  navigation,
  isFocused,
}) => {
  const { options } = descriptors[route.key];
  const label = options.tabBarLabel !== undefined
    ? options.tabBarLabel
    : options.title !== undefined
    ? options.title
    : route.name;

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
  const getIconName = (routeName) => {
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
  const iconColor = useSharedValue(isFocused ? 1 : 0);

  React.useEffect(() => {
    // Smooth spring animation for icon scaling - slight increase for active
    scale.value = withSpring(isFocused ? 1.15 : 1, {
      damping: 15,
      stiffness: 150,
      mass: 0.8,
    });

    // Color transition for icon
    iconColor.value = withTiming(isFocused ? 1 : 0, {
      duration: 250,
      easing: Easing.out(Easing.ease),
    });
  }, [isFocused]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });


  const iconColorAnimatedStyle = useAnimatedStyle(() => {
    const activeColor = '#007AFF';
    const inactiveColor = '#8E8E93';
    
    const color = interpolate(
      iconColor.value,
      [0, 1],
      [inactiveColor, activeColor],
      Extrapolate.CLAMP
    );

    return {
      color,
    };
  });

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItem}
    >
      <Animated.View style={[styles.iconContainer, iconAnimatedStyle]}>
        <Animated.View style={iconColorAnimatedStyle}>
          <Icon
            name={getIconName(route.name)}
            size={24}
            color={isFocused ? '#007AFF' : '#8E8E93'}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
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
    backgroundColor: '#FFFFFF',
    paddingBottom: 0,
    // Ensure no black background shows through
    borderTopWidth: 0,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', // Pure white background
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 8,
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
    borderTopWidth: 0,
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
