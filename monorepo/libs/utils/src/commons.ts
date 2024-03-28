import {
  CartDetail,
  OrderDetail,
  Product,
  ProductResponse,
  OrderItem,
  Order,
  ORDER_STATUS,
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
        rating: rating_average,
        createdAt: formateDate(created_at),
      };
    }
  );

export const formatCartDetails = (data: CartDetail[]): OrderDetail[] =>
  data.map(({ id, listing, quantity }) => ({
    id,
    item: formatProducts([listing])[0],
    quantity: quantity,
  }));

export const getTextOfOrderStatus = (value: string) => {
  if (
    value === ORDER_STATUS['Canceled by admin'].toString() ||
    value === ORDER_STATUS['Canceled by customer'].toString()
  ) {
    return 'Cancelled';
  } else {
    return ORDER_STATUS[value as keyof typeof ORDER_STATUS].toString();
  }
};

export const formatOrders = (data: OrderItem[]): Order[] =>
  data.map(({ id, order_status, created_at, grand_total, order_details }) => {
    const { amount = 0 } = grand_total || {};
    const { quantity = 1 } = order_details?.[0] || {};

    return {
      id,
      quantity,
      status: order_status ? getTextOfOrderStatus(order_status) : '',
      totalAmount: amount,
      createdAt: created_at ? formateDate(+created_at) : '',
    };
  });
