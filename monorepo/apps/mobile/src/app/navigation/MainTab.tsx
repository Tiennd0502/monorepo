import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  ProfileIcon,
  HomeIcon,
  FavoriteIcon,
  NotificationIcon,
} from '@monorepo/ui';

import { SCREENS } from '../types';
import { FavoriteScreen, HomeScreen, NotificationScreen } from '../screens';
import ProfileStack from './ProfileStack';
import { Header } from '../components';

const Tab = createBottomTabNavigator();

const BUTTON_TABS = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    Icon: HomeIcon,
    label: 'Home Screen',
  },
  {
    name: SCREENS.FAVORITE,
    component: FavoriteScreen,
    Icon: FavoriteIcon,
    label: 'Favorite Screen',
  },
  {
    name: SCREENS.NOTIFICATION,
    component: NotificationScreen,
    Icon: NotificationIcon,
    label: 'Notification Screen',
  },
  {
    name: SCREENS.PROFILE,
    component: ProfileStack,
    Icon: ProfileIcon,
    label: 'Profile Stack',
  },
];

const MainTab = () => (
  <Tab.Navigator
    initialRouteName={SCREENS.HOME}
    screenOptions={{
      tabBarShowLabel: false,
      headerShadowVisible: false,
      headerTransparent: false,
      header: (props) => <Header {...props} />,
    }}
  >
    {BUTTON_TABS.map(({ name, label, component, Icon }) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={(props) => ({
          tabBarIcon: ({ focused }) => (
            <Icon
              aria-label={label}
              color={focused ? '$primary' : '$textDefault'}
            />
          ),
          headerShown: name !== SCREENS.PROFILE,
        })}
      />
    ))}
  </Tab.Navigator>
);

export default MainTab;
