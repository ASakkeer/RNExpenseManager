import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppStyles} from '../theme/hooks';

const SheetsScreen: React.FC = () => {
  const appStyles = useAppStyles();

  return (
    <View style={[appStyles.container, styles.container]}>
      <Text style={[appStyles.title, styles.title]}>Sheets</Text>
      <Text style={[appStyles.subtitle, styles.subtitle]}>Manage your expense sheets</Text>
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

export default SheetsScreen;
