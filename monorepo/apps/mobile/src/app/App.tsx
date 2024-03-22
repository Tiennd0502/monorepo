import { TamaguiProvider } from '@monorepo/provider';

import { AppNavigator } from './navigation';

export const App = () => {
  return (
    <TamaguiProvider>
      <AppNavigator />
    </TamaguiProvider>
  );
};

export default App;
