import {
  ORDER_STATUS,
  Order,
  Card,
  Shipping,
  StatusOrders,
} from '@monorepo/types';

export const ORDER_TABS = {
  [ORDER_STATUS.Delivered]: 'Delivered',
  [ORDER_STATUS.Processing]: 'Processing',
  [ORDER_STATUS.Confirmed]: 'Confirmed',
  [ORDER_STATUS.CanceledByAdmin]: 'Cancelled',
};

export const ORDER_STATUS_DETAILS: StatusOrders = {
  [ORDER_STATUS.Delivered]: {
    color: '$successPrimary',
    label: ORDER_TABS[ORDER_STATUS.Delivered],
  },
  [ORDER_STATUS.Processing]: {
    color: '$warningPrimary',
    label: ORDER_TABS[ORDER_STATUS.Processing],
  },
  [ORDER_STATUS.Confirmed]: {
    color: '$successPrimary',
    label: ORDER_TABS[ORDER_STATUS.Confirmed],
  },
  [ORDER_STATUS.CanceledByAdmin]: {
    color: '$errorPrimary',
    label: ORDER_TABS[ORDER_STATUS.CanceledByAdmin],
  },
  [ORDER_STATUS.CanceledByCustomer]: {
    color: '$errorPrimary',
    label: ORDER_TABS[ORDER_STATUS.CanceledByAdmin],
  },
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
