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
