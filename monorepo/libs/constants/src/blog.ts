import { NEW_STATUS } from '@monorepo/types';

export const NOTIFICATIONS = [
  {
    id: '01',
    title: 'Hello world!',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NORMAL,
  },
  {
    id: '02',
    title: 'Hello world!',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.NEW,
    image:
      'https://i.ibb.co/m8nVWx2/sarah-dorweiler-fr0-J5-GIVyg-unsplash-1.png',
  },
  {
    id: '03',
    title: 'Hello world!',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus quod explicabo maiores repudiandae laudantium quam provident consectetur in dolores.',
    status: NEW_STATUS.HOT,
    image: 'https://i.ibb.co/KwRDcc4/3968901-1.png',
  },
];
