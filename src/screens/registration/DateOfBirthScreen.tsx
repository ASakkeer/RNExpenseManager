import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useAppColors} from '../../theme/hooks';

const {width} = Dimensions.get('window');

interface DateOfBirthScreenProps {
  navigation: any;
  route: any;
}

const DateOfBirthScreen: React.FC<DateOfBirthScreenProps> = ({
  navigation,
  route,
}) => {
  const colors = useAppColors();
  const {firstName, lastName, gender} = route.params || {};

  const [selectedDate, setSelectedDate] = useState<Date>(new Date(1992, 5, 17)); // June 17, 1992

  const handleNext = () => {
    navigation.navigate('ProfilePhoto', {
      firstName,
      lastName,
      gender,
      dateOfBirth: selectedDate,
    });
  };

  const isFormValid = selectedDate !== null;

  const formatSelectedDate = () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthNames[selectedDate.getMonth()];
    const day = selectedDate.getDate();
    const year = selectedDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };

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
              3/4
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={[styles.title, {color: colors.onBackground}]}>
            What's your date of birth?
          </Text>

          <View style={styles.datePickerContainer}>
            <View style={styles.datePickerWrapper}>
              <DatePicker
                date={selectedDate}
                onDateChange={setSelectedDate}
                mode="date"
                locale="en"
                theme="light"
                style={styles.datePicker}
                maximumDate={new Date()}
                minimumDate={new Date(1900, 0, 1)}
              />
            </View>
          </View>

          {/* Selected Date Display */}
          <View style={styles.selectedDateContainer}>
            <Text
              style={[
                styles.selectedDateLabel,
                {color: colors.onSurfaceVariant},
              ]}>
              Your birthday is
            </Text>
            <Text style={[styles.selectedDateText, {color: colors.primary}]}>
              {formatSelectedDate()}
            </Text>
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
  datePickerContainer: {
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
  datePickerWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  datePicker: {
    width: width * 0.8,
    height: 200,
    backgroundColor: '#FFFFFF',
  },
  selectedDateContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedDateLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  selectedDateText: {
    fontSize: 20,
    fontWeight: 'bold',
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

export default DateOfBirthScreen;
