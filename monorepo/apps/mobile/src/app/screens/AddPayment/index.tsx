import { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Stack, XStack, ScrollView, TamaguiElement } from 'tamagui';

// Types
import { LAYER_TYPE, Layer } from '@monorepo/types';

// Constants
import { PAYMENT_CARDS } from '@monorepo/mocks';

// Hooks | Stories
import { usePayment } from '@monorepo/hooks';
import { userStore } from '@monorepo/stores';

// Components
import { Button, PaymentCard, Loading, ControllerInput } from '@monorepo/ui';

interface FormType {
  name: string;
  number: string;
  cvv: string;
  expiryDate: string;
}

const AddPayment = ({ navigation }) => {
  const {
    add: { mutate, isPending },
  } = usePayment();
  const username = userStore((state) =>
    state.user ? state.user.first_name + ' ' + state.user.last_name : ''
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormType>({
    defaultValues: {
      name: username,
      number: '',
      cvv: '123',
      expiryDate: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const nameRef = useRef<TamaguiElement>();
  const cardNumberRef = useRef<TamaguiElement>();
  const ccvRef = useRef<TamaguiElement>();
  const expiryDateRef = useRef<TamaguiElement>();

  const handleAddCard = useCallback(
    ({ name, number, cvv, expiryDate }: FormType) => {
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
      {isPending && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <PaymentCard item={PAYMENT_CARDS[0]} specialCharacter="X" />
        <Stack flex={1} paddingVertical="$5">
          <Stack rowGap="$5">
            <ControllerInput<FormType>
              disabled
              name="name"
              label="CardHolder Name"
              placeholder="Ex: Bruno Pham"
              returnKeyType="next"
              ref={nameRef}
              control={control}
            />
            <ControllerInput<FormType>
              name="number"
              variant="outlined"
              label="Card Number"
              returnKeyType="next"
              ref={cardNumberRef}
              control={control}
              onSubmitEditing={() => expiryDateRef?.current?.focus()}
            />

            <XStack gap="$5">
              <Stack flex={1}>
                <ControllerInput<FormType>
                  name="cvv"
                  variant="disabled"
                  label="cvv"
                  returnKeyType="next"
                  editable={false}
                  control={control}
                  ref={ccvRef}
                  onSubmitEditing={() => expiryDateRef?.current?.focus()}
                />
              </Stack>
              <Stack flex={1}>
                <ControllerInput<FormType>
                  name="expiryDate"
                  variant="outlined"
                  label="Expiration Date"
                  returnKeyType="send"
                  control={control}
                  ref={expiryDateRef}
                  onSubmitEditing={handleSubmit(handleAddCard)}
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
