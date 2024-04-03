import {
  CartDetail,
  OrderDetail,
  Product,
  ProductResponse,
  ShippingAddressResponse,
  OrderItem,
  Order,
  Shipping,
  BasicLayer,
  BasicReview,
  Card,
  Blog,
} from '@monorepo/types';

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
        rating: +rating_average,
        createdAt: formateDate(created_at),
      };
    }
  );

export const formatReviews = (products: ProductResponse[]): Blog[] => {
  const result: Blog[] = [];

  products.forEach(
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
      const { formatted = '' } = list_price || {};

      rating_average > 0 &&
        result.push({
          id,
          image: images[0] || '',
          title,
          evaluate: +rating_average,
          price: formatted,
          description,
          createdAt: formateDate(created_at),
        });
    }
  );

  return result;
};

export const formatUserReviews = (data: BasicReview[]): Blog[] =>
  data?.map((item) => {
    const { id, user, content = '', created_at = '', rating = 0 } = item;
    const { first_name = '', last_name = '', profile_pic = '' } = user || {};

    return {
      id,
      title: first_name + ' ' + last_name,
      image: profile_pic,
      evaluate: rating,
      createdAt: created_at ? formateDate(+created_at) : '',
      description: content,
    };
  });

export const formatCartDetails = (data: CartDetail[]): OrderDetail[] =>
  data.map(({ id, listing, quantity }) => ({
    id,
    item: formatProducts([listing])[0],
    quantity: quantity,
  }));

export const formatOrders = (data: OrderItem[]): Order[] =>
  data.map(({ id, order_status, created_at, grand_total, order_details }) => {
    const { amount = 0 } = grand_total || {};
    const { quantity = 1 } = order_details?.[0] || {};

    return {
      id,
      quantity,
      status: order_status,
      totalAmount: amount,
      createdAt: created_at ? formateDate(+created_at) : '',
    };
  });

export const formatPayment = (
  data: BasicLayer[],
  isVisa = false,
  isMasterCard = false
): Card[] =>
  data?.map(({ title, content = '', slug = '', summary = '' }) => ({
    id: '* * * *  * * * *  * * * * ' + content?.slice(-4),
    number: content,
    name: title,
    expiryDate: summary,
    isVisa,
    isMasterCard,
    cvv: +slug,
  }));

export const formatShippingAddress = (
  data: ShippingAddressResponse[],
  isChangeAddress = false
): Shipping[] =>
  data?.map(({ id = '', name, formatted_address = '' }) => ({
    id,
    name,
    address: formatted_address,
    isChangeAddress,
  }));
