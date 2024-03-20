import {SafeAreaView} from 'react-native';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
// import {CounterM3Screen} from './src/presentation/screens/CounterScreenM3';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
// import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
// import {PositionScreen} from './src/presentation/screens/PositionScreen';
// import {FlexScreen} from './src/presentation/screens/FlexScreen';
// import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';
import {HomeworkScreen} from './src/presentation/screens/HomeworkScreen';
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props}></IonIcon>,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
