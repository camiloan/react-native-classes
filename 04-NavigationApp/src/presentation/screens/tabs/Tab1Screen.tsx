import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import {IonIcon} from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <IonIcon name="rocket-outline" color={'black'} size={100}></IonIcon>
    </View>
  );
};
