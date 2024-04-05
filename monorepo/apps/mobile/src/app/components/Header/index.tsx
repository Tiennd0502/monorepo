import { useCallback, useMemo } from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { YStack, XStack } from 'tamagui';

// Types
import { SCREENS } from '../../types';

// Constants
import { AUTH_STORE_KEY } from '@monorepo/constants';

// Hooks | Stores
import { useAuth } from '@monorepo/hooks';
import { authStore, userStore } from '@monorepo/stores';

// Components
import {
  CartIcon,
  ChevronLeftIcon,
  Heading,
  LogOutIcon,
  SearchIcon,
} from '@monorepo/ui';

type HeaderProps = NativeStackHeaderProps | BottomTabHeaderProps;

const Header = ({ navigation, route }: HeaderProps) => {
  const { name = '' } = route;
  const {
    logOut: { mutate },
  } = useAuth();

  const [removeAuth] = authStore((state) => [state.removeAuth]);
  const [user, removeUser] = userStore((state) => [
    state.user,
    state.removeUser,
  ]);

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const handleSearch = useCallback(() => null, []);

  const handleViewCart = useCallback(
    () => navigation.navigate(SCREENS.CART),
    [navigation]
  );

  const handleLogOut = useCallback(() => {
    AsyncStorage.removeItem(AUTH_STORE_KEY);
    removeUser();
    removeAuth();

    user?.id &&
      mutate(user?.id, {
        onError: (error) => {
          console.log(error);
        },
      });
  }, [user?.id, mutate, removeUser, removeAuth]);

  const {
    title = '',
    subTitle = '',
    LeftIcon,
    onClickLeftIcon,
    RightIcon,
    onClickRightIcon,
  } = useMemo(() => {
    switch (name) {
      case SCREENS.HOME: {
        return {
          title: 'BEAUTIFUL',
          subTitle: 'Make home',
          LeftIcon: SearchIcon,
          onClickLeftIcon: handleSearch,
          RightIcon: CartIcon,
          onClickRightIcon: handleViewCart,
        };
      }

      case SCREENS.CART: {
        return {
          title: 'My cart',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.CHECK_OUT: {
        return {
          title: 'Check out',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.FAVORITE: {
        return {
          title: 'Favorites',
          LeftIcon: SearchIcon,
          onClickLeftIcon: handleSearch,
          RightIcon: CartIcon,
          onClickRightIcon: handleViewCart,
        };
      }

      case SCREENS.NOTIFICATION: {
        return {
          title: 'Notifications',
          LeftIcon: SearchIcon,
          onClickLeftIcon: handleSearch,
        };
      }

      case SCREENS.PROFILES_STACK: {
        return {
          title: 'Profile',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.PROFILE: {
        return {
          title: 'Profile',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
          RightIcon: LogOutIcon,
          onClickRightIcon: handleLogOut,
        };
      }

      case SCREENS.ORDER: {
        return {
          title: 'My order',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.SHIPPING_ADDRESS: {
        return {
          title: 'Shipping Address',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.ADD_SHIPPING: {
        return {
          title: 'Add shipping Address',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.PAYMENT_METHOD: {
        return {
          title: 'Payment method',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.ADD_PAYMENT: {
        return {
          title: 'Add payment method',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      case SCREENS.REVIEW: {
        return {
          title: 'My reviews',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
          RightIcon: SearchIcon,
          onClickRightIcon: handleSearch,
        };
      }

      case SCREENS.REVIEW_DETAIL: {
        return {
          title: 'Rating & Review',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
          RightIcon: SearchIcon,
          onClickRightIcon: handleSearch,
        };
      }

      case SCREENS.SETTING: {
        return {
          title: 'Setting',
          LeftIcon: ChevronLeftIcon,
          onClickLeftIcon: handleGoBack,
        };
      }

      default: {
        return null;
      }
    }
  }, [name, handleSearch, handleGoBack, handleViewCart, handleLogOut]);

  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="$backgroundSecondary"
      paddingHorizontal="$5"
      paddingTop="$2"
    >
      <YStack>
        {LeftIcon && onClickLeftIcon && <LeftIcon onPress={onClickLeftIcon} />}
      </YStack>
      <YStack alignItems="center">
        {subTitle && (
          <Heading fontWeight="600" color="$textTertiary">
            {subTitle}
          </Heading>
        )}
        {title && <Heading color="$primary">{title}</Heading>}
      </YStack>
      <YStack>
        {RightIcon && onClickRightIcon && (
          <RightIcon onPress={onClickRightIcon} />
        )}
      </YStack>
    </XStack>
  );
};

export default Header;
