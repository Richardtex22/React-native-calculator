/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [result, setResult] = useState('0');
  const [value, setValue] = useState('');

  const nums = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '='],
  ];
  const ops = ['/', '*', '-', '+'];

  const getValue = e => {
    if (e === 'del') {
      setValue('');
      setResult('');
    } else if (e === '=') {
      getResult(value);
    } else {
      setValue(value + e);
    }
  };

  const getResult = val => {
    const res = eval(val || '') + '';
    if (typeof val === 'undefined') {
      setResult('error');
      setValue('');
    } else {
      setResult(res);
      setValue(res);
    }
    return result;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultButton}>{value}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultButton}>{`= ${result}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteSection}
        onPress={() => getValue('del')}>
        <Text style={styles.deleteButton}>C</Text>
      </TouchableOpacity>
      <View style={styles.buttonsSection}>
        <View style={styles.numbersContainer}>
          {nums.map((num, index) =>
            num.map((_, i) => (
              <TouchableOpacity
                key={`id-${i}`}
                style={styles.numbers}
                onPress={() => getValue(nums[index][i])}>
                <Text style={styles.num}>{nums[index][i]}</Text>
              </TouchableOpacity>
            )),
          )}
        </View>
        <View style={styles.operators}>
          {ops.map(op => {
            return (
              <TouchableOpacity
                key={`id-${op}`}
                style={styles.opsContainer}
                onPress={() => getValue(op)}>
                <Text style={styles.ops}>{op}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resultButton: {
    color: 'white',
    fontSize: 50,
  },
  deleteSection: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    color: 'white',
    fontSize: 40,
  },
  buttonsSection: {
    backgroundColor: 'gainsboro',
    flex: 6,
    flexDirection: 'row',
  },
  numbersContainer: {
    flexDirection: 'row',
    flex: 4,
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  numbers: {
    width: '32%',
    height: '24.5%',
    margin: 2,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    color: 'white',
    fontSize: 50,
    height: 60,
  },
  operators: {
    backgroundColor: 'orange',
    flex: 1,
  },
  opsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 138,
  },
  ops: {
    fontSize: 40,
    color: 'white',
    backgroundColor: 'orange',
    padding: 25,
  },
});

export default App;
