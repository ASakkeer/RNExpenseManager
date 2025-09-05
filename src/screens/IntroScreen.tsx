import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAppStyles, useAppColors} from '../theme/hooks';

interface IntroScreenProps {
  navigation: any;
}

const IntroScreen: React.FC<IntroScreenProps> = ({navigation}) => {
  const appStyles = useAppStyles();
  const colors = useAppColors();

  const handleGetStarted = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <View style={[appStyles.container, styles.container]}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Welcome
        </Text>
        <Text style={[appStyles.subtitle, styles.subtitleText]}>
          Manage your expenses with ease
        </Text>
        
        <Button
          mode="contained"
          onPress={handleGetStarted}
          style={[styles.button, {backgroundColor: colors.primary}]}
          labelStyle={[styles.buttonLabel, {color: colors.onPrimary}]}
          contentStyle={styles.buttonContent}>
          Get Started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 300,
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: 'bold' as const,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
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
    fontWeight: '600' as const,
  },
});

export default IntroScreen;
