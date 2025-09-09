import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useAppColors} from '../../theme/hooks';

const {width, height} = Dimensions.get('window');

interface DateOfBirthScreenProps {
  navigation: any;
  route: any;
}

const DateOfBirthScreen: React.FC<DateOfBirthScreenProps> = ({navigation, route}) => {
  const colors = useAppColors();
  const {firstName, lastName, gender} = route.params || {};
  
  const [selectedMonth, setSelectedMonth] = useState<string>('Jun');
  const [selectedDay, setSelectedDay] = useState<string>('17');
  const [selectedYear, setSelectedYear] = useState<string>('1992');

  const monthScrollRef = useRef<ScrollView>(null);
  const dayScrollRef = useRef<ScrollView>(null);
  const yearScrollRef = useRef<ScrollView>(null);

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const days = Array.from({length: 31}, (_, i) => (i + 1).toString());
  const years = Array.from({length: 100}, (_, i) => (2024 - i).toString());


  const handleNext = () => {
    navigation.navigate('ProfilePhoto', {
      firstName,
      lastName,
      gender,
      dateOfBirth: {
        month: selectedMonth,
        day: selectedDay,
        year: selectedYear,
      },
    });
  };

  const isFormValid = selectedMonth && selectedDay && selectedYear;

  const formatSelectedDate = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthIndex = months.indexOf(selectedMonth);
    const fullMonthName = monthNames[monthIndex];
    return `${fullMonthName} ${selectedDay}, ${selectedYear}`;
  };


  const scrollToCenter = (scrollRef: React.RefObject<ScrollView>, index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        y: index * 48, // 48px per item height (44px + 4px margin)
        animated: true,
      });
    }
  };

  const handleMonthSelect = (month: string) => {
    const index = months.indexOf(month);
    setSelectedMonth(month);
    scrollToCenter(monthScrollRef, index);
  };

  const handleDaySelect = (day: string) => {
    const index = days.indexOf(day);
    setSelectedDay(day);
    scrollToCenter(dayScrollRef, index);
  };

  const handleYearSelect = (year: string) => {
    const index = years.indexOf(year);
    setSelectedYear(year);
    scrollToCenter(yearScrollRef, index);
  };

  const renderPickerColumn = (
    data: string[],
    selectedValue: string,
    onSelect: (value: string) => void,
    scrollRef: React.RefObject<ScrollView>
  ) => {
    return (
      <ScrollView
        ref={scrollRef}
        style={styles.pickerColumn}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pickerContent}>
        {data.map((item, index) => {
          const isSelected = selectedValue === item;

          return (
            <View key={item} style={styles.pickerItemContainer}>
              <TouchableOpacity
                style={[
                  styles.pickerItem,
                  {
                    backgroundColor: isSelected ? colors.primary : '#F3F4F6',
                    borderColor: isSelected ? colors.primary : '#E5E7EB',
                    borderWidth: isSelected ? 0 : 1,
                  },
                ]}
                onPress={() => onSelect(item)}>
                <Text
                  style={[
                    styles.pickerItemText,
                    {
                      color: isSelected ? colors.onPrimary : colors.onBackground,
                      fontWeight: isSelected ? '600' : '400',
                    },
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
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
            <Text style={[styles.progressText, {color: colors.onSurfaceVariant}]}>
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
            {/* Month Column */}
            <View style={styles.columnContainer}>
              <Text style={[styles.columnLabel, {color: colors.onSurfaceVariant}]}>
                Month
              </Text>
              {renderPickerColumn(months, selectedMonth, handleMonthSelect, monthScrollRef)}
            </View>

            {/* Day Column */}
            <View style={styles.columnContainer}>
              <Text style={[styles.columnLabel, {color: colors.onSurfaceVariant}]}>
                Day
              </Text>
              {renderPickerColumn(days, selectedDay, handleDaySelect, dayScrollRef)}
            </View>

            {/* Year Column */}
            <View style={styles.columnContainer}>
              <Text style={[styles.columnLabel, {color: colors.onSurfaceVariant}]}>
                Year
              </Text>
              {renderPickerColumn(years, selectedYear, handleYearSelect, yearScrollRef)}
            </View>
          </View>

          {/* Selected Date Display */}
          <View style={styles.selectedDateContainer}>
            <Text style={[styles.selectedDateLabel, {color: colors.onSurfaceVariant}]}>
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
    paddingHorizontal: 24,
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
    borderRadius: 12,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  columnContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  columnLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  pickerColumn: {
    height: 180,
    width: '100%',
  },
  pickerContent: {
    paddingVertical: 10,
  },
  pickerItemContainer: {
    marginVertical: 2,
  },
  pickerItem: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 50,
    minHeight: 44,
    justifyContent: 'center',
  },
  pickerItemText: {
    fontSize: 16,
    fontWeight: '400',
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
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  bottomButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bottomButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DateOfBirthScreen;