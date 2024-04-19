import React, { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

// Types
import { Product, ProductResponse } from '@monorepo/types';
import { SCREENS, StackScreenProps } from '../../types';

// Constants
import { INIT_PAGE } from '@monorepo/constants';
import { CATEGORIES } from '@monorepo/mocks';

// Utils
import { formatProducts, getData } from '@monorepo/utils';

// Hooks | Stores
import { useProducts } from '@monorepo/hooks';

// Components
import { Stack } from 'tamagui';
import { CategoryList, ProductCard } from '@monorepo/ui';
import { MainLayout } from '../../components';

interface HomeProps {
  navigation: StackScreenProps;
}

const Home = ({ navigation }: HomeProps) => {
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
    <MainLayout isLoading={isPending}>
      <Stack>
        <CategoryList list={CATEGORIES} onChange={handleChangeCategory} />
      </Stack>
      <FlatList
        removeClippedSubviews
        data={productsFormat}
        onEndReached={() => null}
        keyExtractor={getKeyExtractor}
        renderItem={renderItemProduct}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingBottom: 30,
        }}
      />
    </MainLayout>
  );
};

export default Home;
