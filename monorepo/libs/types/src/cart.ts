import { Price, Product, ProductResponse } from './product';

export interface Cart {
  id: string;
  item: Product;
  quantity: number;
}

export interface OrderDetail extends Cart {
  orderId?: string;
}

export interface BasicCart {
  listing_id: string | string[];
  variant_id?: string;
  quantity?: number;
}

export interface CartPayload {
  cart: BasicCart;
}
export interface CartDetail {
  id: string;
  quantity: number;
  listing: ProductResponse;
  attributes?: string[];
  custom_price?: string;
}

export interface CartResponse {
  cart?: {
    grand_total: Price;
  };
  cart_details: CartDetail[];
}
