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
import { Button, Input, Loading } from '@monorepo/ui';

const AddShippingAddress = ({ navigation }) => {
  const {
    add: { mutate, isPending },
  } = useShippingAddress();

  const [user] = userStore((state) => [state.user]);

  const { control, handleSubmit, reset } = useForm<ShippingAddress>({
    defaultValues: useMemo(
      () => ({
        name: user ? user.first_name + ' ' + user.last_name : '',
        address: '25 Robert Latouche Street',
        zipCode: '94110',
        country: 'United States',
        city: 'New York',
        district: '123123',
      }),
      [user]
    ),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const cityRef = useRef<TamaguiElement>();

  const handleAddCard = useCallback(
    ({ name, address, zipCode, city, country }: ShippingAddress) => {
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
                label="Full name"
                placeholder="Ex: Bruno Pham"
                errorMessage={error?.message}
                onChangeText={onChange}
                {...props}
              />
            );
          }}
        />
        <Controller
          name="address"
          control={control}
          render={({
            field: { onChange, ...props },
            fieldState: { error },
          }) => {
            return (
              <Input
                disabled
                label="Address"
                placeholder="Ex: 25 Robert Latouche Stree"
                errorMessage={error?.message}
                onChangeText={onChange}
                {...props}
              />
            );
          }}
        />
        <Controller
          name="zipCode"
          control={control}
          render={({
            field: { onChange, value, ...props },
            fieldState: { error },
          }) => {
            return (
              <Input
                variant="outlined"
                label="Zipcode (Postal Code)"
                placeholder=""
                errorMessage={error?.message}
                value={value.toString()}
                onChangeText={onChange}
                returnKeyType="next"
                onSubmitEditing={() => cityRef?.current?.focus()}
                {...props}
              />
            );
          }}
        />
        <Controller
          name="country"
          control={control}
          render={({
            field: { onChange, ...props },
            fieldState: { error },
          }) => {
            return (
              <Input
                disabled
                label="Country"
                placeholder="Select Country"
                errorMessage={error?.message}
                onChangeText={onChange}
                {...props}
              />
            );
          }}
        />
        <Controller
          name="city"
          control={control}
          render={({
            field: { onChange, ...props },
            fieldState: { error },
          }) => {
            return (
              <Input
                label="City"
                variant="outlined"
                placeholder="New York"
                errorMessage={error?.message}
                onChangeText={onChange}
                {...props}
                ref={cityRef}
              />
            );
          }}
        />
        <Controller
          name="district"
          control={control}
          render={({
            field: { onChange, ...props },
            fieldState: { error },
          }) => {
            return (
              <Input
                disabled
                label="District"
                placeholder="Select District"
                errorMessage={error?.message}
                onChangeText={onChange}
                {...props}
              />
            );
          }}
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
