import { useCallback, useMemo, useRef, useState } from 'react';
import { ReturnKeyTypeOptions } from 'react-native';
import { useForm } from 'react-hook-form';

// Types
import {
  AUTH_TYPES,
  AuthResponse,
  ErrorResponse,
  LoginForm,
  LoginPayLoad,
} from '@monorepo/types';
import { SCREENS, StackScreenProps } from '../../types';

// Constants
import { SCHEMA } from '@monorepo/constants';

// Utils
import { getRandomId, removeSpaces } from '@monorepo/utils';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore, useToastStore, userStore } from '@monorepo/stores';

// Components
import { Stack, ScrollView, XStack, YStack, TamaguiElement } from 'tamagui';
import {
  Button,
  ControllerInput,
  Divider,
  HiddenIcon,
  IconButton,
  Loading,
  LogoIcon,
  ShowIcon,
  Text,
} from '@monorepo/ui';

interface LoginScreenProps {
  navigation: StackScreenProps;
}

const Login = ({ navigation }: LoginScreenProps) => {
  const [isDisclosure, setIsDisclosure] = useState(true);
  const [setAuthKey] = authStore((state) => [state.setAuthKey]);
  const [setUser] = userStore((state) => [state.setUser]);
  const [showToast] = useToastStore((state) => [state.showToast]);

  const {
    logIn: { mutate, isPending },
  } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { isValid },
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const passwordRef = useRef<TamaguiElement>();

  const handleLogin = useCallback(
    ({ email, password }: LoginForm) => {
      const payload: LoginPayLoad = {
        user: {
          uuid: getRandomId(),
          email: removeSpaces(email, true),
          password,
          type: AUTH_TYPES.CUSTOMER,
        },
      };

      mutate(payload, {
        onSuccess: ({ data: { user } }: AuthResponse) => {
          const { key } = user;
          key && setAuthKey(key);
          user && setUser(user);
          reset();
        },
        onError: (error: ErrorResponse) => {
          const {
            error: { message },
          } = error.response.data;

          showToast({
            variant: 'error',
            message,
          });
        },
      });
    },
    [mutate, reset, setAuthKey, setUser, showToast]
  );

  const handleSignUp = useCallback(() => {
    navigation.navigate(SCREENS.SIGN_UP);
    reset();
    clearErrors();
  }, [clearErrors, navigation, reset]);

  const inputs = useMemo(
    () => [
      {
        name: 'email',
        label: 'Email',
        rules: SCHEMA.email,
        returnKeyType: 'next',
        onSubmitEditing: () => passwordRef?.current?.focus(),
      },
      {
        name: 'password',
        label: 'Password',
        rules: SCHEMA.password,
        secureTextEntry: isDisclosure,
        returnKeyType: 'send',
        ref: passwordRef,
        rightElement: {
          icon: (
            <IconButton onPress={() => setIsDisclosure((prev) => !prev)}>
              {isDisclosure ? <ShowIcon /> : <HiddenIcon />}
            </IconButton>
          ),
        },
        onSubmitEditing: handleSubmit(handleLogin),
      },
    ],
    [handleLogin, handleSubmit, isDisclosure]
  );

  return (
    <>
      {isPending && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack paddingVertical={30} paddingRight={30}>
          <Stack paddingLeft={30} paddingBottom={30}>
            <XStack
              justifyContent="space-between"
              alignItems="center"
              alignContent="center"
              gap={20}
            >
              <YStack flexGrow={1}>
                <Divider color="$borderSecondary" />
              </YStack>
              <YStack>
                <LogoIcon />
              </YStack>
              <YStack flexGrow={1}>
                <Divider color="$borderSecondary" />
              </YStack>
            </XStack>
          </Stack>
          <Text
            size="extraLarge"
            fontWeight="bold"
            color="$textTertiary"
            marginBottom="$2"
            paddingLeft="$6"
          >
            Hello !
          </Text>
          <Text
            size="extraLarge"
            color="$primary"
            fontWeight="bold"
            marginBottom="$6"
            paddingLeft="$6"
          >
            WELCOME BACK
          </Text>
          <Stack
            backgroundColor="$secondary"
            overflow="hidden"
            paddingLeft="$2"
            paddingTop="$4"
          >
            {inputs.map(
              ({
                name,
                label,
                rules,
                rightElement,
                secureTextEntry,
                returnKeyType,
                onSubmitEditing,
                ref,
              }) => (
                <>
                  <ControllerInput<LoginForm>
                    variant="flushed"
                    name={name}
                    rules={rules}
                    label={label}
                    control={control}
                    placeholder={label}
                    rightElement={rightElement}
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType as ReturnKeyTypeOptions}
                    ref={ref}
                  />
                  <Divider
                    color="$borderSecondary"
                    height="$0.5"
                    marginLeft="$4"
                    marginBottom="$3"
                  />
                </>
              )
            )}

            <Stack
              paddingTop={25}
              rowGap={25}
              paddingRight={30}
              paddingLeft={10}
            >
              <Button variant="chromeless">Forgot Password</Button>
              <Button
                disabled={!isValid || isPending}
                onPress={handleSubmit(handleLogin)}
              >
                Log in
              </Button>
              <Button variant="chromeless" onPress={handleSignUp}>
                SIGN UP
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </ScrollView>
    </>
  );
};

export default Login;
