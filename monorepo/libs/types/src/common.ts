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

export interface ErrorBasic {
  error: {
    code: number;
    message: string;
  };
}

export interface ErrorResponse extends Error {
  response: {
    data: ErrorBasic;
    status: number;
  };
}
