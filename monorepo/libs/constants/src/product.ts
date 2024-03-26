import { Product } from '@monorepo/types';

import { CURRENCY_UNIT } from './commons';

export const DEFAULT_PRODUCT_IMAGE =
  'https://i.ibb.co/nBKp43P/product-default.png';

export const PRODUCT_COLORS = ['#fff', '#b4916c', '#e4cbad'];

export const PRODUCTS: Product[] = [
  {
    id: '01',
    name: 'Black Simple Lamp',
    price: {
      amount: 12,
      formatted: '$ 12.00',
      currency: CURRENCY_UNIT,
    },
    image:
      'https://i.ibb.co/MDpMXMG/jonny-caspari-wsv-CC6-Uy-Kjs-unsplash-1.png',
    description:
      'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.',
  },
  {
    id: '02',
    name: 'Minimal Stand',
    price: {
      amount: 25,
      formatted: '$25.00',
      currency: CURRENCY_UNIT,
    },
    image: 'https://i.ibb.co/y85nTTn/2681826-1.png',
    description:
      'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.',
  },
  {
    id: '03',
    name: 'Coffee Chair',
    price: {
      amount: 20,
      formatted: '$20.00',
      currency: CURRENCY_UNIT,
    },
    image:
      'https://i.ibb.co/m8nVWx2/sarah-dorweiler-fr0-J5-GIVyg-unsplash-1.png',
    description:
      'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.',
  },
  {
    id: '04',
    name: 'Simple Desk',
    price: {
      amount: 50,
      formatted: '$50.00',
      currency: CURRENCY_UNIT,
    },
    image: 'https://i.ibb.co/KwRDcc4/3968901-1.png',
    description:
      'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home.',
  },
];
