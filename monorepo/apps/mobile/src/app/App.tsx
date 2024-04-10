import { useEffect } from 'react';
import { TamaguiProvider } from '@monorepo/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SplashScreen from 'react-native-splash-screen';

import { AppNavigator } from './navigation';

export const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hide(), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider>
        <AppNavigator />
      </TamaguiProvider>
    </QueryClientProvider>
  );
};

export default App;
