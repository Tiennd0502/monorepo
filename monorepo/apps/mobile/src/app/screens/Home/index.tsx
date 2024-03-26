import React, { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItemInfo, StatusBar } from 'react-native';

// Types
import { Product, ProductResponse } from '@monorepo/types';
import { SCREENS } from '../../types';

// Constants
import { CATEGORIES, INIT_PAGE } from '@monorepo/constants';

// Utils
import { formatProducts, getData } from '@monorepo/utils';

// Hooks | Stores
import { useProducts } from '@monorepo/hooks';

// Components
import { Stack } from 'tamagui';
import {
  Loading,
  CategoryList,
  ProductCard,
  Header,
  SearchIcon,
  CartIcon,
} from '@monorepo/ui';

const Home = ({ navigation }) => {
  const { useFetchProducts } = useProducts();
  const { data, isPending } = useFetchProducts(INIT_PAGE);

  const pages = useMemo(() => data?.pages || [], [data?.pages]);

  const products = useMemo(
    () =>
      (pages.length > 0 && getData<ProductResponse>(pages as never[])) || [],
    [pages]
  );

  const productsFormat = useMemo(
    () =>
      (products.length > 0 && formatProducts(products as ProductResponse[])) ||
      [],
    [products]
  );

  const handleViewCart = useCallback(
    () => navigation.navigate(SCREENS.CART),
    [navigation]
  );

  const handleChangeCategory = useCallback(() => null, []);

  const getKeyExtractor = useCallback(({ id }: Product) => id, []);

  const renderItemProduct = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => {
      const handleNavigateProductDetail = () =>
        navigation.navigate(SCREENS.PRODUCT_DETAIL, { product: item });

      return (
        <Stack width="47%">
          <ProductCard item={item} onPress={handleNavigateProductDetail} />
        </Stack>
      );
    },
    [navigation]
  );

  return (
    <Stack
      flex={1}
      gap="$4"
      backgroundColor="$secondary"
      paddingHorizontal="$5"
    >
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {isPending && <Loading />}
      <Header
        subTitle="Make home"
        title="BEAUTIFUL"
        startIcon={<SearchIcon />}
        endIcon={<CartIcon onPress={handleViewCart} />}
      />
      <Stack>
        <CategoryList list={CATEGORIES} onChange={handleChangeCategory} />
      </Stack>
      <FlatList
        data={productsFormat}
        onEndReached={() => null}
        keyExtractor={getKeyExtractor}
        renderItem={renderItemProduct}
        initialNumToRender={6}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingBottom: 30,
        }}
      />
    </Stack>
  );
};

export default Home;
