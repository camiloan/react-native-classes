import {SafeAreaView} from 'react-native';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterScreenM3';
import IonIcon from 'react-native-vector-icons/Ionicons';
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props}></IonIcon>,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
