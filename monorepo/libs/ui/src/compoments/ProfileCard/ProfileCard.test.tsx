import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import ProfileCard from '.';

const onPress = jest.fn();

const baseProps = {
	title: 'My Orders',
	description: 'Already have 10 orders',
	onPress,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <ProfileCard {...props} />
    </TamaguiProvider>
  );
};


describe('ProfileCard', () => {

  it('should render ProfileCard component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('calls onPress when item clicked', () => {
    const {getByTestId} = setup();
    waitFor(() => {
      const editIcon = getByTestId('profile-card');
      fireEvent.press(editIcon);

      expect(onPress).toHaveBeenCalled();
    });
  });
});
