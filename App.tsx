/**
 * React Native Expense Manager App
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';
import {store, persistor} from './src/store';
import AppNavigator from './src/navigation/AppNavigator';
import {lightTheme, darkTheme} from './src/theme';

function App(): React.JSX.Element {
  // Always use light theme to ensure white backgrounds
  const theme = lightTheme;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={theme.colors.background}
          />
          <AppNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
