import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { SCREENS, StackParamList } from '../types';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { userStore } from '@monorepo/stores';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  const [user] = userStore((state) => [state.user]);
  const { id = '' } = user || {};

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={id ? SCREENS.MAIN_STACK : SCREENS.AUTH_STACK}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {id ? (
          <Stack.Screen name={SCREENS.MAIN_STACK} component={MainStack} />
        ) : (
          <Stack.Screen name={SCREENS.AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
