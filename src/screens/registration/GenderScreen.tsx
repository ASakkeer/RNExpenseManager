import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useAppColors} from '../../theme/hooks';

const {width, height} = Dimensions.get('window');

interface GenderScreenProps {
  navigation: any;
  route: any;
}

const GenderScreen: React.FC<GenderScreenProps> = ({navigation, route}) => {
  const colors = useAppColors();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const {firstName, lastName} = route.params || {};

  const handleNext = () => {
    if (selectedGender) {
      navigation.navigate('DateOfBirth', {
        firstName,
        lastName,
        gender: selectedGender,
      });
    }
  };

  const isFormValid = selectedGender !== null;

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
            <Text style={[styles.progressText, {color: colors.onSurfaceVariant}]}>
              2/4
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={[styles.title, {color: colors.onBackground}]}>
            What's your gender?
          </Text>

          <View style={styles.genderContainer}>
            {/* Male Option */}
            <TouchableOpacity
              style={[
                styles.genderCard,
                {
                  borderColor: selectedGender === 'male' ? colors.primary : '#E5E7EB',
                  backgroundColor: selectedGender === 'male' ? 'rgba(147, 51, 234, 0.05)' : '#FFFFFF',
                },
              ]}
              onPress={() => setSelectedGender('male')}>
              <Text
                style={[
                  styles.genderSymbol,
                  {
                    color: selectedGender === 'male' ? colors.primary : '#9CA3AF',
                  },
                ]}>
                ♂
              </Text>
              <Text
                style={[
                  styles.genderLabel,
                  {
                    color: selectedGender === 'male' ? colors.primary : colors.onSurfaceVariant,
                  },
                ]}>
                Male
              </Text>
            </TouchableOpacity>

            {/* Female Option */}
            <TouchableOpacity
              style={[
                styles.genderCard,
                {
                  borderColor: selectedGender === 'female' ? colors.primary : '#E5E7EB',
                  backgroundColor: selectedGender === 'female' ? 'rgba(147, 51, 234, 0.05)' : '#FFFFFF',
                },
              ]}
              onPress={() => setSelectedGender('female')}>
              <Text
                style={[
                  styles.genderSymbol,
                  {
                    color: selectedGender === 'female' ? colors.primary : '#9CA3AF',
                  },
                ]}>
                ♀
              </Text>
              <Text
                style={[
                  styles.genderLabel,
                  {
                    color: selectedGender === 'female' ? colors.primary : colors.onSurfaceVariant,
                  },
                ]}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Button */}
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={[
              styles.bottomButton,
              {
                backgroundColor: isFormValid ? colors.primary : colors.onSurfaceVariant,
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
  genderContainer: {
    gap: 20,
  },
  genderCard: {
    height: 120,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderSymbol: {
    fontSize: 48,
    marginBottom: 8,
  },
  genderLabel: {
    fontSize: 18,
    fontWeight: '600',
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

export default GenderScreen;
