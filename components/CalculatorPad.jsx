import React, {useState} from 'react';
import DisplayPad from './Display';
import {StyleSheet, TouchableOpacity, View, Button} from 'react-native';

const Pad = () => {
  const [operator, setOperator] = useState('');
  const [initialValue, setInitialValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  const handleOnPress = value => {
    if (value === '.' && currentValue.includes('.')) return;
    setCurrentValue(currentValue.toString() + value.toString());
    return;
  };

  const handleOperator = operand => {
    if (currentValue === '') return;
    //forcing to give the result with the equals button
    if (initialValue !== '' && operand !== '') return;
    setOperator(operand);
    setInitialValue(currentValue);
    setCurrentValue('');
  };

  const calculation = operand => {
    let calculate;
    const previous = parseFloat(initialValue);
    const current = parseFloat(currentValue);
    if (isNaN(previous) || isNaN(current)) return;
    switch (operand) {
      case '+':
        calculate = previous + current;
        break;
      case '-':
        calculate = previous - current;
        break;
      case '*':
        calculate = previous * current;
        break;
      case '÷':
        calculate = previous / current;
        break;
      default:
        return;
    }

    setCurrentValue(calculate);
    setOperator('');
    setInitialValue('');
  };
  const clear = () => {
    setInitialValue('');
    setCurrentValue('');
    setOperator('');
  };

  const handleDelete = () => {
    if (isNaN(currentValue)) return;
    setCurrentValue(currentValue.substring(0, currentValue.length - 1));
    return;
  };
  const blackTextBtn = '#000000';

  return (
    <View style={styles.gridContainer}>
      <DisplayPad
        operator={operator}
        initial={initialValue}
        current={currentValue}></DisplayPad>
      <View style={styles.deleteColumns}>
        <Button
          color={blackTextBtn}
          title="AC"
          style={styles.numbers}
          onPress={clear}></Button>
        <Button
          color={blackTextBtn}
          title="Del"
          style={styles.numbers}
          onPress={handleDelete}></Button>
      </View>
      <View style={styles.columns}>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="1"
            onPress={() => handleOnPress('1')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="2"
            style={styles.numbers}
            onPress={() => handleOnPress('2')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="3"
            style={styles.numbers}
            onPress={() => handleOnPress('3')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="÷"
            style={styles.operators}
            onPress={() => handleOperator('÷')}></Button>
        </TouchableOpacity>
      </View>
      <View style={styles.columns}>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="4"
            style={styles.numbers}
            onPress={() => handleOnPress('4')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="5"
            style={styles.numbers}
            onPress={() => handleOnPress('5')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="6"
            style={styles.numbers}
            onPress={() => handleOnPress('6')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="*"
            style={styles.numbers}
            onPress={() => handleOperator('*')}></Button>
        </TouchableOpacity>
      </View>
      <View style={styles.columns}>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="7"
            style={styles.numbers}
            onPress={() => handleOnPress('7')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            title="8"
            color={blackTextBtn}
            style={styles.numbers}
            onPress={() => handleOnPress('8')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            title="9"
            color={blackTextBtn}
            style={styles.numbers}
            onPress={() => handleOnPress('9')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="-"
            style={styles.numbers}
            onPress={() => handleOperator('-')}></Button>
        </TouchableOpacity>
      </View>
      <View style={styles.columns}>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="."
            style={styles.numbers}
            onPress={() => handleOnPress('.')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="0"
            style={styles.numbers}
            onPress={() => handleOnPress('0')}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            title="="
            color={blackTextBtn}
            style={styles.numbers}
            onPress={() => calculation(operator)}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numbers}>
          <Button
            color={blackTextBtn}
            title="+"
            style={styles.numbers}
            onPress={() => handleOperator('+')}></Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 60,
    fontSize: 60,
  },
  deleteColumns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 60,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#737373',
    height: 60,
    backgroundColor: 'silver',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 60,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#737373',
    height: 60,
  },
  numbers: {
    height: 60,
    width: '25%',
    margin: -20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#737373',
    backgroundColor: 'gainsboro',
  },
  operators: {
    height: 60,
    width: '25%',
    margin: -20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#737373',
    backgroundColor: '#ffa500',
  },
});

export default Pad;
