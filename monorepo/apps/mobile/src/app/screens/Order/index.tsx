import { memo, useMemo, useState, useCallback } from 'react';
import { Stack, XStack, ScrollView } from 'tamagui';

// Constants
import { ORDER_TABS } from '@monorepo/constants';

// Types
import { ORDER_STATUS } from '@monorepo/types';

// Utils
import { formatOrders } from '@monorepo/utils';

// Hooks
import { useOrder } from '@monorepo/hooks';

// Components
import {
  ChevronLeftIcon,
  Divider,
  Header,
  Loading,
  OrderCard,
  Text,
} from '@monorepo/ui';

const Order = ({ navigation }) => {
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

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleChangeTab = useCallback(
    (value: number) => setTabActive(value),
    []
  );

  return (
    <Stack backgroundColor="$secondary" flex={1}>
      <Stack
        paddingHorizontal="$5"
        paddingTop="$3"
        paddingBottom="$2.5"
        gap="$5"
      >
        <Header
          title="My order"
          startIcon={<ChevronLeftIcon onPress={handleGoBack} />}
        />
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
        {isPending && <Loading />}
        <Stack flex={1} padding="$5" gap="$5">
          {orders?.map((item) => (
            <OrderCard key={item.id} item={item} onViewDetail={() => null} />
          ))}
        </Stack>
      </ScrollView>
    </Stack>
  );
};

export default memo(Order);
