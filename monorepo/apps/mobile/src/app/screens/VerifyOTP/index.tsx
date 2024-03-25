import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Types
import { VerifyPayload } from '@monorepo/types';
import { SCREENS } from '../../types';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore } from '@monorepo/stores';

// Components
import { Stack, ScrollView, XStack, YStack } from 'tamagui';
import {
  Button,
  Divider,
  Heading,
  Input,
  Loading,
  LogoIcon,
  Text,
} from '@monorepo/ui';

const VerifyOTP = ({ navigation }) => {
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
  } = useForm<VerifyPayload>();

  const handleVerifyOTP = useCallback(
    ({ code }: VerifyPayload) => {
      const payload: VerifyPayload = {
        code,
        verify_id,
      };

      mutate(payload, {
        onSuccess: () => {
          removeVerifyId();
          navigation.navigate(SCREENS.LOGIN);
          reset();
          clearErrors();
        },
        onError: (error: Error) => {
          console.log(error);
        },
      });
    },
    [clearErrors, mutate, navigation, removeVerifyId, reset, verify_id]
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
            <Controller
              name="code"
              control={control}
              render={({
                field: { onChange, ...props },
                fieldState: { error },
              }) => {
                return (
                  <Input
                    variant="flushed"
                    label="Code"
                    placeholder=""
                    errorMessage={error?.message}
                    onChangeText={onChange}
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
              <Stack>
                <Text textAlign="center">
                  Already have account?&nbsp;
                  <Text
                    onPress={handleSignIn}
                    color="$primary"
                    fontWeight="bold"
                  >
                    SIGN IN
                  </Text>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </ScrollView>
    </>
  );
};

export default VerifyOTP;
