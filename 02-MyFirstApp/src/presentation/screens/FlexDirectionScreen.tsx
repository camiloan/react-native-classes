import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
      <View style={[styles.box, styles.box4]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    // alignContent:'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    columnGap: 20,
  },
  box: {
    width: 80,
    height: 80,
  },
  box1: {
    backgroundColor: '#5856d6',
    // top: 100,
  },
  box2: {
    backgroundColor: '#4240a2',
    // alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: '#2e2d71',
    // alignSelf: 'center',
  },
  box4: {
    backgroundColor: '#1d1d45',
  },
});
