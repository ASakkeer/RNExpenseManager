import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useAppColors} from '../theme/hooks';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const colors = useAppColors();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('MainTabs');
  };

  const handleRegister = () => {
    // Navigate to register screen when implemented
    console.log('Navigate to register');
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen when implemented
    console.log('Navigate to forgot password');
  };

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

        {/* Welcome Message */}
        <View style={styles.welcomeContainer}>
          <Text style={[styles.welcomeTitle, {color: colors.onBackground}]}>
            Welcome back! Glad to see you, Again!
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, {color: colors.onBackground}]}
              placeholder="Enter your email"
              placeholderTextColor={colors.onSurfaceVariant}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, {color: colors.onBackground}]}
              placeholder="Enter your password"
              placeholderTextColor={colors.onSurfaceVariant}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}>
              <Text style={[styles.eyeText, {color: colors.onSurfaceVariant}]}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={[styles.forgotPassword, {color: colors.primary}]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.loginButton, {backgroundColor: colors.onBackground}]}
            onPress={handleLogin}>
            <Text style={[styles.loginButtonText, {color: colors.background}]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Social Login */}
        <View style={styles.socialContainer}>
          <View style={styles.separatorContainer}>
            <View
              style={[
                styles.separatorLine,
                {backgroundColor: colors.onSurfaceVariant},
              ]}
            />
            <Text style={[styles.orText, {color: colors.onSurfaceVariant}]}>
              Or Login with
            </Text>
            <View
              style={[
                styles.separatorLine,
                {backgroundColor: colors.onSurfaceVariant},
              ]}
            />
          </View>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIcon}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIcon}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIcon}>🍎</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Register Link - Fixed to bottom */}
      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.registerContainer}>
          <Text style={[styles.registerText, {color: colors.onSurfaceVariant}]}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={[styles.registerLink, {color: colors.primary}]}>
              Register Now
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
  bottomSafeArea: {
    paddingBottom: 20,
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
  welcomeContainer: {
    marginBottom: 48,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  inputContainer: {
    marginBottom: 40,
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    height: 56,
    borderWidth: 1.5,
    borderColor: '#E8EAED',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#FAFBFC',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 2,
    // elevation: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 16,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeText: {
    fontSize: 18,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
    marginTop: 12,
  },
  buttonContainer: {
    marginBottom: 40,
  },
  loginButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    opacity: 0.3,
  },
  orText: {
    fontSize: 14,
    marginHorizontal: 16,
    fontWeight: '500',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E8EAED',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 2,
    // elevation: 1,
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  registerText: {
    fontSize: 14,
  },
  registerLink: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;
