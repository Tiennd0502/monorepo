export enum ADDRESS_TYPE {
  SHIPPING = 'shipping_address',
}

export interface ShippingAddressResponse {
  id?: string;
  name: string;
  phone_number?: string;
  address_line_1: string;
  address_line_2?: string;
  landmark?: string;
  state: string;
  post_code: string;
  country: string;
  type: string;
  coordinates?: string;
  formatted_address?: string;
}

export interface ShippingAddress {
  address: ShippingAddressResponse;
}
