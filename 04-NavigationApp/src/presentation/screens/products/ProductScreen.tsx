import {
  type RouteProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {type RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';
import {useEffect} from 'react';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: params.name});
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black'}}>Product Screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          color: 'black',
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
