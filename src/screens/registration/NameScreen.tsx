import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useAppColors} from '../../theme/hooks';

interface NameScreenProps {
  navigation: any;
}

const NameScreen: React.FC<NameScreenProps> = ({navigation}) => {
  const colors = useAppColors();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    if (firstName.trim() && lastName.trim()) {
      navigation.navigate('Gender', {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      });
    }
  };

  const isFormValid = firstName.trim().length > 0 && lastName.trim().length > 0;

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.backArrow, {color: colors.onBackground}]}>
              ‹
            </Text>
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <Text
              style={[styles.progressText, {color: colors.onSurfaceVariant}]}>
              1/4
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={[styles.title, {color: colors.onBackground}]}>
            What's your name?
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, {color: colors.onBackground}]}
                placeholder="First Name"
                placeholderTextColor={colors.onSurfaceVariant}
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, {color: colors.onBackground}]}
                placeholder="Last Name"
                placeholderTextColor={colors.onSurfaceVariant}
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
              />
            </View>
          </View>
        </View>

        {/* Bottom Button */}
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={[
              styles.bottomButton,
              {
                backgroundColor: isFormValid
                  ? colors.primary
                  : colors.onSurfaceVariant,
              },
            ]}
            onPress={handleNext}
            disabled={!isFormValid}>
            <Text style={[styles.bottomButtonText, {color: colors.onPrimary}]}>
              Next
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
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 60,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
    lineHeight: 40,
  },
  inputContainer: {
    gap: 20,
  },
  inputWrapper: {
    marginBottom: 8,
  },
  input: {
    height: 60,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  bottomButtonContainer: {
    paddingVertical: 15,
  },
  bottomButton: {
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default NameScreen;
