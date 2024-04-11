import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { SCREENS, StackParamList } from '../types';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { authStore } from '@monorepo/stores';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  const [authKey] = authStore((state) => [state.authKey]);

  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}
    >
      <Stack.Navigator
        initialRouteName={SCREENS.MAIN_STACK}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {authKey?.auth_key ? (
          <Stack.Screen name={SCREENS.MAIN_STACK} component={MainStack} />
        ) : (
          <Stack.Screen name={SCREENS.AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
