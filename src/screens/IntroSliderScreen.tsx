import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useAppColors, useAppStyles} from '../theme/hooks';

interface IntroSliderScreenProps {
  navigation: any;
}

const IntroSliderScreen: React.FC<IntroSliderScreenProps> = ({navigation}) => {
  const colors = useAppColors();
  const appStyles = useAppStyles();

  const slides = [
    {
      key: 'slide1',
      title: 'Welcome to Expense Manager',
      text: 'Track your expenses and manage your finances with ease. Get started with our intuitive interface.',
      image: {
        uri: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      },
    },
    {
      key: 'slide2',
      title: 'Smart Categorization',
      text: 'Automatically categorize your expenses and get insights into your spending patterns.',
      image: {
        uri: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      },
    },
    {
      key: 'slide3',
      title: 'Detailed Reports',
      text: 'Generate comprehensive reports and charts to understand your financial habits better.',
      image: {
        uri: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      },
    },
  ];

  const renderSlide = ({item}: {item: any}) => {
    return (
      <View style={[styles.slide, {backgroundColor: colors.background}]}>
        <Image source={item.image} style={styles.image} />
        <Text style={[styles.title, {color: colors.onBackground}]}>
          {item.title}
        </Text>
        <Text style={[styles.text, {color: colors.onSurfaceVariant}]}>
          {item.text}
        </Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate('Login');
  };

  const onSkip = () => {
    navigation.navigate('Login');
  };

  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={onDone}
      onSkip={onSkip}
      showSkipButton={true}
      showPrevButton={true}
      showNextButton={true}
      activeDotStyle={[styles.activeDot, {backgroundColor: colors.primary}]}
      dotStyle={[styles.dot, {backgroundColor: colors.outline}]}
      skipLabelStyle={[styles.buttonLabel, {color: colors.onSurfaceVariant}]}
      nextLabelStyle={[styles.buttonLabel, {color: colors.primary}]}
      prevLabelStyle={[styles.buttonLabel, {color: colors.onSurfaceVariant}]}
      doneLabelStyle={[styles.buttonLabel, {color: colors.primary}]}
      buttonStyle={[styles.button, {backgroundColor: colors.surface}]}
      skipButtonStyle={[styles.skipButton, {backgroundColor: colors.surface}]}
      doneButtonStyle={[styles.doneButton, {backgroundColor: colors.primary}]}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 40,
    borderRadius: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  skipButton: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  doneButton: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IntroSliderScreen;
