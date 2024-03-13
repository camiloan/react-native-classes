import {useState} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';
export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      {/* <Icon name="accessibility-outline" size={25} /> */}
      <FAB
        style={globalStyles.fab}
        icon="add-outline"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};
