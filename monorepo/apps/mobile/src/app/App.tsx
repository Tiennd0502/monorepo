import { TamaguiProvider, QueryClientProvider } from '@monorepo/provider';

import { AppNavigator } from './navigation';

export const App = () => {
  return (
    <QueryClientProvider>
      <TamaguiProvider>
        <AppNavigator />
      </TamaguiProvider>
    </QueryClientProvider>
  );
};

export default App;
