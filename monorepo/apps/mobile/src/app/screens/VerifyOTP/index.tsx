import { useCallback, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Types
import { ErrorResponse, VerifyPayload } from '@monorepo/types';
import { SCREENS } from '../../types';

// Utils
import { removeSpaces } from '@monorepo/utils';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore, useToastStore } from '@monorepo/stores';

// Components
import { Stack, ScrollView, XStack, YStack, TamaguiElement } from 'tamagui';
import {
  Button,
  ControllerInput,
  Divider,
  Heading,
  Input,
  Loading,
  LogoIcon,
  Text,
} from '@monorepo/ui';

const VerifyOTP = ({ navigation }) => {
  const [showToast] = useToastStore((state) => [state.showToast]);

  const {
    verifyOTP: { mutate, isPending },
  } = useAuth();
  const [verify_id = '', removeVerifyId] = authStore((state) => [
    state.verify_id,
    state.removeVerifyId,
  ]);

  const codeRef = useRef<TamaguiElement>();

  const {
    control,
    formState: { isValid },
    reset,
    clearErrors,
    handleSubmit,
  } = useForm<VerifyPayload>();

  const handleVerifyOTP = useCallback(
    ({ code }: VerifyPayload) => {
      const payload: VerifyPayload = {
        code: removeSpaces(code, true),
        verify_id,
      };

      mutate(payload, {
        onSuccess: () => {
          removeVerifyId();
          navigation.navigate(SCREENS.LOGIN);
          reset();
          clearErrors();
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
    [
      clearErrors,
      mutate,
      navigation,
      removeVerifyId,
      reset,
      showToast,
      verify_id,
    ]
  );

  const handleSignIn = useCallback(() => {
    navigation.navigate(SCREENS.LOGIN);
    reset();
    clearErrors();
  }, [clearErrors, navigation, reset]);

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <>
      {isPending && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack paddingVertical={40} paddingRight={30}>
          <XStack
            paddingLeft={30}
            paddingBottom={30}
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
          <Heading paddingHorizontal={20} paddingBottom={30}>
            VERIFY OTP
          </Heading>
          <Stack
            paddingLeft={20}
            paddingVertical={20}
            rowGap={20}
            backgroundColor="$secondary"
            overflow="hidden"
          >
            <ControllerInput<VerifyPayload>
              variant="flushed"
              name="code"
              label="Code"
              placeholder=""
              control={control}
              onSubmitEditing={handleSubmit(handleVerifyOTP)}
              returnKeyType="send"
              ref={codeRef}
            />
            <Divider
              color="$borderSecondary"
              height="$0.5"
              marginLeft="$4"
              marginBottom="$3"
            />

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
                disabled={!isValid || isPending || !!errorMessage}
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
      </ScrollView>
    </>
  );
};

export default VerifyOTP;
