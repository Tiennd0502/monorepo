import {
  ORDER_STATUS,
  Order,
  Card,
  Shipping,
} from '@monorepo/types';

export const ORDERS: Order[] = [
  {
    id: '01',
    quantity: 1,
    totalAmount: 100,
    createdAt: '20/03/2020',
    status: ORDER_STATUS.Delivered,
  },
  {
    id: '02',
    quantity: 2,
    totalAmount: 100,
    createdAt: '20/03/2020',
    status: ORDER_STATUS.Processing,
  },
  {
    id: '03',
    quantity: 3,
    totalAmount: 100,
    createdAt: '20/03/2020',
    status: ORDER_STATUS.Delivered,
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

export const SHIPPING_ADDRESS: Shipping[] = [
  {
    id: '123123',
    name: 'Bruno Fernandes',
    address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
    isChangeAddress: true,
  },
  {
    id: '6789',
    name: 'Bruno Fernandes',
    address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
    isChangeAddress: false,
  },
  {
    id: '111',
    name: 'Bruno Fernandes',
    address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
    isChangeAddress: false,
  },
];
