import '@testing-library/react-native/extend-expect';

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

// Mock react-native-screens
jest.mock('react-native-screens', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Screen: View,
    ScreenContainer: View,
    ScreenStack: View,
    ScreenStackHeaderConfig: View,
    ScreenStackHeaderBackButtonImage: View,
    ScreenStackHeaderCenterView: View,
    ScreenStackHeaderLeftView: View,
    ScreenStackHeaderRightView: View,
    ScreenStackHeaderSearchBarView: View,
    SearchBar: View,
    NativeScreen: View,
    NativeScreenContainer: View,
    NativeScreenNavigationContainer: View,
    ScreenContext: View,
    ScreenStack: View,
    ScreenStackHeaderConfig: View,
    ScreenStackHeaderBackButtonImage: View,
    ScreenStackHeaderCenterView: View,
    ScreenStackHeaderLeftView: View,
    ScreenStackHeaderRightView: View,
    ScreenStackHeaderSearchBarView: View,
    SearchBar: View,
    enableScreens: jest.fn(),
    enableFreeze: jest.fn(),
  };
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    SafeAreaProvider: View,
    SafeAreaView: View,
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
    useSafeAreaFrame: () => ({ x: 0, y: 0, width: 0, height: 0 }),
  };
});

// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

// Mock react-native-mmkv
jest.mock('react-native-mmkv', () => ({
  MMKV: jest.fn().mockImplementation(() => ({
    set: jest.fn(),
    getString: jest.fn(),
    getNumber: jest.fn(),
    getBoolean: jest.fn(),
    delete: jest.fn(),
    clearAll: jest.fn(),
    contains: jest.fn(),
    getAllKeys: jest.fn(),
  })),
}));

// Mock react-native-haptic-feedback
jest.mock('react-native-haptic-feedback', () => ({
  trigger: jest.fn(),
}));

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Svg: View,
    Circle: View,
    Ellipse: View,
    G: View,
    Text: View,
    TextPath: View,
    TSpan: View,
    Path: View,
    Polygon: View,
    Polyline: View,
    Line: View,
    Rect: View,
    Use: View,
    Image: View,
    Symbol: View,
    Defs: View,
    LinearGradient: View,
    RadialGradient: View,
    Stop: View,
    ClipPath: View,
    Pattern: View,
    Mask: View,
    Marker: View,
    Switch: View,
    ForeignObject: View,
  };
});

// Mock lottie-react-native
jest.mock('lottie-react-native', () => 'LottieView');

// Mock react-native-gifted-charts
jest.mock('react-native-gifted-charts', () => ({
  LineChart: 'LineChart',
  BarChart: 'BarChart',
  PieChart: 'PieChart',
  StackedBarChart: 'StackedBarChart',
  AreaChart: 'AreaChart',
  DonutChart: 'DonutChart',
}));

// Mock react-native-circular-progress
jest.mock('react-native-circular-progress', () => 'CircularProgress');

// Mock @react-native-async-storage/async-storage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
  multiGet: jest.fn(),
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
}));

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
