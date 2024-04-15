import { ReactNode, memo } from 'react';
import { StatusBar } from 'react-native';
import isEqual from 'react-fast-compare';
import { Stack, StackProps } from 'tamagui';
import { useRoute } from '@react-navigation/native';

import { Loading } from '@monorepo/ui';
import { TOKEN_KEYS } from '@monorepo/types';
import { getTokenValueByKey } from '@monorepo/utils';
import { SCREENS } from '../../types/navigation';

interface MainLayoutProps extends StackProps {
  isLoading?: boolean;
  children: ReactNode;
}

const MainLayout = ({
  children,
  isLoading = false,
  ...props
}: MainLayoutProps) => {
  const { name: routeName } = useRoute();

  return (
    <Stack flex={1} backgroundColor="$secondary">
      <StatusBar
        backgroundColor={getTokenValueByKey(TOKEN_KEYS.COLOR, '$secondary')}
        barStyle="dark-content"
      />
      {isLoading && (
        <Loading
          {...(routeName === SCREENS.PRODUCT_DETAIL && {
            backgroundColor: '$backgroundLayer',
          })}
        />
      )}
      <Stack flex={1} padding="$5" gap="$5" {...props}>
        {children}
      </Stack>
    </Stack>
  );
};

export default memo(MainLayout, isEqual);
