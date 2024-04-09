import { useCallback, useMemo, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ReturnKeyTypeOptions,
} from 'react-native';
import { useForm } from 'react-hook-form';

// Types
import {
  SignUpResponse,
  AUTH_TYPES,
  SignUpPayload,
  ErrorResponse,
  SignUpForm,
} from '@monorepo/types';
import { StackScreenProps, SCREENS } from '../../types';

// Constants
import { SCHEMA } from '@monorepo/constants';

// Utils
import { getRandomId } from '@monorepo/utils';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore } from '@monorepo/stores';

// Themes | Component
import { Stack, XStack, YStack, ScrollView, TamaguiElement } from 'tamagui';
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
  Toast,
} from '@monorepo/ui';

interface SignUpProps {
  navigation: StackScreenProps;
}

const SignUp = ({ navigation }: SignUpProps) => {
  const [setVerifyId] = authStore((state) => [state.setVerifyId]);
  const [errorMessage, setErrorMessage] = useState('');

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

  const emailRef = useRef<TamaguiElement>();
  const passwordRef = useRef<TamaguiElement>();
  const confirmPasswordRef = useRef<TamaguiElement>();

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
          navigation.navigate(SCREENS.VERIFY_OTP);

          reset();
        },
        onError: (error: ErrorResponse) => {
          const {
            error: { message },
          } = error.response.data;
          setErrorMessage(message);
        },
      });
    },
    [mutate, navigation, reset, setVerifyId]
  );

  const inputs = useMemo(
    () => [
      {
        name: 'name',
        label: 'Name',
        rules: SCHEMA.name,
        returnKeyType: 'next',
        onSubmitEditing: () => emailRef?.current?.focus(),
      },
      {
        name: 'email',
        label: 'Email',
        rules: SCHEMA.email,
        returnKeyType: 'next',
        ref: emailRef,
        onSubmitEditing: () => passwordRef?.current?.focus(),
      },
      {
        name: 'password',
        label: 'Password',
        rules: SCHEMA.password,
        secureTextEntry: disclosures.password,
        returnKeyType: 'next',
        ref: passwordRef,
        onSubmitEditing: () => confirmPasswordRef?.current?.focus(),
        rightElement: {
          icon: (
            <IconButton
              chromeless
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
        returnKeyType: 'send',
        ref: confirmPasswordRef,
        onSubmitEditing: handleSubmit(handleSignUp),
        rightElement: {
          icon: (
            <IconButton
              chromeless
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
    [
      disclosures.confirmPassword,
      disclosures.password,
      handleSignUp,
      handleSubmit,
    ]
  );

  const handleSignIn = useCallback(() => {
    navigation.navigate(SCREENS.LOGIN);
    reset();
    clearErrors();
  }, [clearErrors, navigation, reset]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {isPending && <Loading />}
      {errorMessage && (
        <Toast
          variant="error"
          message={errorMessage}
          marginTop="$5"
          onClose={() => setErrorMessage('')}
        />
      )}
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
            paddingTop="$4"
          >
            {inputs.map(
              ({
                name,
                label,
                rules,
                rightElement,
                secureTextEntry,
                ref,
                returnKeyType,
                onSubmitEditing,
              }) => (
                <>
                  <ControllerInput<SignUpForm>
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
              paddingVertical={40}
              rowGap={30}
              paddingRight="$7.5"
              paddingLeft="$5"
            >
              <Button
                disabled={!isValid || isPending}
                onPress={handleSubmit(handleSignUp)}
              >
                SIGN UP
              </Button>
              <XStack alignItems="center" justifyContent="center">
                <Text textAlign="center">Already have account?&nbsp;</Text>
                <Button chromeless onPress={handleSignIn}>
                  <Text size="medium" color="$primary" bold>
                    SIGN IN
                  </Text>
                </Button>
              </XStack>
            </Stack>
          </Stack>
        </Stack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
