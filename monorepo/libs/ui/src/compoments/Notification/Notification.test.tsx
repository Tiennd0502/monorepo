import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { NOTIFICATIONS } from '@monorepo/constants';
import Notification from '.';

const onPress = jest.fn();

const baseProps = { onPress };

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Notification {...props} />
    </TamaguiProvider>
  );
};

describe('Notification', () => {

  const props = {
    ...NOTIFICATIONS[0],
    onPress,
  };

  it('should render Notification component', () => {
    const container = setup(NOTIFICATIONS[3]);

    expect(container).toMatchSnapshot();
  });

  it('should render Notification component status new', () => {
    const container = setup(NOTIFICATIONS[0]);

    expect(container).toMatchSnapshot();
  });

  it('should render Notification component with status hot', () => {
    const container = setup(NOTIFICATIONS[2]);

    expect(container).toMatchSnapshot();
  });

  it('calls onPress when detail clicked', () => {
    const {getByTestId} = setup(NOTIFICATIONS[0]);
    
    waitFor(() => {
      const detail = getByTestId('notification');
      fireEvent.press(detail);

      expect(onPress).toHaveBeenCalled();
    });
  });
});
