import { useCallback, useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

// Types
import {
  SignUpForm,
  SignUpResponse,
  AUTH_TYPES,
  SignUpPayload,
} from '@monorepo/types';
import { NavigationProps, SCREENS } from '../../types';

// Constants
import { SCHEMA } from '@monorepo/constants';

// Utils
import { getRandomId } from '@monorepo/utils';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore } from '@monorepo/stores';

// Themes | Component
import { Stack, XStack, YStack, ScrollView } from 'tamagui';
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

const SignUp = () => {
  const navigation = useNavigation<NavigationProps>();
  const [setVerifyId] = authStore((state) => [state.setVerifyId]);

  const [disclosures, setDisclosures] = useState({
    password: true,
    confirmPassword: true,
  });
  const {
    signUp: { mutate, isPending },
  } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { isValid },
  } = useForm<SignUpForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const inputs = useMemo(
    () => [
      {
        name: 'name',
        label: 'Name',
        rules: SCHEMA.name,
      },
      {
        name: 'email',
        label: 'Email',
        rules: SCHEMA.email,
      },
      {
        name: 'password',
        label: 'Password',
        rules: SCHEMA.password,
        secureTextEntry: disclosures.password,
        rightElement: {
          icon: (
            <IconButton
              onPress={() =>
                setDisclosures((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            >
              {disclosures.password ? <ShowIcon /> : <HiddenIcon />}
            </IconButton>
          ),
        },
      },
      {
        name: 'confirmPassword',
        label: 'Confirm Password',
        rules: SCHEMA.confirmPassword,
        secureTextEntry: disclosures.confirmPassword,
        rightElement: {
          icon: (
            <IconButton
              onPress={() =>
                setDisclosures((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }))
              }
            >
              {disclosures.confirmPassword ? <ShowIcon /> : <HiddenIcon />}
            </IconButton>
          ),
        },
      },
    ],
    [disclosures]
  );

  const handleSignUp = useCallback(
    ({ name, email, password }: SignUpForm) => {
      const payload: SignUpPayload = {
        user: {
          uuid: getRandomId(),
          name,
          email,
          password,
          type: AUTH_TYPES.CUSTOMER,
          first_name: name.substring(0, name.indexOf(' ')),
          last_name: name.substring(name.indexOf(' ') + 1),
        },
      };

      mutate(payload, {
        onSuccess: ({ data: { verify_id: verifyData } }: SignUpResponse) => {
          !!setVerifyId && setVerifyId(verifyData);
          console.log('TRUE', verifyData);
          navigation.navigate(SCREENS.VERIFY_OTP);

          reset();
        },
        onError: (error: Error) => {
          console.log(error);
        },
      });
    },
    [mutate, navigation, reset, setVerifyId]
  );

  const handleSignIn = useCallback(() => {
    navigation.navigate(SCREENS.LOGIN);
    reset();
    clearErrors();
  }, [clearErrors, navigation, reset]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      {isPending && <Loading />}
      <ScrollView>
        <Stack paddingVertical={20} paddingRight={30}>
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
            color="$primary"
            marginBottom="$6"
            paddingLeft="$6"
          >
            WELCOME
          </Text>
          <Stack
            backgroundColor="$secondary"
            overflow="hidden"
            paddingLeft="$2"
          >
            {inputs.map(
              ({ name, label, rules, rightElement, secureTextEntry }) => (
                <>
                  <Controller
                    name={name}
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
            <Stack paddingVertical={40} rowGap={30} paddingRight={30}>
              <Button
                disabled={!isValid || isPending}
                onPress={handleSubmit(handleSignUp)}
              >
                SIGN UP"
              </Button>
              <Text>
                Already have account?&nbsp;
                <Text onPress={handleSignIn}>SIGN IN</Text>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
