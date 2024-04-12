import { useCallback, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Stack, XStack, YStack, TamaguiElement } from 'tamagui';

// Types
import {
  AUTH_TYPES,
  AuthResponse,
  ErrorResponse,
  LoginForm,
  LoginPayLoad,
} from '@monorepo/types';

// Constants
import { ROUTES } from '../../constants';
import { SCHEMA } from '@monorepo/constants';

// Utils
import { getRandomId, removeSpaces } from '@monorepo/utils';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore, userStore } from '@monorepo/stores';

// Components
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

const Login = () => {
  const navigate = useNavigate();
  const [isDisclosure, setIsDisclosure] = useState(true);
  const [setAuthKey] = authStore((state) => [state.setAuthKey]);
  const [setUser] = userStore((state) => [state.setUser]);
  const [errorMessage, setErrorMessage] = useState('');

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
          password: removeSpaces(password, true),
          type: AUTH_TYPES.CUSTOMER,
        },
      };

      mutate(payload, {
        onSuccess: ({ data: { user } }: AuthResponse) => {
          const { key } = user;
          key && setAuthKey(key);
          user && setUser(user);
          reset();
          navigate(ROUTES.HOME);
        },
        onError: (error: ErrorResponse) => {
          const {
            error: { message },
          } = error.response.data;
          setErrorMessage(message);
        },
      });
    },
    [mutate, navigate, reset, setAuthKey, setUser]
  );

  const handleSignUp = useCallback(() => {
    navigate(ROUTES.SIGN_UP);
    reset();
    clearErrors();
  }, [clearErrors, navigate, reset]);

  const inputs = useMemo(
    () => [
      {
        name: 'email',
        label: 'Email',
        rules: SCHEMA.email,
        onSubmitEditing: () => passwordRef?.current?.focus(),
      },
      {
        name: 'password',
        label: 'Password',
        rules: SCHEMA.password,
        secureTextEntry: isDisclosure,
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
    <Stack height="100vh" backgroundColor="$backgroundSecondary">
      {isPending && <Loading />}
      <Stack padding={30}>
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
        <Text
          size="extraLarge"
          fontWeight="bold"
          color="$textTertiary"
          marginVertical="$2"
          textAlign="center"
        >
          Hello !
        </Text>
        <Text
          size="extraLarge"
          color="$primary"
          fontWeight="bold"
          marginBottom="$6"
          textAlign="center"
        >
          WELCOME BACK
        </Text>
        <Stack
          backgroundColor="$secondary"
          width="$1/2"
          marginHorizontal="auto"
        >
          {inputs.map(
            ({
              name,
              label,
              rules,
              rightElement,
              secureTextEntry,
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
                  ref={ref}
                />
                <Divider
                  color="$borderSecondary"
                  height="$0.5"
                  marginBottom="$3"
                />
              </>
            )
          )}
          {errorMessage && <Text error>{errorMessage}</Text>}
          <Stack marginTop="$5" gap={25}>
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
    </Stack>
  );
};

export default Login;
