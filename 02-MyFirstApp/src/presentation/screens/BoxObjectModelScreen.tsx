import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModel</Text> */}
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hola Mundo</Text>
      </View>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    marginHorizontal: 20,
    marginVertical: 50,
    backgroundColor: 'purple',
    padding: 5,
  },
});
