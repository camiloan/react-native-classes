import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';

interface PrimaryButtonProps {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({onPress, label}: PrimaryButtonProps) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
