import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { PRODUCTS } from '@monorepo/constants';
import ProductCard from '.';

const onPress = jest.fn();

const baseProps = {
  item: PRODUCTS[0],
  onPress,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <ProductCard {...props} />
    </TamaguiProvider>
  );
};

describe('ProductCard', () => {

  it('should render ProductCard component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('calls onClick when being clicked', () => {
    const {getByTestId} = setup();

    waitFor(() => {
      const button = getByTestId('product');
      fireEvent.press(button);
  
      expect(onPress).toHaveBeenCalled();
    })
  });
});
