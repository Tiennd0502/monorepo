import { TamaguiProvider, QueryClientProvider } from '@monorepo/provider';

import { AppNavigator } from './navigation';
import { useToastStore } from '@monorepo/stores';
import { Toast } from '@monorepo/ui';

export const App = () => {
  const [message, variant, hideToast] = useToastStore((state) => [
    state.message,
    state.variant,
    state.hideToast,
  ]);

  return (
    <QueryClientProvider>
      <TamaguiProvider>
        <AppNavigator />
        {message && (
          <Toast message={message} variant={variant} onClose={hideToast} />
        )}
      </TamaguiProvider>
    </QueryClientProvider>
  );
};

export default App;
