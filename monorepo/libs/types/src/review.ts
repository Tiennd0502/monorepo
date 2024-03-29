import { User } from './user';

export enum REVIEW_TYPES {
  ACCOUNTS = 'accounts',
  LISTINGS = 'listings',
}

export interface BasicReview {
  type?: REVIEW_TYPES;
  id: string;
  title?: string;
  content?: string;
  images?: string[];
  rating?: number;
  user?: User;
  created_at?: string;
}

export interface Review {
  review: BasicReview;
}

export interface RatingData {
  rating_average?: number;
  rating_count?: number;
  rating_count_data?: number;
  review_count?: number;
}

export interface ReviewResponse {
  my_review: BasicReview;
  reviews: BasicReview[];
  total_records: number;
  rating_data: RatingData;
}
