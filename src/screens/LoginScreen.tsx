import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useAppColors, useAppStyles} from '../theme/hooks';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const colors = useAppColors();
  const appStyles = useAppStyles();

  const handleLogin = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <View style={[appStyles.container, styles.container]}>
      <View style={styles.content}>
        <Text style={[styles.title, {color: colors.onBackground}]}>
          Login Screen
        </Text>
        <Text style={[styles.subtitle, {color: colors.onSurfaceVariant}]}>
          Welcome back! Please sign in to continue.
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleLogin}
          style={[styles.button, {backgroundColor: colors.primary}]}
          labelStyle={[styles.buttonLabel, {color: colors.onPrimary}]}
          contentStyle={styles.buttonContent}>
          Sign In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  button: {
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonContent: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
