import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS, StackParamList } from '../types';

import { OrderScreen, ProfileScreen } from '../screens';

const Stack = createNativeStackNavigator<StackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.PROFILE}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={SCREENS.ORDER} component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
