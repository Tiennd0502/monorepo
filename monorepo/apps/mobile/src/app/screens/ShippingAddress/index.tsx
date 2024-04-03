import { memo, useCallback, useMemo, useState } from 'react';
import { ScrollView, Stack } from 'tamagui';

// Types
import { SCREENS } from '../../types';
import { ShippingAddressResponse, ADDRESS_TYPE } from '@monorepo/types';

// Constants
import { INIT_PAGE } from '@monorepo/constants';

// Utils
import { formatShippingAddress, getData } from '@monorepo/utils';

// Hooks | Stores
import { useShippingAddress } from '@monorepo/hooks';

// Themes | Components
import {
  AddIcon,
  Checkbox,
  IconButton,
  ChevronLeftIcon,
  Header,
  ShippingCard,
  shadows,
  Loading,
} from '@monorepo/ui';

const ShippingAddress = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState('');

  const { useFetchShippingAddresses } = useShippingAddress();
  const { data, isPending } = useFetchShippingAddresses(
    INIT_PAGE,
    ADDRESS_TYPE.SHIPPING
  );
  const pages = useMemo(() => data?.pages || [], [data?.pages]);

  const addresses = useMemo(
    () =>
      (pages.length > 0 &&
        getData<ShippingAddressResponse>(pages, 'addresses')) ||
      [],
    [pages]
  );

  const shippingAddress = useMemo(
    () => formatShippingAddress(addresses, true),
    [addresses]
  );

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleAddShipping = useCallback(
    () => navigation.navigate(SCREENS.ADD_SHIPPING),
    [navigation]
  );

  const renderCardList = useMemo(
    () =>
      shippingAddress.map((item) => {
        const cardId = item.id;
        const handleChangeCard = () => {
          setSelectedCard((prev) => (cardId !== prev ? cardId : ''));
        };

        const handleViewEdit = (id: string) => console.log('Edit:', id);

        return (
          <Stack paddingBottom={15} key={cardId}>
            <Checkbox
              label="Use as the shipping address"
              checked={selectedCard === cardId}
              onCheckedChange={handleChangeCard}
            />
            <ShippingCard item={item} onEdit={handleViewEdit} />
          </Stack>
        );
      }),
    [selectedCard, shippingAddress]
  );

  return (
    <Stack flex={1} position="relative" backgroundColor="$backgroundSecondary">
      <Stack paddingHorizontal="$5" paddingVertical="$3.75">
        <Header
          title="Shipping address"
          startIcon={<ChevronLeftIcon onPress={handleGoBack} />}
        />
      </Stack>
      {isPending && <Loading />}
      <Stack flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Stack paddingHorizontal={20}>{renderCardList}</Stack>
        </ScrollView>
      </Stack>
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
        onPress={handleAddShipping}
        style={shadows.card}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
};

export default memo(ShippingAddress);