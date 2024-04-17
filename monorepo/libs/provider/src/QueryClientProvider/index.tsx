import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface Props {
  children: ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 2 * 1000,
      gcTime: 2 * 1000,
    },
  },
});

const Provider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
