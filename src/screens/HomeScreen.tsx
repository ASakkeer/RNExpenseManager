import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../store/hooks';
import {useAppStyles} from '../theme/hooks';

const HomeScreen: React.FC = () => {
  const {initialized, theme} = useAppSelector(state => state.app);
  const appStyles = useAppStyles();

  return (
    <View style={[appStyles.container, styles.container]}>
      <Text style={[appStyles.title, styles.title]}>Home</Text>
      <Text style={[appStyles.subtitle, styles.subtitle]}>
        Welcome to your expense manager
      </Text>
      <Text style={[appStyles.caption, styles.debug]}>
        Store Status: {initialized ? 'Initialized' : 'Not Initialized'} | Theme:{' '}
        {theme}
      </Text>
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
    marginBottom: 20,
  },
  debug: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default HomeScreen;
