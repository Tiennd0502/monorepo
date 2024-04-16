import { useCallback, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Stack, TamaguiElement } from 'tamagui';

// Types
import {
  ShippingAddressPayload,
  ADDRESS_TYPE,
  ErrorResponse,
} from '@monorepo/types';

// Hooks | Stores
import { useShippingAddress } from '@monorepo/hooks';
import { useToastStore, userStore } from '@monorepo/stores';

// Components
import { Button, ControllerInput } from '@monorepo/ui';
import { MainLayout } from '../../components';
import { ReturnKeyType } from 'react-native';

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
  const [showToast] = useToastStore((state) => [state.showToast]);

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
    [mutate, navigation, reset, showToast]
  );

  const inputs = useMemo(
    () => [
      {
        disabled: true,
        name: 'name',
        label: 'Full name',
        placeholder: 'Ex: Bruno Pham',
        rules: {},
        returnKeyType: 'next',
        ref: nameRef,
        onSubmitEditing: () => addressRef?.current?.focus(),
      },
      {
        disabled: true,
        name: 'address',
        label: 'Address',
        placeholder: 'Ex: 25 Robert Latouche Street',
        rules: {},
        returnKeyType: 'next',
        ref: addressRef,
        onSubmitEditing: () => zipCodeRef?.current?.focus(),
      },
      {
        name: 'zipCode',
        variant: 'outlined',
        label: 'Zipcode (Postal Code)',
        placeholder: '',
        rules: {},
        returnKeyType: 'next',
        ref: zipCodeRef,
        onSubmitEditing: () => cityRef?.current?.focus(),
      },
      {
        disabled: true,
        name: 'country',
        label: 'Country',
        placeholder: 'Select Country',
        rules: {},
        returnKeyType: 'next',
        ref: countryRef,
        onSubmitEditing: () => cityRef?.current?.focus(),
      },
      {
        name: 'city',
        label: 'City',
        variant: 'outlined',
        placeholder: 'Select City',
        rules: {},
        returnKeyType: 'send',
        ref: cityRef,
        onSubmitEditing: handleSubmit(handleAddCard),
      },
      {
        disabled: true,
        name: 'district',
        label: 'District',
        variant: 'outlined',
        placeholder: 'Select District',
        rules: {},
        returnKeyType: 'send',
        ref: districtRef,
        onSubmitEditing: handleSubmit(handleAddCard),
      },
    ],
    [handleAddCard, handleSubmit]
  );

  return (
    <MainLayout isLoading={isPending}>
      <Stack gap="$5" marginTop="$6">
        {inputs.map(
          ({
            disabled = false,
            name,
            rules = {},
            label,
            placeholder,
            returnKeyType,
            ref,
            ...props
          }) => (
            <ControllerInput<FormType>
              key={name}
              disabled={disabled}
              name={name}
              rules={rules}
              label={label}
              placeholder={placeholder}
              returnKeyType={returnKeyType as ReturnKeyType}
              control={control}
              ref={ref}
              {...props}
            />
          )
        )}
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
    </MainLayout>
  );
};

export default AddShippingAddress;
