import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useAppColors} from '../theme/hooks';

const {width} = Dimensions.get('window');

interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const colors = useAppColors();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Registering with:', {
      username,
      email,
      password,
      confirmPassword,
      dateOfBirth,
    });
    navigation.navigate('MainTabs');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const generateDateOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 100}, (_, i) => currentYear - i);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const days = Array.from({length: 31}, (_, i) => i + 1);

    return {years, months, days};
  };

  const {years, months, days} = generateDateOptions();

  const formatDate = (day: number, month: string, year: number) => {
    return `${day} ${month} ${year}`;
  };

  const handleDateSelect = (day: number, month: string, year: number) => {
    setDateOfBirth(formatDate(day, month, year));
    setShowDatePicker(false);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
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
              Hello! Register to get started
            </Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, {color: colors.onBackground}]}
                placeholder="Username"
                placeholderTextColor={colors.onSurfaceVariant}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, {color: colors.onBackground}]}
                placeholder="Email"
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
                placeholder="Password"
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

            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, {color: colors.onBackground}]}
                placeholder="Confirm password"
                placeholderTextColor={colors.onSurfaceVariant}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Text style={[styles.eyeText, {color: colors.onSurfaceVariant}]}>
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Date of Birth Picker */}
            <TouchableOpacity
              style={[styles.input, styles.datePickerInput]}
              onPress={() => setShowDatePicker(true)}>
              <Text
                style={[
                  styles.datePickerText,
                  {
                    color: dateOfBirth
                      ? colors.onBackground
                      : colors.onSurfaceVariant,
                  },
                ]}>
                {dateOfBirth || 'Date of Birth'}
              </Text>
              <Text style={[styles.calendarIcon, {color: colors.onSurfaceVariant}]}>
                📅
              </Text>
            </TouchableOpacity>
          </View>

          {/* Register Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.registerButton, {backgroundColor: colors.onBackground}]}
              onPress={handleRegister}>
              <Text style={[styles.registerButtonText, {color: colors.background}]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {/* Social Registration */}
          <View style={styles.socialContainer}>
            <View style={styles.separatorContainer}>
              <View
                style={[
                  styles.separatorLine,
                  {backgroundColor: colors.onSurfaceVariant},
                ]}
              />
              <Text style={[styles.orText, {color: colors.onSurfaceVariant}]}>
                Or Register with
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

          {/* Login Link - Now inside ScrollView */}
          <View style={styles.loginContainer}>
            <Text style={[styles.loginText, {color: colors.onSurfaceVariant}]}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={[styles.loginLink, {color: colors.primary}]}>
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Animated Date Picker Modal */}
      <Modal
        visible={showDatePicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, {backgroundColor: colors.background}]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, {color: colors.onBackground}]}>
                Select Date of Birth
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowDatePicker(false)}>
                <Text style={[styles.closeButtonText, {color: colors.onBackground}]}>
                  ✕
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.datePickerContainer}>
              <View style={styles.datePickerRow}>
                {/* Day Picker */}
                <View style={styles.dateColumn}>
                  <Text style={[styles.dateLabel, {color: colors.onSurfaceVariant}]}>
                    Day
                  </Text>
                  <ScrollView style={styles.dateScrollView}>
                    {days.map((day) => (
                      <TouchableOpacity
                        key={day}
                        style={[
                          styles.dateOption,
                          {borderColor: colors.onSurfaceVariant},
                        ]}
                        onPress={() => {
                          const currentMonth = months[0]; // Default to January
                          const currentYear = years[0]; // Default to current year
                          handleDateSelect(day, currentMonth, currentYear);
                        }}>
                        <Text style={[styles.dateOptionText, {color: colors.onBackground}]}>
                          {day}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                {/* Month Picker */}
                <View style={styles.dateColumn}>
                  <Text style={[styles.dateLabel, {color: colors.onSurfaceVariant}]}>
                    Month
                  </Text>
                  <ScrollView style={styles.dateScrollView}>
                    {months.map((month, index) => (
                      <TouchableOpacity
                        key={month}
                        style={[
                          styles.dateOption,
                          {borderColor: colors.onSurfaceVariant},
                        ]}
                        onPress={() => {
                          const currentDay = 1; // Default to 1st
                          const currentYear = years[0]; // Default to current year
                          handleDateSelect(currentDay, month, currentYear);
                        }}>
                        <Text style={[styles.dateOptionText, {color: colors.onBackground}]}>
                          {month}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                {/* Year Picker */}
                <View style={styles.dateColumn}>
                  <Text style={[styles.dateLabel, {color: colors.onSurfaceVariant}]}>
                    Year
                  </Text>
                  <ScrollView style={styles.dateScrollView}>
                    {years.slice(0, 50).map((year) => (
                      <TouchableOpacity
                        key={year}
                        style={[
                          styles.dateOption,
                          {borderColor: colors.onSurfaceVariant},
                        ]}
                        onPress={() => {
                          const currentDay = 1; // Default to 1st
                          const currentMonth = months[0]; // Default to January
                          handleDateSelect(currentDay, currentMonth, year);
                        }}>
                        <Text style={[styles.dateOptionText, {color: colors.onBackground}]}>
                          {year}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </ScrollView>

            <TouchableOpacity
              style={[styles.confirmButton, {backgroundColor: colors.primary}]}
              onPress={() => setShowDatePicker(false)}>
              <Text style={[styles.confirmButtonText, {color: colors.onPrimary}]}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    flexGrow: 1,
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
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  inputContainer: {
    marginBottom: 32,
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    height: 56,
    borderWidth: 1.5,
    borderColor: '#E8EAED',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#FAFBFC',
  },
  datePickerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 16,
  },
  calendarIcon: {
    fontSize: 18,
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
  buttonContainer: {
    marginBottom: 32,
  },
  registerButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 32,
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
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: 20,
  },
  loginText: {
    fontSize: 14,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: '600',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.9,
    maxHeight: '80%',
    borderRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  datePickerContainer: {
    maxHeight: 300,
  },
  datePickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateColumn: {
    flex: 1,
    marginHorizontal: 5,
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  dateScrollView: {
    maxHeight: 200,
  },
  dateOption: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  dateOptionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  confirmButton: {
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterScreen;
