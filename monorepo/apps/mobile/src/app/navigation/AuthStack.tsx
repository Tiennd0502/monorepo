import { SCREENS } from '../types';
import { Stack } from './Stack';
import {
  LandingScreen,
  LoginScreen,
  SignUpScreen,
  VerifyOTPScreen,
} from '../screens';

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.LOGIN}
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name={SCREENS.LANDING} component={LandingScreen} />
      <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen} />
      <Stack.Screen name={SCREENS.VERIFY_OTP} component={VerifyOTPScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
