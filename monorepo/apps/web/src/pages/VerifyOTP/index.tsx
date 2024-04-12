import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Stack, XStack, YStack } from 'tamagui';

// Types
import { ErrorResponse, VerifyPayload } from '@monorepo/types';

// Constants
import { ROUTES } from '../../constants';

// Utils
import { removeSpaces } from '@monorepo/utils';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore } from '@monorepo/stores';

// Components
import {
  Button,
  ControllerInput,
  Divider,
  Heading,
  Loading,
  LogoIcon,
  Text,
} from '@monorepo/ui';

interface FormType {
  code: string;
  verify_id: string;
}

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    verifyOTP: { mutate, isPending },
  } = useAuth();
  const [verify_id = '', removeVerifyId] = authStore((state) => [
    state.verify_id,
    state.removeVerifyId,
  ]);

  const {
    control,
    formState: { isValid },
    reset,
    clearErrors,
    handleSubmit,
  } = useForm<FormType>();

  const handleVerifyOTP = useCallback(
    ({ code }: FormType) => {
      const payload: VerifyPayload = {
        code: removeSpaces(code, true),
        verify_id,
      };

      mutate(payload, {
        onSuccess: () => {
          removeVerifyId();
          reset();
          clearErrors();
          navigate(ROUTES.LOGIN);
        },
        onError: (error: ErrorResponse) => {
          const {
            error: { message },
          } = error.response.data;
          setErrorMessage(message);
        },
      });
    },
    [clearErrors, mutate, navigate, removeVerifyId, reset, verify_id]
  );

  const handleSignIn = useCallback(() => {
    reset();
    clearErrors();
    navigate(ROUTES.LOGIN);
  }, [clearErrors, reset, navigate]);

  const handleGoBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <Stack height="100vh" backgroundColor="$textSecondary">
      {isPending && <Loading />}
      <Stack width="50%" marginTop="$5" marginHorizontal="auto">
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
        <Heading textAlign="center" marginTop="$5">
          VERIFY OTP
        </Heading>
        <Stack paddingVertical={20} gap={20} backgroundColor="$secondary">
          <ControllerInput<FormType>
            name="code"
            rules={{}}
            control={control}
            variant="flushed"
            label="Code"
            placeholder="Enter code"
            onSubmitEditing={handleSubmit(handleVerifyOTP)}
          />
          <Divider
            color="$borderSecondary"
            height="$0.5"
            marginLeft="$4"
            marginBottom="$3"
          />
          {errorMessage && <Text error>{errorMessage}</Text>}
          <Stack
            paddingVertical={40}
            paddingRight={30}
            paddingLeft={10}
            rowGap={20}
          >
            <Button
              variant="chromeless"
              color="$primary"
              onPress={handleGoBack}
            >
              Go back
            </Button>
            <Button
              disabled={!isValid || isPending}
              onPress={handleSubmit(handleVerifyOTP)}
            >
              Submit
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
    </Stack>
  );
};

export default VerifyOTP;
