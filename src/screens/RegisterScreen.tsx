import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useAppColors} from '../theme/hooks';

interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const colors = useAppColors();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={[styles.backArrow, {color: colors.onBackground}]}>
            ‹
          </Text>
        </TouchableOpacity>

        {/* Content */}
        <View style={styles.content}>
          <Text style={[styles.title, {color: colors.onBackground}]}>
            Get Started
          </Text>
          <Text style={[styles.subtitle, {color: colors.onSurfaceVariant}]}>
            Create your account to start managing your expenses
          </Text>
          
          <TouchableOpacity
            style={[styles.startButton, {backgroundColor: colors.primary}]}
            onPress={() => navigation.navigate('Name')}>
            <Text style={[styles.startButtonText, {color: colors.onPrimary}]}>
              Start Registration
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  backButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderRadius: 24,
    backgroundColor: '#F8F9FA',
  },
  backArrow: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  startButton: {
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default RegisterScreen;