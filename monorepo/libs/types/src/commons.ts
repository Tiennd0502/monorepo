export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  disabled?: boolean;
  isActive?: boolean;
  onPress?: () => void;
}

export interface APIResponse<T> {
  status: boolean;
  data: T;
}
