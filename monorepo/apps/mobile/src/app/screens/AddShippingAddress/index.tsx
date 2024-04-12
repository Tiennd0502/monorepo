import { useCallback, useMemo, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Stack, TamaguiElement } from 'tamagui';

// Types
import {
  ShippingAddress,
  ShippingAddressPayload,
  ADDRESS_TYPE,
} from '@monorepo/types';

// Hooks | Stores
import { useShippingAddress } from '@monorepo/hooks';
import { userStore } from '@monorepo/stores';

// Components
import { Button, ControllerInput, Input, Loading } from '@monorepo/ui';

interface FormType {
  name: string;
  address: string;
  zipCode: string;
  country: string;
  city: string;
  district: string;
}

const AddShippingAddress = ({ navigation }) => {
  const {
    add: { mutate, isPending },
  } = useShippingAddress();

  const username = userStore((state) =>
    state.user ? state.user.first_name + ' ' + state.user.last_name : ''
  );

  const { control, handleSubmit, reset } = useForm<FormType>({
    defaultValues: {
      name: username,
      address: '25 Robert Latouche Street',
      zipCode: '94110',
      country: 'United States',
      city: 'New York',
      district: '123123',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const cityRef = useRef<TamaguiElement>();
  const nameRef = useRef<TamaguiElement>();
  const addressRef = useRef<TamaguiElement>();
  const countryRef = useRef<TamaguiElement>();
  const zipCodeRef = useRef<TamaguiElement>();
  const districtRef = useRef<TamaguiElement>();

  const handleAddCard = useCallback(
    ({ name, address, zipCode, city, country }: FormType) => {
      const payload: ShippingAddressPayload = {
        address: {
          name,
          address_line_1: address,
          state: city,
          post_code: zipCode,
          country: country,
          type: ADDRESS_TYPE.SHIPPING,
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
      backgroundColor="$backgroundSecondary"
      paddingHorizontal="$5"
      paddingTop="$3.75"
      gap="$5"
      paddingBottom="$5"
    >
      {isPending && <Loading />}
      <Stack gap="$5" marginTop="$6">
        <ControllerInput<FormType>
          disabled
          name="name"
          label="Full name"
          placeholder="Ex: Bruno Pham"
          returnKeyType="next"
          ref={nameRef}
          control={control}
        />
        <ControllerInput<FormType>
          disabled
          name="address"
          label="Address"
          placeholder="Ex: 25 Robert Latouche Stree"
          returnKeyType="next"
          ref={addressRef}
          control={control}
        />
        <ControllerInput<FormType>
          name="zipCode"
          variant="outlined"
          label="Zipcode (Postal Code)"
          returnKeyType="next"
          ref={zipCodeRef}
          control={control}
          onSubmitEditing={() => cityRef?.current?.focus()}
        />
        <ControllerInput<FormType>
          disabled
          name="country"
          label="Country"
          placeholder="Select Country"
          returnKeyType="next"
          ref={countryRef}
          control={control}
        />
        <ControllerInput<FormType>
          name="city"
          label="City"
          variant="outlined"
          placeholder="New York"
          returnKeyType="send"
          ref={cityRef}
          control={control}
          onSubmitEditing={handleSubmit(handleAddCard)}
        />
        <ControllerInput<FormType>
          disabled
          name="district"
          label="District"
          placeholder="Select District"
          returnKeyType="send"
          ref={districtRef}
          control={control}
        />
      </Stack>
      <Button
        marginTop="auto"
        marginBottom={0}
        disabled={isPending}
        size="xl"
        onPress={handleSubmit(handleAddCard)}
      >
        SAVE ADDRESS
      </Button>
    </Stack>
  );
};

export default AddShippingAddress;
