import { useCallback, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Types
import {
  AUTH_TYPES,
  AuthResponse,
  LoginForm,
  LoginPayLoad,
} from '@monorepo/types';
import { SCREENS, StackScreenProps } from '../../types';

// Constants
import { SCHEMA } from '@monorepo/constants';

// Utils
import { getRandomId } from '@monorepo/utils';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore, userStore } from '@monorepo/stores';

// Components
import { Stack, ScrollView, XStack, YStack } from 'tamagui';
import {
  Button,
  Divider,
  HiddenIcon,
  IconButton,
  Input,
  Loading,
  LogoIcon,
  ShowIcon,
  Text,
} from '@monorepo/ui';

interface LoginScreenProps {
  navigation: StackScreenProps;
}

type KeyForm = Exclude<keyof LoginForm, ''>;

const Login = ({ navigation }: LoginScreenProps) => {
  const [isDisclosure, setIsDisclosure] = useState(true);
  const [setAuthKey] = authStore((state) => [state.setAuthKey]);
  const [setUser] = userStore((state) => [state.setUser]);

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

  const inputs = useMemo(
    () => [
      {
        name: 'email',
        label: 'Email',
        rules: SCHEMA.email,
      },
      {
        name: 'password',
        label: 'Password',
        rules: SCHEMA.password,
        secureTextEntry: isDisclosure,
        rightElement: {
          icon: (
            <IconButton onPress={() => setIsDisclosure((prev) => !prev)}>
              {isDisclosure ? <ShowIcon /> : <HiddenIcon />}
            </IconButton>
          ),
        },
      },
    ],
    [isDisclosure]
  );

  const handleLogin = useCallback(
    ({ email, password }: LoginForm) => {
      const payload: LoginPayLoad = {
        user: {
          uuid: getRandomId(),
          email,
          password,
          type: AUTH_TYPES.CUSTOMER,
        },
      };

      mutate(payload, {
        onSuccess: ({ status, data: { user } }: AuthResponse) => {
          const { key } = user;
          key && setAuthKey(key);
          user && setUser(user);
          reset();
        },
        onError: (error: Error) => {
          console.log(error);
        },
      });
    },
    [mutate, reset, setAuthKey, setUser]
  );

  const handleSignUp = useCallback(() => {
    navigation.navigate(SCREENS.SIGN_UP);
    reset();
    clearErrors();
  }, [clearErrors, navigation, reset]);

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
              ({ name, label, rules, rightElement, secureTextEntry }) => (
                <>
                  <Controller
                    name={name as KeyForm}
                    control={control}
                    rules={rules}
                    render={({
                      field: { onChange, ...props },
                      fieldState: { error },
                    }) => {
                      return (
                        <Input
                          variant="flushed"
                          label={label}
                          placeholder={label}
                          errorMessage={error?.message}
                          onChangeText={onChange}
                          rightElement={rightElement}
                          secureTextEntry={secureTextEntry}
                          {...props}
                        />
                      );
                    }}
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
