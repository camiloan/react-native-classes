import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black', marginBottom: 10}}>Settings Screen</Text>
      <PrimaryButton
        label="Regresar"
        onPress={() => navigator.goBack()}></PrimaryButton>
      <PrimaryButton
        label="Regresar al home"
        onPress={() =>
          navigator.dispatch(StackActions.popToTop())
        }></PrimaryButton>
    </View>
  );
};
