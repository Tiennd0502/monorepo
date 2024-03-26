export interface RatingData {
  rating_average?: number;
  rating_count?: number;
  rating_count_data?: number;
  review_count?: number;
}

export interface Price {
  amount: number;
  formatted: string;
  currency: string;
}

export interface Product {
  id: string;
  name: string;
  price: Price;
  description?: string;
  categoryId?: string;
  image: string;
  rating?: number;
  createdAt?: string;
}

export interface ProductResponse {
  id: string;
  title: string;
  category_id?: string[];
  active: boolean;
  list_price: Price;
  description: string;
  images?: string[];
  rating_data: RatingData;
  created_at: number;
}
