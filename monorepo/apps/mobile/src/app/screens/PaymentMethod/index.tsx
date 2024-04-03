import { memo, useCallback, useMemo, useState } from 'react';
import { Stack, ScrollView } from 'tamagui';

// Types
import { SCREENS } from '../../types';
import { BasicLayer } from '@monorepo/types';

// Constants
import { INIT_PAGE } from '@monorepo/constants';

// Utils
import { formatPayment, getData } from '@monorepo/utils';

// Hooks | Stores
import { usePayment } from '@monorepo/hooks';

// Themes | Components
import {
  AddIcon,
  Checkbox,
  ChevronLeftIcon,
  Header,
  Loading,
  PaymentCard,
  IconButton,
  shadows,
} from '@monorepo/ui';

const PaymentMethod = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState('');

  const { useFetchPayments } = usePayment();
  const { data, isPending } = useFetchPayments(INIT_PAGE);
  const pages = useMemo(() => data?.pages || [], [data?.pages]);

  const layers = useMemo(
    () => (pages.length > 0 ? getData<BasicLayer>(pages, 'layers') : []),
    [pages]
  );

  const payments = useMemo(() => formatPayment(layers, true, true), [layers]);

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  const handleClickAddCard = useCallback(
    () => navigation.navigate(SCREENS.ADD_PAYMENT),
    [navigation]
  );

  const renderCardList = useMemo(
    () => (
      <Stack paddingTop="$3" paddingBottom="$5" gap="$1.5">
        {payments.map((item) => {
          const cardId = item.id;
          const handleChangeCard = () => {
            setSelectedCard((prev) => (cardId !== prev ? cardId : ''));
          };

          return (
            <Stack key={cardId} paddingBottom="$3">
              <PaymentCard item={item} isDisabled={selectedCard !== cardId} />
              <Checkbox
                label="Use as default payment method"
                checked={selectedCard === cardId}
                onCheckedChange={handleChangeCard}
              />
            </Stack>
          );
        })}
      </Stack>
    ),
    [payments, selectedCard]
  );

  return (
    <Stack
      flex={1}
      gap="$5"
      backgroundColor="$secondary"
      padding="$5"
      position="relative"
    >
      <Header
        title="Payment method"
        startIcon={<ChevronLeftIcon onPress={handleGoBack} />}
      />
      {isPending && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCardList}
      </ScrollView>
      <IconButton
        position="absolute"
        right="$8"
        bottom="10%"
        zIndex="$5"
        padding="$2.5"
        borderRadius="$full"
        alignItems="center"
        justifyContent="center"
        backgroundColor="$secondary"
        onPress={handleClickAddCard}
        style={shadows.card}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
};

export default memo(PaymentMethod);