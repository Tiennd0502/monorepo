import { Product, ProductResponse } from '@monorepo/types';

export const getRandomId = () =>
  new Date().getTime().toString() + Math.random().toString(20).slice(3);

export const getData = <T>(pages = [], key = 'listings') => {
  let result: T[] = [];

  pages?.forEach(({ data }) => {
    result = result.concat(data[key]);
  });

  return result;
};

export const formateDate = (timeStamp: number) =>
  new Date(timeStamp * 1000).toLocaleDateString('en-GB');

export const formatProducts = (products: ProductResponse[]): Product[] =>
  products.map(
    ({
      id,
      title,
      list_price,
      description,
      category_id = [],
      images = [],
      rating_data,
      created_at,
    }) => {
      const { rating_average = 0 } = rating_data || {};
      return {
        id,
        name: title,
        price: list_price,
        description,
        categoryId: category_id[0] || '',
        image: images[0] || '',
        rating: rating_average,
        createdAt: formateDate(created_at),
      };
    }
  );
