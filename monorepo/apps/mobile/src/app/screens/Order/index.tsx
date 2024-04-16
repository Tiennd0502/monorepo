import { useMemo, useState, useCallback } from 'react';
import { Stack, ScrollView } from 'tamagui';

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
import { OrderCard, TabHeader } from '@monorepo/ui';
import { MainLayout } from '../../components';

interface OrderProps {
  navigation: StackScreenProps;
}

const Order = ({ navigation }: OrderProps) => {
  const [tabActive, setTabActive] = useState(ORDER_STATUS.Confirmed.toString());
  const { useFetchOrders } = useOrder();
  const { data, isPending } = useFetchOrders({ page: 1, status: +tabActive });
  const orderList = useMemo(
    () => data?.data?.orders || [],
    [data?.data?.orders]
  );

  const orders = useMemo(
    () => (orderList.length ? formatOrders(orderList) : []),
    [orderList]
  );

  const handleChangeTab = useCallback(
    (value: string) => setTabActive(value),
    []
  );

  return (
    <MainLayout padding={0} isLoading={isPending}>
      <TabHeader
        tab={ORDER_TABS}
        value={Object.entries(ORDER_TABS)[0][0]}
        onChange={handleChangeTab}
      />
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
