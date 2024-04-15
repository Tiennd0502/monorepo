import { useMemo, useState, useCallback } from 'react';
import { Stack, XStack, ScrollView } from 'tamagui';

// Constants
import { ORDER_TABS } from '@monorepo/constants';

// Types
import { ORDER_STATUS } from '@monorepo/types';
import { StackScreenProps } from '../../types';

// Utils
import { formatOrders } from '@monorepo/utils';

// Hooks
import { useOrder } from '@monorepo/hooks';

// Components
import { Divider, OrderCard, Text } from '@monorepo/ui';
import { MainLayout } from '../../components';

interface OrderProps {
  navigation: StackScreenProps;
}

const Order = ({ navigation }: OrderProps) => {
  const [tabActive, setTabActive] = useState<ORDER_STATUS>(
    ORDER_STATUS.Confirmed
  );
  const { useFetchOrders } = useOrder();
  const { data, isPending } = useFetchOrders({ page: 1, status: tabActive });
  const orderList = useMemo(
    () => data?.data?.orders || [],
    [data?.data?.orders]
  );

  const orders = useMemo(
    () => (orderList.length ? formatOrders(orderList) : []),
    [orderList]
  );

  const handleChangeTab = useCallback(
    (value: number) => setTabActive(value),
    []
  );

  return (
    <MainLayout padding={0} isLoading={isPending}>
      <Stack paddingTop="$3" gap="$5">
        <XStack justifyContent="space-around">
          {Object.entries(ORDER_TABS).map(([key, value]) => {
            const handleChange = () => handleChangeTab(+key);

            return (
              <Stack
                alignItems="center"
                gap="$2.5"
                key={key}
                onPress={handleChange}
              >
                <Text
                  color={tabActive === +key ? '$primary' : '$textDefault'}
                  size="large"
                >
                  {value}
                </Text>
                {tabActive === +key && (
                  <Divider width="$10" height="$1" color="$primary" />
                )}
              </Stack>
            );
          })}
        </XStack>
      </Stack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack flex={1} padding="$5" gap="$5">
          {orders?.map((item) => (
            <OrderCard key={item.id} item={item} onViewDetail={() => null} />
          ))}
        </Stack>
      </ScrollView>
    </MainLayout>
  );
};

export default Order;
