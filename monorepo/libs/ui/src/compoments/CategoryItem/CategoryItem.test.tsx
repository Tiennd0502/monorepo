import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import {CATEGORIES} from '@monorepo/constants';
import CategoryItem from '.';

const onPress = jest.fn();

const baseProps = {
  item: CATEGORIES[0],
  onPress,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <CategoryItem {...props} />
    </TamaguiProvider>
  );
};

describe('CategoryItem', () => {
  const onPress = jest.fn();
  const props = {
    item: CATEGORIES[0],
    onPress,
  };

  it('should render CategoryItem component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render CategoryItem component with props isActive', () => {
    const container = setup({isActive: true});

    expect(container).toMatchSnapshot();
  });

  it('calls onPress when category clicked', () => {
    const {getByTestId} = setup();

    waitFor(() => {
      const item = getByTestId('category');
      fireEvent.press(item);
  
      expect(onPress).toHaveBeenCalled();
    })
  });
});
