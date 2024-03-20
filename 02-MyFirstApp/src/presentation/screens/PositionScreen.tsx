import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}></View>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4d9',
    /* justifyContent: 'center',
    alignItems: 'center', */
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    /* position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0, */
    ...StyleSheet.absoluteFillObject,
  },
});
