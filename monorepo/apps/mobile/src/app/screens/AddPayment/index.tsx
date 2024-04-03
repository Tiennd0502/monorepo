import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Stack, XStack, ScrollView } from 'tamagui';

// Types
import { AddPaymentFrom, LAYER_TYPE, Layer } from '@monorepo/types';

// Constants
import { PAYMENT_CARDS } from '@monorepo/constants';

// Hooks | Stories
import { usePayment } from '@monorepo/hooks';
import { userStore } from '@monorepo/stores';

// Components
import {
  Button,
  PaymentCard,
  Input,
  ChevronLeftIcon,
  Header,
  Loading,
} from '@monorepo/ui';

const AddPayment = ({ navigation }) => {
  const {
    add: { mutate, isPending },
  } = usePayment();
  const [user] = userStore((state) => [state.user]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<AddPaymentFrom>({
    defaultValues: useMemo(
      () => ({
        name: user ? user.first_name + ' ' + user.last_name : '',
        number: '',
        cvv: 123,
        expiryDate: '',
      }),
      [user]
    ),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleAddCard = useCallback(
    ({ name, number, cvv, expiryDate }: AddPaymentFrom) => {
      const payload: Layer = {
        layer: {
          title: name,
          content: number,
          type: LAYER_TYPE.BLOG,
          tags: ['node'],
          slug: cvv.toString(),
          summary: expiryDate,
        },
      };

      mutate(payload, {
        onSuccess: () => {
          navigation.goBack();
          reset();
        },
        onError: (error: Error) => {
          console.log(error);
        },
      });
    },
    [mutate, navigation, reset]
  );

  return (
    <Stack
      flex={1}
      backgroundColor="$secondary"
      paddingHorizontal="$5"
      paddingTop="$3.75"
      gap="$5"
    >
      <Header
        title="Add payment method"
        startIcon={<ChevronLeftIcon onPress={handleGoBack} />}
      />
      {isPending && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <PaymentCard item={PAYMENT_CARDS[0]} specialCharacter="X" />
        <Stack flex={1} paddingVertical="$5">
          <Stack rowGap="$5">
            <Controller
              name="name"
              control={control}
              render={({
                field: { onChange, ...props },
                fieldState: { error },
              }) => {
                return (
                  <Input
                    disabled
                    label="CardHolder Name"
                    placeholder={`Ex: ${'Bruno Pham'}`}
                    errorMessage={error?.message}
                    onChangeText={onChange}
                    {...props}
                  />
                );
              }}
            />
            <Controller
              name="number"
              control={control}
              render={({
                field: { onChange, ...props },
                fieldState: { error },
              }) => {
                return (
                  <Input
                    variant="outlined"
                    label="Card Number"
                    placeholder=""
                    errorMessage={error?.message}
                    onChangeText={onChange}
                    {...props}
                  />
                );
              }}
            />
            <XStack gap="$5">
              <Stack flex={1}>
                <Controller
                  name="cvv"
                  control={control}
                  render={({
                    field: { onChange, value, ...props },
                    fieldState: { error },
                  }) => {
                    return (
                      <Input
                        editable={false}
                        variant="disabled"
                        label="cvv"
                        placeholder="ccv"
                        errorMessage={error?.message}
                        value={value.toString()}
                        onChangeText={onChange}
                        {...props}
                      />
                    );
                  }}
                />
              </Stack>
              <Stack flex={1}>
                <Controller
                  name="expiryDate"
                  control={control}
                  render={({
                    field: { onChange, ...props },
                    fieldState: { error },
                  }) => {
                    return (
                      <Input
                        variant="outlined"
                        label="Expiration Date"
                        placeholder=""
                        errorMessage={error?.message}
                        onChangeText={onChange}
                        {...props}
                      />
                    );
                  }}
                />
              </Stack>
            </XStack>
          </Stack>
          <Button
            disabled={!isValid || isPending}
            size="lg"
            marginTop="$5"
            onPress={handleSubmit(handleAddCard)}
          >
            ADD NEW CARD
          </Button>
        </Stack>
      </ScrollView>
    </Stack>
  );
};

export default AddPayment;
