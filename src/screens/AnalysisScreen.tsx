import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AnalysisScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Analysis Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1BE8',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default AnalysisScreen;
