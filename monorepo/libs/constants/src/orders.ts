import { ORDER_STATUS, Order } from '@monorepo/types';

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
