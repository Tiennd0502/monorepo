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
