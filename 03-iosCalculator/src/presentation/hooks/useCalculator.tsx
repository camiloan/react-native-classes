import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '×',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || numberString.startsWith('-0')) {
      //Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      // Evitar 0000000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    return setNumber(number + numberString);
  };

  const clean = () => {
    setNumber('0');
    setPrevNumber('');
    lastOperation.current = undefined;
    setFormula('');
  };
  const deleteOperation = () => {
    if (number.includes('-') && number.length === 2) {
      return setNumber('0');
    }
    if (number.length > 1) {
      return setNumber(number.slice(0, -1));
    }
    return setNumber('0');
  };
  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;

      case Operator.divide:
        return num1 / num2;

      case Operator.multiply:
        return num1 * num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    //Properties
    number,
    prevNumber,
    formula,
    //Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  };
};
