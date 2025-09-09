import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useAppColors} from '../theme/hooks';

const {width} = Dimensions.get('window');

interface IntroSliderScreenProps {
  navigation: any;
}

const IntroSliderScreen: React.FC<IntroSliderScreenProps> = ({navigation}) => {
  const colors = useAppColors();

  const slides = [
    {
      key: 'slide1',
      title: 'Ready to Track!',
      text: 'Start managing your expenses with ease. Track every transaction and take control of your finances.',
      image: require('../../assets/images/onboarding/slide1.png'),
    },
    {
      key: 'slide2',
      title: 'Smart Categories',
      text: 'Organize your expenses automatically. Get insights into your spending patterns and budget better.',
      image: require('../../assets/images/onboarding/slide2.png'),
    },
    {
      key: 'slide3',
      title: 'Smart Analytics',
      text: 'Generate detailed reports and visual charts to understand your financial habits and make better decisions.',
      image: require('../../assets/images/onboarding/slide3.png'),
    },
  ];

  const renderSlide = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={[styles.slide, {backgroundColor: colors.background}]}>
        <Image source={item.image} style={styles.image} />
        <Text style={[styles.title, {color: colors.onBackground}]}>
          {item.title}
        </Text>
        <Text style={[styles.text, {color: colors.onSurfaceVariant}]}>
          {item.text}
        </Text>

        {/* Show button only on last slide */}
        {index === 2 && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.getStartedButton,
                {backgroundColor: colors.primary},
              ]}
              onPress={onDone}>
              <Text style={[styles.getStartedText, {color: colors.onPrimary}]}>
                Okay, Let's Get Started!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[styles.loginLink, {color: colors.onSurfaceVariant}]}>
                I already have an account
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
      showDoneButton={false}
      activeDotStyle={styles.activeDot}
      dotStyle={styles.navDot}
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
    width: width * 0.7,
    height: width * 0.5,
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
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  getStartedButton: {
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginBottom: 20,
    minWidth: width * 0.8,
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 16,
    fontWeight: '600',
  },
  loginLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
    backgroundColor: '#007BFF',
  },
  navDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#F4F4F4',
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
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IntroSliderScreen;
