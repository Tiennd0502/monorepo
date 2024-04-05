import { Stack, ScrollView } from 'tamagui';
import { Fragment, useCallback, useMemo, useState } from 'react';

// Types
import { ProductResponse } from '@monorepo/types';

// Constants
import { INIT_PAGE } from '@monorepo/constants';

// Utils
import { formatProducts, getData } from '@monorepo/utils';

// Hooks | Stores
import { useProducts } from '@monorepo/hooks';

// Themes | Components
import { Button, CartItem, Divider, Loading } from '@monorepo/ui';

const Favorite = () => {
  const { useFetchProducts } = useProducts();
  const { data, isPending } = useFetchProducts(INIT_PAGE);
  const pages = useMemo(() => data?.pages || [], [data?.pages]);
  const products = useMemo(
    () => (pages.length > 0 && getData(pages)) || [],
    [pages]
  );

  const productsFormat = useMemo(
    () =>
      (products.length > 0 && formatProducts(products as ProductResponse[])) ||
      [],
    [products]
  );
  const [carts, setCarts] = useState(productsFormat);

  const handleDeleteItem = useCallback((id: string) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleAddToCart = useCallback(() => null, []);

  return (
    <Stack flex={1} paddingHorizontal={20} backgroundColor="$secondary">
      {isPending && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        {carts.map((item, index) => (
          <Fragment key={index}>
            <CartItem isFavorites item={item} onDelete={handleDeleteItem} />
            {index < carts.length - 1 && (
              <Divider color="$backgroundTertiary" />
            )}
          </Fragment>
        ))}
      </ScrollView>
      <Button marginBottom="$5" onPress={handleAddToCart}>
        Add all to my cart
      </Button>
    </Stack>
  );
};

export default Favorite;
