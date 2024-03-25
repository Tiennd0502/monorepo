import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { SCREENS, StackParamList } from '../types';

import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  // TODO: Update it when create hooks auth
  const hasToken = false;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasToken ? SCREENS.MAIN_STACK : SCREENS.AUTH_STACK}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {hasToken ? (
          <Stack.Screen name={SCREENS.MAIN_STACK} component={MainStack} />
        ) : (
          <Stack.Screen name={SCREENS.AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
