import { useCallback, useMemo } from 'react';
import { Stack, XStack, ScrollView } from 'tamagui';
import FastImage from 'react-native-fast-image';

// Types
import { SCREENS } from '../../types';
import { ConfirmOrderPayload } from '@monorepo/types';

// Constants
import {
  CURRENCY_UNIT,
  EXTRA_MASTER_IMAGE,
  DELIVERY_IMAGE,
} from '@monorepo/constants';
import { PAYMENT_CARDS } from '@monorepo/mocks';

// Utils
import { formatShippingAddress } from '@monorepo/utils';

// Hooks | Stores
import { useOrder } from '@monorepo/hooks';

// Themes | Components
import { Button, Text, ShippingCard, shadows, Title } from '@monorepo/ui';
import { MainLayout } from '../../components';

const DELIVERY = 5.0;

const CheckOut = ({ navigation, route }) => {
  const { id = '' } = route?.params || {};

  const {
    useFetchOrder,
    confirmOrder: { mutate, isPending },
  } = useOrder();
  const { data: orderDetail, isFetching } = useFetchOrder(id);

  const shippingAddress = orderDetail?.data?.order?.shipping_address;
  const overPayment = orderDetail?.data?.order?.grand_total.amount || 0;

  const payments = useMemo(
    () => [
      {
        id: '01',
        label: 'Order:',
        value: `${CURRENCY_UNIT} ${overPayment}`,
      },
      {
        id: '02',
        label: 'Delivery:',
        value: `${CURRENCY_UNIT} ${DELIVERY.toFixed(2)}`,
      },
      {
        id: '03',
        label: 'Total:',
        value: `${CURRENCY_UNIT} ${(overPayment + DELIVERY).toFixed(2)}`,
        isTotal: true,
      },
    ],
    [overPayment]
  );

  const handleEditShippingAddress = useCallback(() => null, []);

  const handleSubmitOrder = useCallback(() => {
    if (id) {
      const payload: ConfirmOrderPayload = {
        id,
        order: {
          payment_info: {
            carts: [],
          },
        },
      };
      mutate(payload, {
        onSuccess: () => null,
        onError: (error) => {
          console.log(error);
        },
      });
      navigation.navigate(SCREENS.CONGRATS);
    }
  }, [id, mutate, navigation]);

  const isLoading = isFetching || isPending;

  return (
    <MainLayout isLoading={isLoading} padding={0}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Stack flex={1} gap="$5" paddingHorizontal="$5">
          <Stack>
            <Title
              label="Shipping Address"
              onEdit={handleEditShippingAddress}
            />
            {shippingAddress && (
              <ShippingCard
                item={formatShippingAddress([shippingAddress])[0]}
              />
            )}
          </Stack>
          <Stack>
            <Title
              disabledIcon
              label="Payment"
              onEdit={handleEditShippingAddress}
            />
            <XStack
              borderRadius="$2"
              height="$17"
              paddingLeft="$3"
              gap="$3"
              backgroundColor="$backgroundSecondary"
              style={shadows.card}
            >
              <FastImage
                style={{
                  flex: 1,
                }}
                source={{
                  uri: EXTRA_MASTER_IMAGE,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text alignSelf="center" flex={5} color="$textPrimary">
                {PAYMENT_CARDS[0].id}
              </Text>
            </XStack>
          </Stack>

          <Stack>
            <Title
              disabledIcon
              labelProps={{
                size: 'extraMedium',
              }}
              label="Delivery method"
              onEdit={handleEditShippingAddress}
            />
            <XStack
              borderRadius="$2"
              padding="$5"
              gap="$5"
              backgroundColor="$backgroundSecondary"
              style={shadows.card}
            >
              <FastImage
                style={{
                  width: 88,
                  height: 20,
                }}
                source={{
                  uri: DELIVERY_IMAGE,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text flex={1} color="$textPrimary" bold>
                Fast (2-3days)
              </Text>
            </XStack>
          </Stack>
          <Stack rowGap="$5" paddingTop="$3.75" paddingBottom="$5">
            <Stack
              paddingHorizontal="$5"
              paddingVertical="$5"
              rowGap="$3.75"
              borderRadius="$2"
              backgroundColor="$backgroundSecondary"
              style={shadows.default}
            >
              {payments.map(({ id, label, value, isTotal = false }) => (
                <XStack key={id} justifyContent="space-between">
                  <Text size="large" color="$textQuaternary">
                    {label}
                  </Text>
                  <Text size="large" color="$textPrimary" bold={isTotal}>
                    {value}
                  </Text>
                </XStack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </ScrollView>
      <Stack padding="$5">
        <Button
          marginTop="auto"
          marginBottom={0}
          size="xl"
          onPress={handleSubmitOrder}
        >
          SUBMIT ORDER
        </Button>
      </Stack>
    </MainLayout>
  );
};

export default CheckOut;
