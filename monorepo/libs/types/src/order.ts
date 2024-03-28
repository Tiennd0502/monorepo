export interface Order {
  id: string;
  quantity: number;
  status: string;
  totalAmount: number;
  createdAt: string;
}

export interface OrderPayload {
  order: {
    status?: string;
    payment_method_id: string;
    shipping_method_id: string;
    shipping_address_id: string;
  };
}

export interface OrderReference {
  order_reference: string;
}

export enum ORDER_STATUS {
  'None',
  'Incomplete',
  'Confirmed',
  'Processing',
  'Shipped',
  'Delivered',
  'Canceled by customer',
  'Canceled by admin',
  'Completed',
}

export interface Card {
  id: string;
  number: string;
  name: string;
  expiryDate: string;
  isVisa?: boolean;
  isMasterCard?: boolean;
  cvv: number;
}

export interface BasicLayer {
  title: string;
  content: string;
  type: LAYER_TYPE;
  tags?: string[];
  slug?: string;
  cover_image_path?: string;
  summary?: string;
  account_id?: string;
}

export interface Layer {
  layer: BasicLayer;
}
