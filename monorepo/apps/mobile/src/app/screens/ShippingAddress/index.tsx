import { useCallback, useMemo, useState } from 'react';
import { ScrollView, Stack } from 'tamagui';

// Types
import { SCREENS, StackScreenProps } from '../../types';
import { ShippingAddressResponse, ADDRESS_TYPE } from '@monorepo/types';

// Constants
import { INIT_PAGE } from '@monorepo/constants';

// Utils
import { formatShippingAddress, getData } from '@monorepo/utils';

// Hooks | Stores
import { useShippingAddress } from '@monorepo/hooks';

// Themes | Components
import { AddIcon, IconButton, ShippingOption, shadows } from '@monorepo/ui';
import { MainLayout } from '../../components';

interface ShippingAddressProps {
  navigation: StackScreenProps;
}

const ShippingAddress = ({ navigation }: ShippingAddressProps) => {
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

        const handleViewEdit = (id: string) => null;

        return (
          <ShippingOption
            key={item.id}
            label="Use as the shipping address"
            isActive={selectedCard === cardId}
            item={item}
            onCheckedChange={handleChangeCard}
            onEditItem={handleViewEdit}
          />
        );
      }),
    [selectedCard, shippingAddress]
  );

  return (
    <MainLayout isLoading={isPending} padding={0}>
      <Stack flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Stack paddingHorizontal="$5">{renderCardList}</Stack>
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
    </MainLayout>
  );
};

export default ShippingAddress;
