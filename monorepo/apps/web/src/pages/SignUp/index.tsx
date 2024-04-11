import { useState, useRef, useMemo, useCallback, Fragment } from 'react';
import { Stack, XStack, YStack, TamaguiElement } from 'tamagui';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Types
import {
  AUTH_TYPES,
  ErrorResponse,
  SignUpForm,
  SignUpPayload,
  SignUpResponse,
} from '@monorepo/types';

// Constants
import { SCHEMA } from '@monorepo/constants';

// Utils
import { getRandomId, removeSpaces } from '@monorepo/utils';

// Stores | Hooks
import { authStore } from '@monorepo/stores';
import { useAuth } from '@monorepo/hooks';

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
import { ROUTES } from '../../constants';

const SignUp = () => {
  const navigate = useNavigate();

  const [disclosures, setDisclosures] = useState({
    password: true,
    confirmPassword: true,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const [setVerifyId] = authStore((state) => [state.setVerifyId]);

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
          name: removeSpaces(name, true),
          email: removeSpaces(email, true),
          password,
          type: AUTH_TYPES.CUSTOMER,
          first_name: name.substring(0, name.indexOf(' ')),
          last_name: name.substring(name.indexOf(' ') + 1),
        },
      };

      mutate(payload, {
        onSuccess: ({ data: { verify_id: verifyData } }: SignUpResponse) => {
          !!setVerifyId && setVerifyId(verifyData);
          reset();
          navigate(ROUTES.VERIFY_OTP);
        },
        onError: (error: ErrorResponse) => {
          const {
            error: { message },
          } = error.response.data;
          setErrorMessage(message);
        },
      });
    },
    [mutate, navigate, reset, setVerifyId]
  );

  const inputs = useMemo(
    () => [
      {
        name: 'name',
        label: 'Name',
        rules: SCHEMA.name,
        onSubmitEditing: () => emailRef?.current?.focus(),
      },
      {
        name: 'email',
        label: 'Email',
        rules: SCHEMA.email,
        ref: emailRef,
        onSubmitEditing: () => passwordRef?.current?.focus(),
      },
      {
        name: 'password',
        label: 'Password',
        rules: SCHEMA.password,
        secureTextEntry: disclosures.password,
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
    reset();
    clearErrors();
    navigate(ROUTES.LOGIN);
  }, [clearErrors, navigate, reset]);

  return (
    <Stack
      flex={1}
      backgroundColor="$backgroundSecondary"
      padding="$5"
      justifyContent="center"
    >
      {isPending && <Loading />}

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

      <Stack
        backgroundColor="$secondary"
        overflow="hidden"
        width="50%"
        marginHorizontal="auto"
        marginTop="$5"
        padding="$4"
      >
        <Text
          size="extraLarge"
          color="$primary"
          marginBottom="$5"
          textAlign="center"
        >
          WELCOME
        </Text>
        {inputs.map(
          ({
            name,
            label,
            rules,
            rightElement,
            secureTextEntry,
            ref,
            onSubmitEditing,
          }) => (
            <Fragment key={name}>
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
                ref={ref}
              />
              <Divider
                color="$borderSecondary"
                height="$0.5"
                marginBottom="$3"
              />
            </Fragment>
          )
        )}

        {errorMessage && <Text error>{errorMessage}</Text>}
        <Button
          marginTop="$9"
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
  );
};

export default SignUp;
