import { memo, useCallback, useMemo } from 'react';
import { Stack, XStack } from 'tamagui';
import isEqual from 'react-fast-compare';

// Types
import { Order } from '@monorepo/types';

// Constants
import { CURRENCY_UNIT, ORDER_STATUS_DETAILS } from '@monorepo/constants';

// Components
import Text from '../Text';
import Button from '../Button';
import Divider from '../Divider';
import { shadows } from '../../themes';

interface OrderCardProps {
  item: Order;
  onViewDetail: (value: string) => void;
}

const OrderCard = ({
  item: { id, quantity, totalAmount, createdAt, status },
  onViewDetail,
}: OrderCardProps) => {
  const handleViewDetail = useCallback(() => {
    onViewDetail(id);
  }, [id, onViewDetail]);

  const orderStatusDetail = useMemo(
    () => ORDER_STATUS_DETAILS[status],
    [status]
  );

  return (
    <Stack backgroundColor="$secondary" borderRadius={10} style={shadows.card}>
      <XStack
        justifyContent="space-between"
        paddingTop="$3.75"
        paddingLeft="$5"
        paddingRight="$3.75"
        paddingBottom="$2.5"
        overflow="hidden"
      >
        <Text color="$primary" size="extraMedium">{`Order No${id}`}</Text>
        <Text color="$textLabel" size="medium">
          {createdAt}
        </Text>
      </XStack>
      <Divider height="$0.5" color="$backgroundTertiary" />
      <XStack
        justifyContent="space-between"
        paddingTop="$3.75"
        paddingLeft="$5"
        paddingRight="$3.75"
        paddingBottom="$2.5"
      >
        <XStack>
          <Text color="$textLabel" size="extraMedium">
            Quantity:&nbsp;
          </Text>
          <Text color="$primary" size="extraMedium">
            {quantity}
          </Text>
        </XStack>
        <XStack>
          <Text color="$textLabel">Total Amount:&nbsp;</Text>
          <Text
            color="$primary"
            fontWeight="bold"
          >{`${CURRENCY_UNIT}${totalAmount}`}</Text>
        </XStack>
      </XStack>
      <XStack
        justifyContent="space-between"
        paddingVertical="$5"
        paddingRight="$3.75"
      >
        <Button
          testID="view-detail"
          size="sm"
          width="$25"
          onPress={handleViewDetail}
        >
          Detail
        </Button>
        <Text color={orderStatusDetail?.color}>{orderStatusDetail?.label}</Text>
      </XStack>
    </Stack>
  );
};

export default memo(OrderCard, isEqual);
