import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppStyles} from '../theme/hooks';

const ProfileScreen: React.FC = () => {
  const appStyles = useAppStyles();

  return (
    <View style={[appStyles.container, styles.container]}>
      <Text style={[appStyles.title, styles.title]}>Profile</Text>
      <Text style={[appStyles.subtitle, styles.subtitle]}>Manage your profile settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
  },
});

export default ProfileScreen;
