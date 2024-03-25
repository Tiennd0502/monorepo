import { TamaguiProvider } from '@monorepo/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppNavigator } from './navigation';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider>
        <AppNavigator />
      </TamaguiProvider>
    </QueryClientProvider>
  );
};

export default App;
