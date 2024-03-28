import { ORDER_STATUS, Order, Card } from '@monorepo/types';

export const ORDER_TABS = {
  Delivered: ORDER_STATUS.Delivered.toString(),
  Processing: ORDER_STATUS.Processing.toString(),
  Cancelled: `${ORDER_STATUS['Canceled by admin']},${ORDER_STATUS['Canceled by customer']}`,
};

export const VISA_IMAGE = 'https://i.ibb.co/4gV41yh/visa.png';

export const MASTER_IMAGE = 'https://i.ibb.co/S0tfTB1/master-card.png';

export const EXTRA_MASTER_IMAGE =
  'https://i.ibb.co/XXLxr6L/extra-master-card.png';

export const DELIVERY_IMAGE = 'https://i.ibb.co/b6P6ytW/delivery.png';

export const BG_CARD = 'https://i.ibb.co/NTwMB09/bg-card.png';

export const CHECK_OUT = {
  payment_method_id: '3056',
  shipping_method_id: '5396',
  shipping_address_id: '823',
};

export const ORDERS: Order[] = [
  {
    id: '01',
    quantity: 1,
    totalAmount: 100,
    createdAt: '20/03/2020',
    status: ORDER_STATUS.Delivered.toString(),
  },
  {
    id: '02',
    quantity: 2,
    totalAmount: 100,
    createdAt: '20/03/2020',
    status: ORDER_STATUS.Delivered.toString(),
  },
  {
    id: '03',
    quantity: 3,
    totalAmount: 100,
    createdAt: '20/03/2020',
    status: ORDER_STATUS.Delivered.toString(),
  },
  {
    id: '04',
    quantity: 4,
    totalAmount: 1000,
    createdAt: '20/03/2020',
    status: ORDER_STATUS.Delivered.toString(),
  },
  {
    id: '05',
    quantity: 1,
    totalAmount: 600,
    createdAt: '21/03/2024',
    status: ORDER_STATUS.Processing.toString(),
  },
  {
    id: '06',
    quantity: 4,
    totalAmount: 1000,
    createdAt: '21/03/2024',
    status: ORDER_STATUS.Processing.toString(),
  },
  {
    id: '07',
    quantity: 7,
    totalAmount: 700,
    createdAt: '21/03/2024',
    status: ORDER_STATUS['Canceled by admin'].toString(),
  },
  {
    id: '08',
    quantity: 2,
    totalAmount: 900,
    createdAt: '21/03/2024',
    status: ORDER_STATUS['Canceled by customer'].toString(),
  },
  {
    id: '09',
    quantity: 1,
    totalAmount: 300,
    createdAt: '21/03/2024',
    status: ORDER_STATUS.Processing.toString(),
  },
  {
    id: '10',
    quantity: 1,
    totalAmount: 300,
    createdAt: '21/03/2024',
    status: ORDER_STATUS['Canceled by admin'].toString(),
  },
];

export const PAYMENT_CARDS: Card[] = [
  {
    id: '* * * *  * * * *  * * * *  1237',
    number: '1234123412341234',
    name: 'Jennyfer Doe',
    expiryDate: '05/23',
    isVisa: true,
    isMasterCard: true,
    cvv: 123,
  },
  {
    id: '* * * *  * * * *  * * * *  1235',
    number: '1235123512351235',
    name: 'Jennyfer Doe',
    expiryDate: '05/23',
    isMasterCard: true,
    cvv: 123,
  },
  {
    id: '* * * *  * * * *  * * * *  1236',
    number: '1236123612361236',
    name: 'Jennyfer Doe',
    expiryDate: '05/23',
    isVisa: true,
    cvv: 123,
  },
];
