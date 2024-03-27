export interface Blog {
  id: string;
  title: string;
  image: string;
  price?: string;
  evaluate: number;
  createdAt: string;
  description: string;
}

export enum NEW_STATUS {
  NORMAL = 'Normal',
  HOT = 'HOT!',
  NEW = 'New',
}

export interface New {
  id: string;
  image?: string;
  title: string;
  description: string;
  status: NEW_STATUS;
}
