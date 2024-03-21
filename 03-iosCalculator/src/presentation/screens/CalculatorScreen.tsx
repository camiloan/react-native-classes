import {Pressable, Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {formula}
        </Text>
        {formula === prevNumber ? (
          <Text style={globalStyles.subResult}></Text>
        ) : (
          <Text style={globalStyles.subResult}>
            {prevNumber}
            {/* {prevNumber === '0' ? '' : prevNumber} */}
          </Text>
        )}
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => clean()}
          label="C"
          color={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          label="+/-"
          color={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={() => deleteOperation()}
          label="del"
          color={colors.lightGray}
          blackText={true}
        />
        <CalculatorButton
          onPress={divideOperation}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={multiplyOperation}
          label="×"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton
          onPress={subtractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize={true}
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
