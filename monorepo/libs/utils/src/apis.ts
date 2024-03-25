import Config from 'react-native-config';
import axios, { AxiosRequestConfig } from 'axios';

const API_URL = Config.API_URL;
const PUBLIC_KEY = Config.PUBLIC_KEY;

const defaultOptions = {
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${PUBLIC_KEY}`,
  },
};

const instanceAxios = axios.create(defaultOptions);

export const GET = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    console.log('defaultOptions', defaultOptions);
    const { data } = await instanceAxios.get<T>(url, config);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error('Something was wrong');
  }
};

export const POST = async <T, P>(
  url: string,
  payload: P,
  config?: AxiosRequestConfig
) => {
  try {
    const { data } = await instanceAxios.post<T>(url, payload, config);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error('Something was wrong');
  }
};

export const PATCH = async <T, P>(
  url: string,
  payload: P,
  config?: AxiosRequestConfig
) => {
  try {
    const { data } = await instanceAxios.patch<T>(
      API_URL + url,
      payload,
      config
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error('Something was wrong');
  }
};
