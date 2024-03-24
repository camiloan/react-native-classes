import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {StackNavigator} from './StackNavigator';
import {globalColors} from '../theme/theme';
import {View, useWindowDimensions} from 'react-native';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import {IonIcon} from '../components/shared/IonIcon';
const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: globalColors.background,
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen
        name="Tabs"
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="bonfire-outline" color={color}></IonIcon>
          ),
        }}
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="person-circle-outline" color={color}></IonIcon>
          ),
        }}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
