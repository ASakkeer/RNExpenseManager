import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {useAppColors} from '../../theme/hooks';

const {width, height} = Dimensions.get('window');

interface ProfilePhotoScreenProps {
  navigation: any;
  route: any;
}

const ProfilePhotoScreen: React.FC<ProfilePhotoScreenProps> = ({navigation, route}) => {
  const colors = useAppColors();
  const {firstName, lastName, gender, dateOfBirth} = route.params || {};
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleAddPhoto = () => {
    // For now, we'll just show an alert. In a real app, you'd integrate with image picker
    Alert.alert(
      'Add Photo',
      'Photo upload functionality would be implemented here with react-native-image-picker or similar library.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Simulate photo selection
            setProfileImage('https://via.placeholder.com/200x200/9333EA/FFFFFF?text=Photo');
          },
        },
      ]
    );
  };

  const handleNext = () => {
    // Navigate to main app or next step
    navigation.navigate('MainTabs');
  };

  const handleSkip = () => {
    // Skip photo and go to main app
    navigation.navigate('MainTabs');
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
              4/4
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={[styles.title, {color: colors.onBackground}]}>
            Profile Photo
          </Text>

          <View style={styles.photoContainer}>
            <View style={[styles.photoPlaceholder, {borderColor: colors.onSurfaceVariant}]}>
              {profileImage ? (
                <Image source={{uri: profileImage}} style={styles.profileImage} />
              ) : (
                <View style={styles.placeholderIcon}>
                  <Text style={[styles.placeholderText, {color: colors.onSurfaceVariant}]}>
                    👤
                  </Text>
                </View>
              )}
            </View>

            <TouchableOpacity
              style={[styles.addPhotoButton, {backgroundColor: colors.primary}]}
              onPress={handleAddPhoto}>
              <Text style={[styles.addPhotoText, {color: colors.onPrimary}]}>
                Add Photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity
            style={[styles.skipButton, {borderColor: colors.onSurfaceVariant}]}
            onPress={handleSkip}>
            <Text style={[styles.skipText, {color: colors.onSurfaceVariant}]}>
              Skip
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.nextButton, {backgroundColor: colors.primary}]}
            onPress={handleNext}>
            <Text style={[styles.nextButtonText, {color: colors.onPrimary}]}>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
    lineHeight: 40,
  },
  photoContainer: {
    alignItems: 'center',
  },
  photoPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#F9FAFB',
  },
  placeholderIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 60,
  },
  profileImage: {
    width: 196,
    height: 196,
    borderRadius: 98,
  },
  addPhotoButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  addPhotoText: {
    fontSize: 18,
    fontWeight: '600',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 10,
  },
  skipButton: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 18,
    fontWeight: '600',
  },
  nextButton: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfilePhotoScreen;
