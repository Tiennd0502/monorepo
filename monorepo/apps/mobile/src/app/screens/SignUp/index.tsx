import { useCallback, useMemo, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ReturnKeyTypeOptions,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';

// Types
import {
  SignUpForm,
  SignUpResponse,
  AUTH_TYPES,
  SignUpPayload,
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
  Divider,
  HiddenIcon,
  IconButton,
  Input,
  Loading,
  LogoIcon,
  ShowIcon,
  Text,
} from '@monorepo/ui';

interface SignUpProps {
  navigation: StackScreenProps;
}

type KeyField = Exclude<keyof SignUpForm, ''>;

const SignUp = ({ navigation }: SignUpProps) => {
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
        onError: (error: Error) => {
          console.log(error);
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
                  <Controller
                    name={name as KeyField}
                    control={control}
                    rules={rules}
                    render={({
                      field: { onChange, ...props },
                      fieldState: { error },
                    }) => {
                      return (
                        <Input
                          aria-label={name}
                          variant="flushed"
                          label={label}
                          placeholder={label}
                          errorMessage={error?.message}
                          onChangeText={onChange}
                          rightElement={rightElement}
                          secureTextEntry={secureTextEntry}
                          onSubmitEditing={onSubmitEditing}
                          returnKeyType={returnKeyType as ReturnKeyTypeOptions}
                          {...props}
                          ref={ref}
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
