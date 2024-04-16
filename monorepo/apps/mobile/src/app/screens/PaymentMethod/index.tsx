import { useCallback, useMemo, useState } from 'react';
import { Stack, ScrollView } from 'tamagui';

// Types
import { SCREENS, StackScreenProps } from '../../types';
import { BasicLayer } from '@monorepo/types';

// Constants
import { INIT_PAGE } from '@monorepo/constants';

// Utils
import { formatPayment, getData } from '@monorepo/utils';

// Hooks | Stores
import { usePayment } from '@monorepo/hooks';

// Themes | Components
import { AddIcon, IconButton, shadows, PaymentOption } from '@monorepo/ui';
import { MainLayout } from '../../components';

interface PaymentMethodProps {
  navigation: StackScreenProps;
}

const PaymentMethod = ({ navigation }: PaymentMethodProps) => {
  const [selectedCard, setSelectedCard] = useState('');

  const { useFetchPayments } = usePayment();
  const { data, isPending } = useFetchPayments(INIT_PAGE);
  const pages = useMemo(() => data?.pages || [], [data?.pages]);

  const layers = useMemo(
    () => (pages.length > 0 ? getData<BasicLayer>(pages, 'layers') : []),
    [pages]
  );

  const payments = useMemo(() => formatPayment(layers, true, true), [layers]);

  const handleClickAddCard = useCallback(
    () => navigation.navigate(SCREENS.ADD_PAYMENT),
    [navigation]
  );

  const renderCardList = useMemo(
    () => (
      <Stack paddingTop="$2" gap="$1.5">
        {payments.map((item) => {
          const cardId = item.id;
          const handleChangeCard = () => {
            setSelectedCard((prev) => (cardId !== prev ? cardId : ''));
          };

          return (
            <PaymentOption
              key={cardId}
              label="Use as default payment method"
              isActive={selectedCard === cardId}
              onCheckedChange={handleChangeCard}
              item={item}
            />
          );
        })}
      </Stack>
    ),
    [payments, selectedCard]
  );

  return (
    <MainLayout isLoading={isPending}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCardList}
      </ScrollView>
      <IconButton
        position="absolute"
        right="$8"
        bottom="$10"
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
    </MainLayout>
  );
};

export default PaymentMethod;
