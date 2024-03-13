import {Platform, Pressable, StyleSheet, Text} from 'react-native';
/*
export const PrimaryButton = () => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => 
        setCount(count + 1);
      }
      onLongPress={() => setCount(0)}>
      <Text style={{color: Platform.OS === 'android' ? 'white' : '#4746AB'}}>
        Increase
      </Text>
    </Pressable>
  );
};
 */

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}
export const PrimaryButton = ({label = '', onPress, onLongPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={{color: Platform.OS === 'android' ? 'white' : '#4746AB'}}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
