import { Cart } from './cart';
import { User } from './user';
import { Price } from './product';
import { ShippingAddressResponse } from './shipping';

export enum ORDER_STATUS {
  'None',
  'Incomplete',
  'Confirmed',
  'Processing',
  'Shipped',
  'Delivered',
  'CanceledByCustomer',
  'CanceledByAdmin',
  'Completed',
}

export interface Order {
  id: string;
  quantity: number;
  status: ORDER_STATUS;
  totalAmount: number;
  createdAt: string;
}

export interface OrderPayload {
  order: {
    status?: number;
    payment_method_id: string;
    shipping_method_id: string;
    shipping_address_id: string;
  };
}

export interface OrderDetailResponse {
  order: {
    id: string;
    account: User;
    user: User;
    builling_address: object;
    completed: boolean;
    order_accounts?: [];
    order_details: [];
    order_reference: string;
    payment_method: object;
    billing_address: object;
    shipping_address: ShippingAddressResponse;
    shipping_method: object;
    shipping_total: object;
    grand_total: Price;
    status_history: [];
    shipments: object;
  };
}

export interface OrderItem {
  id: string;
  order_status: ORDER_STATUS;
  created_at: string;
  grand_total: Price;
  order_details: [
    {
      quantity: number;
    }
  ];
}
export interface StatusOrderDetail {
  color: string;
  label: string;
}

export type StatusOrders = {
  [key in ORDER_STATUS]?: StatusOrderDetail;
};

export interface OrdersResponse {
  orders: OrderItem[];
  totol_records: number;
  page: number;
}

export interface OrderReference {
  order_reference: string;
}

export interface PaymentInfo {
  carts?: Cart[];
  payment_total?: string;
}

export interface ConfirmOrder {
  order: {
    payment_info?: PaymentInfo;
  };
}

export interface ConfirmOrderPayload extends ConfirmOrder {
  id: string;
  order: {
    payment_info?: PaymentInfo;
  };
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

export enum LAYER_TYPE {
  BLOG = 'blog',
}

export interface Shipping {
  id: string;
  name: string;
  address: string;
  isChangeAddress?: boolean;
}
