import React, {useRef, useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useAppColors} from '../theme/hooks';

const {width} = Dimensions.get('window');

interface IntroSliderScreenProps {
  navigation: any;
}

const IntroSliderScreen: React.FC<IntroSliderScreenProps> = ({navigation}) => {
  const colors = useAppColors();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo(
    () => [
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
    ],
    [],
  );

  const animatedValues = useRef(
    slides.map(() => new Animated.Value(0)),
  ).current;

  // Custom dot component with smooth transitions
  const renderPagination = (currentIndex: number) => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          const animatedValue = animatedValues[index];

          const dotWidth = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [8, 24], // Expands from 8 to 24 when active
          });

          const dotOpacity = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 1], // Fades when inactive
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.customDot,
                {
                  width: dotWidth,
                  opacity: dotOpacity,
                  backgroundColor: isActive
                    ? colors.primary
                    : colors.onSurfaceVariant,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  // Animate dots when activeIndex changes
  useEffect(() => {
    slides.forEach((_, index) => {
      const isActive = index === activeIndex;
      const animatedValue = animatedValues[index];

      Animated.timing(animatedValue, {
        toValue: isActive ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [activeIndex, animatedValues, slides]);

  const renderSlide = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={[styles.slide, {backgroundColor: colors.background}]}>
        {/* Image section - first half */}
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>

        {/* Content section - second half */}
        <View style={styles.contentContainer}>
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
                <Text
                  style={[styles.getStartedText, {color: colors.onPrimary}]}>
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
      renderPagination={renderPagination}
      onSlideChange={(index: number) => setActiveIndex(index)}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: width * 0.8,
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  customDot: {
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
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IntroSliderScreen;
