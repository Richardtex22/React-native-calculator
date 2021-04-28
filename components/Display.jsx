import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DisplayPad = ({operator = '', initial = '', current = ''}) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayHistory}>{`${initial} ${operator}`}</Text>
      <Text style={styles.displayResult}>{`= ${current}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    display: 'flex',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 100,
  },
  displayHistory: {
    color: 'gray',
    fontSize: 20,
  },
  displayResult: {
    color: 'white',
    fontSize: 30,
  },
});

export default DisplayPad;
