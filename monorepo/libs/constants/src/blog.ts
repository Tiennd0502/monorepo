import { NEW_STATUS } from '@monorepo/types';

export const BLOGS = [
  {
    id: '01',
    title: 'Product 01',
    image:
      'https://i.ibb.co/m8nVWx2/sarah-dorweiler-fr0-J5-GIVyg-unsplash-1.png',
    price: '30.00',
    evaluate: 5,
    createdAt: '20/03/2020',
    description:
      'Nice Furniture with good delivery.Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '02',
    title: 'Product 02',
    image: 'https://i.ibb.co/KwRDcc4/3968901-1.png',
    price: '34.00',
    evaluate: 2,
    createdAt: '20/03/2020',
    description:
      'Nice Furniture with good delivery.Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '03',
    title: 'Product 03',
    image:
      'https://i.ibb.co/MDpMXMG/jonny-caspari-wsv-CC6-Uy-Kjs-unsplash-1.png',
    price: '20.00',
    evaluate: 1.4,
    createdAt: '20/03/2020',
    description:
      'Nice Furniture with good delivery.Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
  {
    id: '04',
    title: 'Product 01',
    image: 'https://i.ibb.co/y85nTTn/2681826-1.png',
    price: '30.00',
    evaluate: 5,
    createdAt: '20/03/2020',
    description:
      'Nice Furniture with good delivery.Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
  },
];

export const NOTIFICATIONS = [
  {
    id: '01',
    title: 'Your order #123456789 has been confirmed',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NEW,
    image:
      'https://i.ibb.co/m8nVWx2/sarah-dorweiler-fr0-J5-GIVyg-unsplash-1.png',
  },
  {
    id: '02',
    title: 'Your order #123456789 has been canceled',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NORMAL,
    image:
      'https://i.ibb.co/m8nVWx2/sarah-dorweiler-fr0-J5-GIVyg-unsplash-1.png',
  },
  {
    id: '03',
    title: 'Discover hot sale furnitures this week.',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.HOT,
  },
  {
    id: '04',
    title: 'Your order #123456789 has been shipped successfully',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NORMAL,
    image: 'https://i.ibb.co/KwRDcc4/3968901-1.png',
  },
  {
    id: '05',
    title: 'Your order #123456789 has been confirmed',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NORMAL,
    image: 'https://i.ibb.co/KwRDcc4/3968901-1.png',
  },
  {
    id: '06',
    title: 'Your order #123456789 has been canceled',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NORMAL,
    image: 'https://i.ibb.co/KwRDcc4/3968901-1.png',
  },
  {
    id: '07',
    title: 'Your order #123456789 has been shipped successfully',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NORMAL,
    image: 'https://i.ibb.co/KwRDcc4/3968901-1.png',
  },
];
