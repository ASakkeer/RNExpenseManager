# Custom Animated Bottom Tab Navigator Setup

This guide explains how to set up the custom animated bottom tab navigator for your React Native expense manager app.

## Features

✅ **Custom Tab Bar Design**
- Curved top-left and top-right corners for modern look
- White background with shadow/elevation for depth
- Clean, minimal design without floating action buttons

✅ **Smart Tab Behavior**
- **Active Tab**: Shows only the icon (larger size)
- **Inactive Tab**: Shows smaller icon + text label underneath
- Smooth animations between states

✅ **Smooth Animations**
- Icon scaling (small → large) using React Native Reanimated
- Text label fade in/out and scaling
- 250ms duration for polished feel

✅ **Material Design Icons**
- Home → `home`
- Sheets → `file-document`
- Transaction → `credit-card`
- Profile → `account`

## Installation

All required dependencies are already installed in your project:

```bash
# Core navigation
npm install @react-navigation/native @react-navigation/bottom-tabs

# Animation library
npm install react-native-reanimated

# Vector icons
npm install react-native-vector-icons

# Safe area handling
npm install react-native-safe-area-context

# Gesture handling (required for Reanimated)
npm install react-native-gesture-handler

# Screen handling
npm install react-native-screens
```

## Configuration

### 1. Babel Configuration ✅
Your `babel.config.js` is already properly configured:

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // ✅ Already configured
  ],
};
```

### 2. iOS Configuration
For iOS, you need to add the vector icons to your project:

1. Open `ios/RNExpenseManager.xcworkspace` in Xcode
2. Right-click on the project and select "Add Files to 'RNExpenseManager'"
3. Navigate to `node_modules/react-native-vector-icons/Fonts`
4. Select all `.ttf` files and add them
5. Make sure "Add to target" is checked for your app target

### 3. Android Configuration
For Android, the vector icons should work automatically as they're already configured in your `android/app/build.gradle`.

## File Structure

```
src/
├── components/
│   └── CustomTabBar.tsx          # Custom tab bar component
├── screens/
│   ├── HomeScreen.tsx            # Home screen
│   ├── SheetsScreen.tsx          # Sheets screen
│   ├── TransactionScreen.tsx     # Transaction screen
│   └── ProfileScreen.tsx         # Profile screen
└── navigation/
    └── AppNavigator.tsx          # Updated with custom tab bar
```

## Usage

The custom tab bar is automatically integrated into your app through the `AppNavigator`. No additional setup is required.

### Running the App

```bash
# iOS
npm run ios

# Android
npm run android
```

## Customization

### Changing Icons
Edit the `getIconName` function in `CustomTabBar.tsx`:

```typescript
const getIconName = (routeName: string) => {
  switch (routeName) {
    case 'Home':
      return 'home';              // Change this
    case 'Sheets':
      return 'file-document';     // Change this
    case 'Transaction':
      return 'credit-card';       // Change this
    case 'Profile':
      return 'account';           // Change this
    default:
      return 'circle';
  }
};
```

### Changing Colors
Edit the color values in `CustomTabBar.tsx`:

```typescript
// Active tab color
color={isFocused ? '#007AFF' : '#8E8E93'}

// Background color
backgroundColor: '#FFFFFF'

// Shadow color
shadowColor: '#000'
```

### Changing Animation Duration
Edit the duration values in `CustomTabBar.tsx`:

```typescript
// Icon scaling duration
scale.value = withTiming(isFocused ? 1.2 : 1, { duration: 250 });

// Label animation duration
labelOpacity.value = withTiming(isFocused ? 0 : 1, { duration: 200 });
```

## Troubleshooting

### Vector Icons Not Showing
1. **iOS**: Make sure you've added the font files to Xcode
2. **Android**: Check that the fonts are properly linked in `android/app/build.gradle`
3. **Both**: Try cleaning and rebuilding:
   ```bash
   # iOS
   cd ios && pod install && cd ..
   npx react-native run-ios

   # Android
   npx react-native run-android
   ```

### Animations Not Working
1. Make sure `react-native-reanimated/plugin` is in your `babel.config.js`
2. Restart the Metro bundler: `npx react-native start --reset-cache`
3. Rebuild the app

### TypeScript Errors
The `@ts-ignore` comment is used for the vector icons import due to TypeScript compatibility issues. This is safe and won't affect functionality.

## Performance Notes

- Animations use `useSharedValue` and `withTiming` for optimal performance
- The tab bar only re-renders when the active tab changes
- Icons are properly memoized to prevent unnecessary re-renders

## Next Steps

1. Replace the placeholder screen content with your actual app screens
2. Add navigation logic between screens
3. Customize the styling to match your app's design system
4. Add any additional tab bar features as needed

The custom tab bar is now ready to use! 🎉
