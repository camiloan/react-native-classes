import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Camilo Andres'})}>
        <Text style={{color: 'gray'}}>Change Name</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'camilo@gmail.com'})}>
        <Text style={{color: 'gray'}}>Change Email</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Andy Bernald', 'andy@gmail.com')}>
        <Text style={{color: 'gray'}}>Return to Andy</Text>
      </Pressable>
    </View>
  );
};
